import { useState } from "react";
export default function App() {
  return (
    <>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
      {/* <Counter /> */}
    </>
  );
}

function Logo() {
  return <h1>🏝️FAR AWAY🧳</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip</h3>
    </div>
  );
}

function PackingList() {
  return (
    <div className="list" style={{ height: "0vh" }}>
      This is packing list
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>This is stats</em>;
    </footer>
  );
}
// function Counter() {
//   const [count, setCount] = useState(0);
//   const [steps, setSteps] = useState(1);

//   console.log(count, setCount);

//   function countHandlerMin() {
//     setCount((c) => c - steps);
//   }
//   function countHandlerAdd() {
//     setCount((c) => c + steps);
//   }

//   const currentDate = new Date();
//   currentDate.setDate(currentDate.getDate() + count); //1707466771256 convert it to toDateString()
//   return (
//     <div>
//       <div>
//         <button onClick={() => setSteps((s) => s - 1)}> -</button>
//         <span>Step :{steps}</span>
//         <button onClick={() => setSteps((s) => s + 1)}> +</button>
//       </div>

//       <div>
//         <button onClick={countHandlerMin}> -</button>
//         <span>Count : {count}</span>
//         <button onClick={countHandlerAdd}> +</button>
//       </div>

//       <p>
//         <span>
//           {count === 0
//             ? "Todays is "
//             : count > 0
//             ? `${count} days from todays is `
//             : `${Math.abs(count)} days ago was `}
//         </span>
//         <span>{currentDate.toDateString()}</span>
//       </p>
//     </div>
//   );
// }
