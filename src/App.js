import NavBar from "./components/NavBar";
import QuestionCard from "./components/QuestionCard";
import NavigationButtons from "./components/NavigationButtons";
import useQuizFlow from "./hooks/useQuizFlow";
import "./App.css";

export default function App() {
  const {
    currentQuestion,
    currentIndex,
    questions,
    answers,
    isSubmitted,
    score,
    handleSelect,
    handleNext,
    handlePrev,
    handleSubmit,
  } = useQuizFlow();

  return (
    <div>
      <NavBar />
      <main className="main-content">
        {!isSubmitted ? (
          <>
            <QuestionCard
              question={currentQuestion.question}
              choices={currentQuestion.choices}
              selectedIndex={answers[currentQuestion.id]}
              onSelect={handleSelect}
            />
            <NavigationButtons
              currentIndex={currentIndex}
              total={questions.length}
              onNext={handleNext}
              onPrev={handlePrev}
              onSubmit={handleSubmit}
            />
          </>
        ) : (
          <div className="score-screen">
            <h2>Your Score</h2>
            <p>{score} / {questions.length}</p>
            <button onClick={() => window.location.reload()}>Restart</button>
          </div>
        )}
      </main>
    </div>
  );
}
