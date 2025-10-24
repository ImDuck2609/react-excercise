export default function Choices({ choices = [], selectedIndex, onSelect }) {
  if (!choices || choices.length === 0) return <p>No choices available</p>;

  return (
    <div className="choices">
      {choices.map((choice, index) => (
        <button
          key={index}
          className={`choice ${selectedIndex === index ? "choice--selected" : ""}`}
          onClick={() => onSelect(index)}
        >
          {choice}
        </button>
      ))}
    </div>
  );
}
