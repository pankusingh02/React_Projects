export default function App() {
  return (
    <>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
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
    <div className="list" style={{ height :"51vh"}}>
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
