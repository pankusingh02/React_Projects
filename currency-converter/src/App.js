// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [fistCurrency, setFirstCurrency] = useState("USD");
  const [secondCurrency, setSecondCurrency] = useState("INR");
  const [amount, setAmount] = useState(1);
  const [output, setOutput] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      async function currency() {
        setLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fistCurrency}&to=${secondCurrency}`
        );
        const data = await res.json();
        setOutput(data.rates[secondCurrency]);
        setLoading(false);
      }
      console.log(output);

      if (fistCurrency == secondCurrency) return setOutput(amount);
      currency();
    },
    [fistCurrency, secondCurrency, amount]
  );

  function handleClick(e) {
    setFirstCurrency(e.target.value);
  }
  function handleClickSecond(e) {
    setSecondCurrency(e.target.value);
  }

  function handleChange(e) {
    setAmount(e.target.value);
  }

  console.log(
    "FirstCurrency, secondCurrency, Amount",
    fistCurrency,
    secondCurrency,
    amount
  );

  return (
    <div>
      <input
        onChange={handleChange}
        type="number"
        value={amount}
        style={{ fontSize: "30px" }}
      />
      <select
        value={fistCurrency}
        style={{ fontSize: "30px" }}
        onChange={handleClick}
        disabled={loading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={secondCurrency}
        onChange={handleClickSecond}
        style={{ fontSize: "30px" }}
        disabled={loading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p style={{ fontSize: "30px" }}>
        {loading ? (
          <Loader />
        ) : (
          <>
            {output} {secondCurrency}{" "}
          </>
        )}
      </p>
    </div>
  );
}

function Loader() {
  return <div className="loader"></div>;
}
