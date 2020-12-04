import "./App.css";
import React from "react";
import DiscountMoneySpent from "./helpers/discount/AmountSpent";
import DiscountFrequency from "./helpers/discount/Frequency";
import DiscountMonths from "./helpers/discount/MonthsOfCooperation";
import weightedAverage from "./helpers/discount/DiscountsAverage";

function App() {
  let inputMoney = 1000;
  let inputFrequency = 100;
  let inputMonths = 20;

  let discMoney = DiscountMoneySpent(inputMoney);
  let discFrequency = DiscountFrequency(inputFrequency);
  let discMonths = DiscountMonths(inputMonths);

  let discountValue = weightedAverage(
    discMoney.value,
    discFrequency.value,
    discMonths.value
  ).toFixed(2);

  console.log(discMoney);
  console.log(discFrequency);
  console.log(discMonths);
  console.log("Zniżka wynosi " + discountValue);

  return <div className="App"></div>;
}

export default App;
