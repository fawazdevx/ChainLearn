import { Actor, HttpAgent } from "@dfinity/agent";
import { AuthClient } from "@dfinity/auth-client";
import { createActor } from "../../../declarations/ChainLearn_backend";

const host = "http://localhost:4943";
const CANISTER_ID = "bkyz2-fmaaa-aaaaa-qaaaq-cai";
let actor = null;

export async function loginInternetIdentity(navigate) {
  return new Promise(async (resolve, reject) => {
    try {
      const authClient = await AuthClient.create();
      
      await authClient.login({
        identityProvider: "https://identity.ic0.app/",
        onSuccess: async () => {
          if (await authClient.isAuthenticated()) {
            const identity = authClient.getIdentity();
            const principal = identity.getPrincipal().toText();
            console.log("Logged in as:", principal);
  
            actor = createActor(CANISTER_ID, {
              agentOptions: { identity, host },
            });
            await actor.storeUser(principal);
            console.log("Stored user:", principal);
  
            navigate("/dashboard");
            resolve(principal);
          } else {
            reject("Authentication failed");
          }
        },
        onError: (error) => {
          console.error("Internet Identity login failed:", error);
          reject(error);
        }
      });
    } catch (error) {
      console.error("Internet Identity login failed:", error);
      reject(error);
    }
  });
}

export async function connectPlugWallet(navigate) {
  if (window.ic && window.ic.plug) {
    try {
      const connected = await window.ic.plug.requestConnect();
      if (connected) {
        const principal = await window.ic.plug.agent.getPrincipal();
        console.log("Connected to Plug Wallet:", principal.toText());
  
        actor = createActor(CANISTER_ID, {
          agentOptions: { host },
        });
        await actor.storeUser(principal.toText());
  
        navigate("/dashboard");
        return principal.toText();
      }
    } catch (error) {
      console.error("Plug Wallet connection failed:", error);
    }
  } else {
    alert("Plug Wallet is not installed. Please install it from https://plugwallet.ooo/");
  }
  return null;
}

export async function connectStoicWallet(navigate) {
  if (window.stoic) {
    try {
      await window.stoic.connect();
      const identity = await window.stoic.load();
      const principal = identity.principal;
      console.log("Connected to Stoic Wallet:", principal);
  
      actor = createActor(CANISTER_ID, {
        agentOptions: { host },
      });
      await actor.storeUser(principal);
  
      navigate("/dashboard");
      return principal;
    } catch (error) {
      console.error("Stoic Wallet connection failed:", error);
    }
  } else {
    alert("Stoic Wallet is not installed. Please install it.");
  }
  return null;
}
