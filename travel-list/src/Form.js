import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [select, setSelect] = useState(1);

  /**
   *
   * Controlled elements techniqiue by using the value of state and setstate on value and onChange handle.
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
