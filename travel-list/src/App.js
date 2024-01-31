import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "keys", quantity: 3, packed: true },
//   { id: 4, description: "bags", quantity: 4, packed: false },
//   { id: 5, description: "clothes", quantity: 5, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  console.log("items=====>", items);

  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} />
      <Stats />
      {/* <Counter /> */}
      {/*<FlashCards /> */}
    </>
  );
}

function Logo() {
  return <h1>🏝️FAR AWAY🧳</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [select, setSelect] = useState(1);

  /**
   *
   * Controlled elements techniqiue
   */
  function handleSubmit(e) {
    /**
     * why we are using prevent deafault.
     * After pressing the enter the default behaiour of the browser
     * is to reload the site. and we prevent this default behaiour by using e.preventDefault()
     *
     */
    e.preventDefault();
    if (!description) return;

    const newItem = { description, select, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);
    setDescription("");
    setSelect(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      {/** onSubmit evenet is whn we sumbit it by suing "Enter" onSubmit={handleSubmit} is like onSubmit={(e){handleSubmit(e)}} when we'll submit it will proprgate an event*/}
      <h3>What do you need for your trip</h3>
      <select
        placeholder="1"
        value={Number(select)}
        onChange={(e) => setSelect(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem }) {
  return (
    <div className="list" style={{ height: "57vh" }}>
      <ul>
        {items.map((item) => (
          <Item onDeleteItem={onDeleteItem} item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item, onDeleteItem }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.select} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
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

/** Lecture 75 FlashCard
 * 
 *        const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {

  const [selectedId, setSelectedId] = React.useState(null)
  function handleClick(id) {
    setSelectedId(id)
  }
  return (
    <div
      className="flashcards"
    >
      {questions.map((question) => {
        return (
          <div
            onClick={() => handleClick(question.id)} /** 
            insted of calling the funtion directly onClick={handleClick} why we are doing like this onClick={() => handleClick(question.id)}. Because div will direclty call the function without even executing the onClick event. So we have to pass in a function rather then calling the function directly. passing the function will only call the function when the onClick event will happen.
            
            className={question.id === selectedId ? 'selected' : ""}>
            <p>{question.id === selectedId ? question.answer : question.question}</p>
          </div>
        );
      })}
    </div>
  );
}

 */
