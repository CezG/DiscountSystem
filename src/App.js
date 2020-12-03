import "./App.css";
import Logic from "es6-fuzz/lib/logic";
import Trapezoid from "es6-fuzz/lib/curve/trapezoid";
import Triangle from "es6-fuzz/lib/curve/triangle";
import React from "react";
import { Component } from "react";

class Discount {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}

function App() {
  // let Logic = require("es6-fuzz/lib/logic");
  // let Trapezoid = require("es6-fuzz/lib/curve/trapezoid");

  const min = new Discount("min", 0.02);
  const medium = new Discount("medium", 0.15);
  const high = new Discount("high", 0.35);
  const max = new Discount("max", 0.5);

  let logicAmountSpent = new Logic();
  let amountSpent = logicAmountSpent
    .init(min, new Triangle(0, 2000, 5000))
    .or(medium, new Triangle(2000, 5000, 7000))
    .or(high, new Triangle(5000, 7000, 10000))
    .or(max, new Triangle(7000, 100000, 100000000))
    .defuzzify(10000);
  //3500

  let discountMoneySpent = amountSpent.defuzzified.value;

  let logicFrequencyPerYear = new Logic();
  let frequencyPerYear = logicFrequencyPerYear
    .init(min, new Triangle(0, 3, 6))
    .or(medium, new Triangle(5, 12, 20))
    .or(high, new Triangle(18, 30, 50))
    .or(max, new Triangle(48, 100, 50000))
    .defuzzify(100);

  let discountFrequency = frequencyPerYear.defuzzified.value;

  let logicMonthsOfCooperation = new Logic();
  let monthsOfCooperation = logicMonthsOfCooperation
    .init(min, new Triangle(0, 6, 12))
    .or(medium, new Triangle(10, 17, 24))
    .or(high, new Triangle(22, 35, 48))
    .or(max, new Triangle(43, 60, 1200))
    .defuzzify(6);

  let discountMonths = monthsOfCooperation.defuzzified.value;

  let weightedAverage = (x, y, z) => (x * 4 + y * 1 + z * 2) / (1 + 2 + 4);

  let discountValue = weightedAverage(
    discountMoneySpent,
    discountFrequency,
    discountMonths
  ).toFixed(2);

  console.log(amountSpent);
  console.log(frequencyPerYear);
  console.log(monthsOfCooperation);
  console.log("znizka wynosi " + discountValue);

  return <div className="App"></div>;
}

// class App extends Component {
//   state = {
//     companyName: "",
//   };

//   handleChange = (e) => {
//     console.log(e.target.type);
//     console.log(e.target.name);

//     const value = e.target.value;
//     this.setState({
//       companyName: value,
//     });
//   };
//   render() {
//     return (
//       <div className="App">
//         <form>
//           <label htmlFor="company">
//             Twoje imie
//             <input
//               type="text"
//               id="company"
//               name="companyName"
//               value={this.state.companyName}
//               onChange={this.handleChange}
//             />
//           </label>

//           <label htmlFor="user">
//             Twoje imie
//             <input
//               type="text"
//               id="user"
//               name="username"
//               value={this.state.username}
//               onChange={this.handleChange}
//             />
//           </label>

//           <label htmlFor="user">
//             Twoje imie
//             <input
//               type="text"
//               id="user"
//               name="username"
//               value={this.state.username}
//               onChange={this.handleChange}
//             />
//           </label>
//         </form>
//       </div>
//     );
//   }
// }

export default App;
