import Array "mo:base/Array";

module {

  public type Question = {
    questionText: Text;
    options: [Text];
    correctOptionIndex: Nat;
  };

  public type Courses = { // Defining the Courses type
    courseID: Nat;
    courseName: Text;
    courseDescription: Text;
    courseContent: Text; // Engaging text content for the course
    imageCID: Text;  // IPFS CID for course image support
    quiz: [Question];  // Adding quiz structure
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
          \n**Target Audience:** Ideal for Web2 developers looking to transition into the Web3 space.";
        courseContent = "JavaScript is a versatile programming language primarily used for web development. In this course, you’ll learn how to use JavaScript to create dynamic, interactive websites and build decentralized applications (dApps).";
        imageCID = "QmNnqnzSLjnPmE8eksSgu7L3oRFBjLDN88nC6PkbfB6Tav";  // CID for the course image stored on IPFS [https://ipfs.io/ipfs/QmNnqnzSLjnPmE8eksSgu7L3oRFBjLDN88nC6PkbfB6Tav]
        quiz = [ 
          { questionText = "What is JavaScript?"; options = ["A language", "A framework"]; correctOptionIndex = 0 }
        ]
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
          \n**Target Audience:** Suitable for developers new to Python and interested in blockchain.";
        courseContent = "Python is an easy-to-learn language that’s perfect for beginners. This course teaches you the basics of Python programming, how it can be used for blockchain development, and how to interact with Web3 protocols.";
        imageCID = "QmRAzzdE4EY1Gm5NsAJ2qNAA4yDkhpm8SogzohUMjQBhrg";  // CID for the Python course image [https://ipfs.io/ipfs/QmRAzzdE4EY1Gm5NsAJ2qNAA4yDkhpm8SogzohUMjQBhrg]
        quiz = [
          { questionText = "What is Python?"; options = ["A snake", "A programming language"]; correctOptionIndex = 1 }
        ]
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
          \n**Target Audience:** Developers looking to combine Web2 game development skills with Web3 innovations.";
        courseContent = "C++ is a powerful language used in game development. This course will teach you how to create games using C++ while integrating blockchain elements such as tokenized in-game assets and NFTs.";
        imageCID = "QmUXub6QeErjgzraFmMHZsM4biwoR6YbqbkurqCGy9DHsa";  // CID for the C++ course image [https://ipfs.io/ipfs/QmUXub6QeErjgzraFmMHZsM4biwoR6YbqbkurqCGy9DHsa]
        quiz = [
          { questionText = "What is C++?"; options = ["A snake", "A programming language"]; correctOptionIndex = 1 }
        ]
      }
    ];
  };

  // Function to return the number of available courses
  public func courseCount(): Nat {
    return Array.size(availableCourses());
  };
}
