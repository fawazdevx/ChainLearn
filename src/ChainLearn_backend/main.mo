import Course "Course"; // Importing the Course module
import Array "mo:base/Array";
import Quiz "Quiz";     // Importing the Quiz module
import NFT "NFT";       // Importing the NFT module

actor ChainLearn{
  stable var students: [Student] = []; // Store students in a stable variable
  stable var nftCollection: [NFT.BadgeNFT] = [];  // Store issued NFTs here

  public type Student = { // Defining the Student type
    firstName: Text;
    lastName: Text;
    course: Text;
    userName: Text;
  };

  // Query to get the total number of available courses
  public query func getCourseCount(): async Nat {
    return Course.courseCount();
  };

  // Query to get the list of available courses
  public query func getAvailableCourses(): async [Course.Courses] {
    return Course.availableCourses();
  };

  // Query to get the list of registered students
  public query func getStudents(): async [Student] {
    return students;
  };

  // Function to add a new student
  public func addStudent(firstName: Text, lastName: Text, course: Text, userName: Text): async () {
    let newStudent: Student = { firstName; lastName; course; userName };
    students := Array.append(students, [newStudent]);
  };

  // Query to get the quiz for a specific course
  public query func getQuiz(courseID: Nat): async ?Quiz.Quiz {
    return Quiz.getQuiz(courseID);
  };

  public func issueAchievementNFT(userName: Text, courseName: Text, achievement: Text, imageCID: Text): async () {
    let isRare = (achievement == "rare");
    let imageCID = NFT.getCIDForCourse(courseName, isRare); // Automatically get the CID based on course name
    nftCollection := NFT.issueNFT(nftCollection, userName, courseName, achievement);

  };

  // Query to get all issued NFTs
  public query func getAllNFTs(): async [NFT.BadgeNFT] {
    return nftCollection;
  };
}
