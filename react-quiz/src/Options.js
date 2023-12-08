export default function Options({ question, dispatch, ans }) {
  const hasAnswered = ans !== null;

  return (
    <div className="options">
      {question.options.map((option, ind) => (
        <button
          className={`btn btn-option 
            ${ind === ans ? "answer" : ""} 
            ${
              hasAnswered
                ? ind === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }
          `}
          key={option}
          disabled={ans !== null}
          onClick={() => dispatch({ type: "newAnswer", payload: ind })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
