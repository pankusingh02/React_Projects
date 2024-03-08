import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="app">
        <h1> Classy Weather</h1>
        <div>
          <input type="text" placeholder="Search from location...."></input>
        </div>
      </div>
    );
  }
}

export default App;
