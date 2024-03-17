import { useReducer } from "react";

const intialState = { loading: false, post: {}, error: false };

const reducer = (state, action) => {
  switch (action.type) {
    case "fetchStart":
      return { loading: true, error: false, post: {} };
    case "fetchSucess":
      return { ...state, loading: false, post: action.payload };
    case "fetchError":
      return { ...state, error: true };
    default:
      return state;
  }
};
export default function UseReducerExample() {
  const [state, dispatch] = useReducer(reducer, intialState);
  const handleFetch = () => {
    dispatch({ type: "fetchStart" });
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: "fetchSucess", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "fetchError" });
      });
  };

  return (
    <div>
      <button className="btn" onClick={handleFetch}>
        {state.loading ? "wait..." : "Fetch the post"}
      </button>
      <div>
        <p className="btn">{state?.post?.title}......</p>
        <span>{state.error && "Something went wrong"}</span>
      </div>
    </div>
  );
}
