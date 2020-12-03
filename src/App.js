import "./App.css";
import Logic from "es6-fuzz/lib/logic";
import Trapezoid from "es6-fuzz/lib/curve/trapezoid";
import React from "react";
import { Component } from "react";

// function App() {
//   // let Logic = require("es6-fuzz/lib/logic");
//   // let Trapezoid = require("es6-fuzz/lib/curve/trapezoid");

//   let logic = new Logic();
//   let res = logic
//     .init("", new Trapezoid(0, 12, 18, 20)) // until 12-18 around warm
//     .or("warm", new Trapezoid(12, 14, 16, 100)) // until 12-18 around warm
//     .defuzzify(19);

//   console.log(res);

//   return <div className="App"></div>;
// }

class App extends Component {
  state = {
    companyName: "",
  };

  handleChange = (e) => {
    console.log(e.target.type);
    console.log(e.target.name);

    const value = e.target.value;
    this.setState({
      companyName: value,
    });
  };
  render() {
    return (
      <div className="App">
        <form>
          <label htmlFor="company">
            Twoje imie
            <input
              type="text"
              id="company"
              name="companyName"
              value={this.state.companyName}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="user">
            Twoje imie
            <input
              type="text"
              id="user"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="user">
            Twoje imie
            <input
              type="text"
              id="user"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default App;
