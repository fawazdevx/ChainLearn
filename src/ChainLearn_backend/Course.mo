import Array "mo:base/Array";

module {
  public type Courses = { // Define the Courses type
    courseID: Nat;
    courseName: Text;
    courseDescription: Text;
  };

  // Function to return the available courses
  public func availableCourses(): [Courses] {
    return [
      {
        courseID = 1; 
        courseName = "Software Development with JavaScript"; 
        courseDescription = "
          **Course Overview:** Dive into JavaScript, the core language of the web.
          \n**What You'll Learn:**
          - Build powerful decentralized applications (dApps)
          - Essential Web2 JavaScript concepts
          - Introduction to Web3 technologies like smart contracts and Ethereum
          \n**Target Audience:** Ideal for Web2 developers looking to transition into the Web3 space."
      },
      {
        courseID = 2; 
        courseName = "Software Development with Python"; 
        courseDescription = "
          **Course Overview:** Python is a versatile and beginner-friendly language.
          \n**What You'll Learn:**
          - Foundational Python skills
          - Blockchain development with Python
          - Interacting with Web3 protocols and decentralized networks
          - Integration with popular Web3 libraries and frameworks
          \n**Target Audience:** Suitable for developers new to Python and interested in blockchain."
      },
      {
        courseID = 3; 
        courseName = "Game Development with C++"; 
        courseDescription = "
          **Course Overview:** Master game development with C++ and integrate blockchain technology.
          \n**What You'll Learn:**
          - Traditional game development techniques
          - Decentralized gaming elements like tokenized assets and NFTs
          - Creating play-to-earn (P2E) models using blockchain
          \n**Target Audience:** Developers looking to combine Web2 game development skills with Web3 innovations."
      }
    ];
  };

  // Function to return the count of available courses
  public func courseCount(): Nat {
    return Array.size(availableCourses());
  };
}
