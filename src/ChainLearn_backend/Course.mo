module {
  public type Courses = {
    courseID : Nat;
    courseName : Text;
  };

  public let course1 : Courses = {
    courseID = 1;
    courseName = "Software Development with Javascript";
  };

  public let course2 : Courses = {
    courseID = 2;
    courseName = "Software Development with Python";
  };

  public let course3 : Courses = {
    courseID = 3;
    courseName = "Game Development with C++";
  };

  public query func getCourseCount(): async Nat {
    return 3; // Since there are 3 courses.
  };
};
