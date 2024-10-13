/// NFT.mo
import Array "mo:base/Array";

module NFT {

  public type BadgeNFT = {
    nftID: Nat;
    studentUserName: Text;
    courseName: Text;
    achievement: Text; // Can specify rarity
    imageCID: Text; // Store the CID for the image
  };

  // Define a structure for course-to-CID mapping
  public type CourseCID = {
    courseName: Text;
    cid: Text;
  };

  // Array containing course-to-CID mappings for rare NFTs
  public let rareCourseCIDList: [CourseCID] = [
    { courseName = "Software Development with Python"; cid = "QmUXbdscMQyavR3bkAyaCQ7MTRXSrKdVrHaBptviksE75B" }, // rareNFT [https://ipfs.io/ipfs/QmUXbdscMQyavR3bkAyaCQ7MTRXSrKdVrHaBptviksE75B]
    { courseName = "Software Development with JavaScript"; cid = "Qmf1vVRquJeo2Nk3rTf6MGAuScCiLQVMofwUujSa1qXLpj" }, // rareNFT [https://ipfs.io/ipfs/Qmf1vVRquJeo2Nk3rTf6MGAuScCiLQVMofwUujSa1qXLpj]
    { courseName = "Game Development with C++"; cid = "QmUB4hawPcVNpmdHXUfY1iBSMs7NQdyjfrdhJDLZ5FFzqF" } // rareNFT [https://ipfs.io/ipfs/QmUB4hawPcVNpmdHXUfY1iBSMs7NQdyjfrdhJDLZ5FFzqF]
  ];

  // Array containing course-to-CID mappings for common NFTs
  public let commonCourseCIDList: [CourseCID] = [
    { courseName = "Software Development with Python"; cid = "QmUTbBngtQaa9vaW89Zw5hz5hhqqWduHAGirr6bwiuuBQV" }, // commonNFT [https://ipfs.io/ipfs/QmUTbBngtQaa9vaW89Zw5hz5hhqqWduHAGirr6bwiuuBQV]
    { courseName = "Software Development with JavaScript"; cid = "QmZzM65sBxK8L6taaUk1eQFw7Kn1X6vMuy9c7Z9M8oZFbA" }, // commonNFT [https://ipfs.io/ipfs/QmZzM65sBxK8L6taaUk1eQFw7Kn1X6vMuy9c7Z9M8oZFbA]
    { courseName = "Game Development with C++"; cid = "Qmcgxyk8gRBQ4sAfokP8ANXVkQZJTadU6fvP48UuzN6xKG" } // commonNFT [https://ipfs.io/ipfs/Qmcgxyk8gRBQ4sAfokP8ANXVkQZJTadU6fvP48UuzN6xKG]
  ];

  // Function to retrieve CID based on the course name and rarity
  public func getCIDForCourse(courseName: Text, isRare: Bool): Text {
    let result = if (isRare) {
      Array.find<CourseCID>(rareCourseCIDList, func (course) {
        course.courseName == courseName
      })
    } else {
      Array.find<CourseCID>(commonCourseCIDList, func (course) {
        course.courseName == courseName
      });
    };

    // If the course name is found, return the corresponding CID, else return a default CID
    switch (result) {
      case (?courseCID) courseCID.cid;
      case null "default-cid";  // Fallback CID
    }
  };

  // Function to issue a new NFT badge to a student
  public func issueNFT(
    nftCollection: [BadgeNFT],
    studentUserName: Text,
    courseName: Text,
    achievement: Text // Can specify rarity
  ): [BadgeNFT] {
    // Determine if the achievement is rare or common
    let isRare = (achievement == "rare");

    // Automatically retrieve the CID for the course using the function
    let imageCID = getCIDForCourse(courseName, isRare);

    let newNFT: BadgeNFT = {
      nftID = Array.size(nftCollection) + 1; // Generate a new ID
      studentUserName;
      courseName;
      achievement;
      imageCID; // Automatically assign the CID
    };

    return Array.append(nftCollection, [newNFT]);
  };

  // Function to get the NFT collection
  public func getNFTs(nftCollection: [BadgeNFT]): [BadgeNFT] {
    return nftCollection;
  };

  // Function to get a specific NFT by its ID
  public func getNFT(nftCollection: [BadgeNFT], nftID: Nat): ?BadgeNFT {
    return Array.find<BadgeNFT>(nftCollection, func (nft) { nft.nftID == nftID });
  };
};
