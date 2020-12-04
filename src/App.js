import "./App.css";
import React from "react";
import discountMoneySpent from "./helpers/Discounts";
import discountFrequency from "./helpers/Discounts";
import discountMonths from "./helpers/Discounts";
import weightedAverage from "./helpers/Discounts";

// import discountValue from "./helpers/Discounts";

function App() {
  let inputMoney = 10000;
  let inputFrequency = 100;
  let inputMonths = 6;

  let discMoney = discountMoneySpent(inputMoney);
  let discFrequency = discountFrequency(inputFrequency);
  let discMonths = discountMonths(inputMonths);

  let discountValue = weightedAverage(
    discMoney.value,
    discFrequency.value,
    discMonths.value
  );

  console.log(weightedAverage(0.5, 0.5, 0.5));

  // console.log(discMoney);
  // console.log(discFrequency);
  // console.log(discMonths);
  console.log("znizka wynosi " + discountValue);

  return <div className="App"></div>;
}

export default App;
