// import DateCounter from "./DateCounter";
// import UseReducerExample from "./useReducerExample";
//npm run server
import React, { useEffect, useReducer } from "react";
import Loader from "./Loader";
import Error from "./Error";

import Header from "./Header";
import Main from "./Main";
import StartScreen from "./StartScreen";
import Question from "./Question";

const intialState = {
  questions: [],
  index: 0,
  //loading,error , ready, active, finsihed
  status: "loading",
  answer: null,
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
      return { ...state, answer: action.payload };
    default:
      throw new Error("Action Unknown");
  }
}

export default function App() {
  //  const [intialState, dispatch] = useReducer(
  const [{ questions, status, index, answer }, dispatch] = useReducer(
    reducer,
    intialState
  );
  const numQuestions = questions.length;

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
          <Question
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
          />
        )}
      </Main>
    </div>
  );
}
