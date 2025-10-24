import Choices from "./Choices";

export default function QuestionCard({ question, choices, selectedIndex, onSelect }) {
  return (
    <div className="question-card">
      <h2>{question}</h2>
      <Choices
        choices={choices}
        selectedIndex={selectedIndex}
        onSelect={onSelect}
      />
    </div>
  );
}
