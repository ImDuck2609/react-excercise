import { useState } from "react";
import questions from "../data/questions.json";

export default function useQuizFlow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleSelect = (choiceIndex) => {
  setAnswers((prev) => ({ ...prev, [currentQuestion.id]: choiceIndex }));
};

  const handleNext = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleSubmit = () => setIsSubmitted(true);

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correct) score++;
    });
    return score;
  };

  return {
    questions,
    currentQuestion,
    currentIndex,
    answers,
    isSubmitted,
    score: calculateScore(),
    handleSelect,
    handleNext,
    handlePrev,
    handleSubmit,
  };
}
