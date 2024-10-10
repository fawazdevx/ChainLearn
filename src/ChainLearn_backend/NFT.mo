// NFT.mo
import Array "mo:base/Array";

module {

  public type BadgeNFT = {
    nftID: Nat;
    studentUserName: Text;
    courseName: Text;
    achievement: Text;
  };

  // Function to issue a new NFT badge to a student
  public func issueNFT(
    nftCollection: [BadgeNFT],
    studentUserName: Text,
    courseName: Text,
    achievement: Text
  ): [BadgeNFT] {
    let newNFT: BadgeNFT = {
      nftID = Array.size(nftCollection) + 1;
      studentUserName;
      courseName;
      achievement;
    };

    return Array.append(nftCollection, [newNFT]);
  };

  // Query to get the NFT collection
  public func getNFTs(nftCollection: [BadgeNFT]): [BadgeNFT] {
    return nftCollection;
  };
}
