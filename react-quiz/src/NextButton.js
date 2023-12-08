export default function NextButton({ dispatch, ans, ind, numQues }) {
  if (ans === null) return null;

  if (ind < numQues - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQue" })}
      >
        Next Question
      </button>
    );
  if (ind === numQues - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finished" })}
      >
        Finish
      </button>
    );
}
