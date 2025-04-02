import Principal "mo:base/Principal";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Iter "mo:base/Iter";
import TrieMap "mo:base/TrieMap";

actor ChainLearn {
    stable var userList : [(Principal, Bool)] = [];
    private var users = TrieMap.TrieMap<Principal, Bool>(Principal.equal, Principal.hash);

    system func preupgrade() {
        userList := Iter.toArray(users.entries());
    };

    system func postupgrade() {
        users := TrieMap.fromEntries<Principal, Bool>(Iter.fromArray(userList), Principal.equal, Principal.hash);
    };

    // Register user if not already registered
    public func storeUser(principalText : Text) : async () {
        let p = Principal.fromText(principalText);
        if (users.get(p) == null) {
            users.put(p, true);
        };
    };

    public query func isUserRegistered(principal : Principal) : async Bool {
        return users.get(principal) != null;
    };

    public query func getUserCount() : async Nat {
        return users.size();
    };
};
