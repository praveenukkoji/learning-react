import Options from "./Options";

export default function Question({ question, dispatch, ans }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        <Options question={question} dispatch={dispatch} ans={ans} />
      </div>
    </div>
  );
}
