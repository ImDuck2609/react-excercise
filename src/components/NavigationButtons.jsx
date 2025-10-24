export default function NavigationButtons({ currentIndex, total, onNext, onPrev, onSubmit }) {
  return (
    <div className="nav-buttons">
      <button onClick={onPrev} disabled={currentIndex === 0}>Previous</button>
      {currentIndex < total - 1 ? (
        <button onClick={onNext}>Next</button>
      ) : (
        <button onClick={onSubmit}>Submit</button>
      )}
    </div>
  );
}
