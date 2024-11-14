/// Quiz.mo
import Array "mo:base/Array";

module {

  public type Question = {
    questionText: Text;
    options: [Text];
    correctOptionIndex: Nat;
  };

  public type Quiz = {
    courseID: Nat;
    questions: [Question];
  };

  // Function to get the quiz for a specific course
  public func getQuiz(courseID: Nat): ?Quiz {
    let quizzes: [Quiz] = [
      {
        courseID = 1;
        questions = [
          { questionText = "What is JavaScript?"; options = ["A language", "A framework"]; correctOptionIndex = 0 }
        ]
      },
      {
        courseID = 2;
        questions = [
          { questionText = "What is Python?"; options = ["A snake", "A programming language"]; correctOptionIndex = 1 }
        ]
      }
    ];

    // Return the quiz for the given courseID, if available
    Array.find<Quiz>(quizzes, func (quiz) { quiz.courseID == courseID });
  };
}
