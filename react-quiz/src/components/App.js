// import DateCounter from "./DateCounter";
// import UseReducerExample from "./useReducerExample";
//npm run server
import React, { useEffect, useReducer } from "react";
import Loader from "./Loader";
import Error from "./Error";
import NextButton from "./NextButton";

import Header from "./Header";
import Main from "./Main";
import StartScreen from "./StartScreen";
import Question from "./Question";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";

const intialState = {
  questions: [],
  index: 0,
  //loading,error , ready, active, finsihed
  status: "loading",
  answer: null,
  points: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "Error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return { ...state, status: "finished" };
    case "restart":
      return {
        ...state,
        questions: state.questions,
        status: "ready",
        index: null,
        points: 0,
      };
    default:
      throw new Error("Action Unknown");
  }
}

export default function App() {
  //  const [state, dispatch] = useReducer(
  const [{ questions, status, index, answer, points }, dispatch] = useReducer(
    reducer,
    intialState
  );
  const numQuestions = questions.length;
  const maxPosiblePoints = questions.reduce((pre, cur) => pre + cur.points, 0);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: "dataReceived", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "dataFailed" });
      });

    // .then((res) => {
    //   res.json();
    //   console.log(res);
    // })
    // .then((data) => {
    //   console.log(data);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  }, []);
  return (
    <div className="top-component">
      {/* <DateCounter />
      <UseReducerExample /> */}
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            {" "}
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              maxPosiblePoints={maxPosiblePoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextButton
              dispatch={dispatch}
              answer={answer}
              index={index}
              numQuestions={numQuestions}
            />
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            maxPossiblePoints={maxPosiblePoints}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
