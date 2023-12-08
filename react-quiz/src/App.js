import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";

const SECS = 30;

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  ans: null,
  points: 0,
  highscore: 0,
  secondsRemain: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemain: state.questions.length * SECS,
      };
    case "finished":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        ans: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQue":
      return { ...state, index: state.index + 1, ans: null };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
        highscore: state.highscore,
      };
    case "tick":
      return {
        ...state,
        secondsRemain: state.secondsRemain - 1,
        status: state.secondsRemain === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Unknown");
  }
}

export default function App() {
  const [
    { questions, status, index, ans, points, highscore, secondsRemain },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQues = questions.length;
  const possiblePoints = questions.reduce((prev, cur) => prev + cur.points, 0);
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQues={numQues} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              ind={index}
              numQuestions={numQues}
              points={points}
              possiblePoints={possiblePoints}
              answer={ans}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              ans={ans}
            />
            <Footer>
              <Timer dispatch={dispatch} secondsRemain={secondsRemain} />
              <NextButton
                dispatch={dispatch}
                ans={ans}
                ind={index}
                numQues={numQues}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            possiblePoints={possiblePoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
