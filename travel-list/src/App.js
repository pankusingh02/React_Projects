import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "keys", quantity: 3, packed: true },
  { id: 4, description: "bags", quantity: 4, packed: false },
  { id: 5, description: "clothes", quantity: 5, packed: true },
];

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
    if (!description || !select) return;

    const item = { description, select, packed: false, id: Date.now() };
    console.log(item);
    setDescription('');
    setSelect('');
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      {/** onSubmit evenet is whn we sumbit it by suing "Enter" onSubmit={handleSubmit} is like onSubmit={(e){handleSubmit(e)}} when we'll submit it will proprgate an event*/}
      <h3>What do you need for your trip</h3>
      <select
        placeholder="1"
        value={select}
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

function PackingList() {
  return (
    <div className="list" style={{ height: "57vh" }}>
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({item}) {
  console.log("item=====>", item);
  console.log("item.description", item.description);
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button>❌</button>
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