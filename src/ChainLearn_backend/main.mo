import Array "mo:base/Array";
import Course "Course";

actor {
  stable var students : [Student] = [];
  stable var courseCount : Nat = 0;
  stable var courseList : [Course.Courses] = [Course.course1, Course.course2, Course.course3];

  public type Student = {
    firstName : Text;
    lastName : Text;
    course : Text;
    userName : Text;
  };

  public query func getCourseCount(): async Nat {
    return courseCount;
  };

  public query func getStudents() : async [Student] {
    return students;
  };

  public func addStudent(firstName : Text, lastName : Text, course : Text, userName : Text) : async () {
    let newStudent : [Student] = [{ firstName; lastName; course; userName }];
    students := Array.append(students, newStudent);
  };
};
