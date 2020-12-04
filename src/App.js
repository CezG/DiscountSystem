import "./App.css";
import React from "react";
import discountMoneySpent from "./helpers/discount/AmountSpent";
import discountFrequency from "./helpers/discount/Frequency";
import discountMonths from "./helpers/discount/MonthsOfCooperation";
import weightedAverage from "./helpers/discount/DiscountsAverage";

function App() {
  let inputMoney = 8000;
  let inputFrequency = 100;
  let inputMonths = 6;

  let discMoney = discountMoneySpent(inputMoney);
  let discFrequency = discountFrequency(inputFrequency);
  let discMonths = discountMonths(inputMonths);

  // let discountValue = weightedAverage(
  //   discMoney.value,
  //   discFrequency.value,
  //   discMonths.value
  // );

  // let discountValue = weightedAverage(discMoney, discFrequency, discMonths);

  console.log(discMoney);
  console.log(discFrequency);
  console.log(discMonths);
  // console.log("znizka wynosi " + discountValue);

  return <div className="App"></div>;
}

export default App;
