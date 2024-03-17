// import DateCounter from "./DateCounter";
// import UseReducerExample from "./useReducerExample";
import React, { useEffect, useReducer } from "react";
import Loader from "./Loader";
import Error from "./Error";

import Header from "./Header";
import Main from "./Main";

const intialState = {
  questions: [],

  //loading,error , ready, active, finsihed
  status: "loading",
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "Error" };
    default:
      throw new Error("Action Unknown");
  }
}

export default function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, intialState);

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
    <div>
      {/* <DateCounter />
      <UseReducerExample /> */}
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
      </Main>
    </div>
  );
}
