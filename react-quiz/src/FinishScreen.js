export default function FinishScreen({
  points,
  possiblePoints,
  highscore,
  dispatch,
}) {
  const per = (points / possiblePoints) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {possiblePoints}(
        {Math.ceil(per)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}
