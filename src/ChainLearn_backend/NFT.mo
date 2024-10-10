import Array "mo:base/Array";

module {

  public type BadgeNFT = {
    nftID: Nat;
    studentUserName: Text;
    courseName: Text;
    achievement: Text;
    imageCID: Text;  // Store the CID for the image
  };

  // Function to issue a new NFT badge to a student
  public func issueNFT(
    nftCollection: [BadgeNFT],
    studentUserName: Text,
    courseName: Text,
    achievement: Text,
    imageCID: Text  // the image CID parameter
  ): [BadgeNFT] {
    let newNFT: BadgeNFT = {
      nftID = Array.size(nftCollection) + 1; // Generate a new ID
      studentUserName;
      courseName;
      achievement;
      imageCID;  // Stores the image CID in the NFT
    };

    return Array.append(nftCollection, [newNFT]);
  };

  // Query to get the NFT collection
  public func getNFTs(nftCollection: [BadgeNFT]): [BadgeNFT] {
    return nftCollection;
  };

  // Query to get a specific NFT by its ID
  public query func getNFT(nftCollection: [BadgeNFT], nftID: Nat): async ?BadgeNFT {
    return Array.find<BadgeNFT>(nftCollection, func (nft) { nft.nftID == nftID });
  };
};
