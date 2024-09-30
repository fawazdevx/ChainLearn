import Array "mo:base/Array";

actor {
  stable var students : [Student] = [];

  public type Student = {
    firstName : Text;
    lastName : Text;
    school : Text;
  };

  public query func getStudents() : async [Student] {
    return students;
  };

  public func addStudent(firstName : Text, lastName : Text, school : Text) : async () {
    let newStudent : [Student] = [{ firstName; lastName; school }];
    students := Array.append(students, newStudent);
  };
};