export async function connectPlugWallet(navigate) {
  if (window.ic?.plug) {
    try {
      const connected = await window.ic.plug.requestConnect();
      if (connected) {
        const principal = await window.ic.plug.getPrincipal();
        console.log("Connected to Plug wallet:", principal.toText());
        // Redirect to Dashboard page
        navigate("/dashboard");
        return principal.toText();
      }
    } catch (error) {
      console.error("Plug wallet connection failed:", error);
    }
  } else {
    alert("Plug wallet not found! Install it from https://plugwallet.ooo/");
  }
}

export async function connectStoicWallet(navigate) {
  if (window.stoicWallet) {
    try {
      await window.stoicWallet.load();
      const identity = await window.stoicWallet.connect();
      console.log("Connected to Stoic wallet:", identity.getPrincipal().toText());
      // Redirect to Dashboard page
      navigate("/dashboard");
      return identity.getPrincipal().toText();
    } catch (error) {
      console.error("Stoic wallet connection failed:", error);
    }
  } else {
    alert("Stoic wallet not found! Visit https://www.stoicwallet.com/");
  }
}