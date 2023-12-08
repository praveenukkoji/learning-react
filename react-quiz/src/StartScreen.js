export default function StartScreen({ numQues, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the React quiz!</h2>
      <h3>{numQues} question to test your react mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Lets get started
      </button>
    </div>
  );
}
