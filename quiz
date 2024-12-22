import React, { useState } from 'react';
import './App.css'

const quizData = [
  {
    question: "Which language is used for web development?",
    options: ["Python", "JavaScript", "C++", "Java"],
    correctAnswer: "JavaScript",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "Hyperlink Text Markdown Language",
      "HyperTool Multi Language",
      "None of the above",
    ],
    correctAnswer: "HyperText Markup Language",
  },
  {
    question: "Which of the following is a JavaScript framework?",
    options: ["React", "Django", "Flask", "Spring"],
    correctAnswer: "React",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: ["let", "var", "const", "constant"],
    correctAnswer: "const",
  },
  {
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(n^2)", "O(log n)", "O(1)"],
    correctAnswer: "O(log n)",
  },
  {
    question: "Which of the following is not a programming language?",
    options: ["Python", "HTML", "Ruby", "Java"],
    correctAnswer: "HTML",
  },
  {
    question: "What is the correct syntax for an arrow function in JavaScript?",
    options: [
      "() => {}",
      "function() {}",
      "function => {}",
      "{} => function",
    ],
    correctAnswer: "() => {}",
  },
  {
    question: "Which method is used to add an element to the end of an array in JavaScript?",
    options: ["push()", "pop()", "unshift()", "shift()"],
    correctAnswer: "push()",
  },
  {
    question: "Which of these is not a relational database?",
    options: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
    correctAnswer: "MongoDB",
  },
];


const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === quizData[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
    } else {
      setIsQuizFinished(true);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {isQuizFinished ? (
        <div>
          <h2>Quiz Finished!</h2>
          <p>Your Score: {score} / {quizData.length}</p>
        </div>
      ) : (
        <div>
          <h2>{quizData[currentQuestionIndex].question}</h2>
          {quizData[currentQuestionIndex].options.map((option, index) => (
            <div key={index}>
              <label>
                <input
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
                {option}
              </label>
            </div>
          ))}
          <button
            onClick={handleSubmit}
            disabled={!selectedOption}
            style={{ marginTop: "10px", padding: "5px 10px" }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
