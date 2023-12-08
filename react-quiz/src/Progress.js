export default function Progress({
  ind,
  numQuestions,
  points,
  possiblePoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={ind + Number(answer !== null)} />
      <p>
        Question <strong>{ind + 1}</strong> / {numQuestions}
      </p>
      <p>
        {points} / {possiblePoints}
      </p>
    </header>
  );
}
