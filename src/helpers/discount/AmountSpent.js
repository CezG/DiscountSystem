import Logic from "es6-fuzz/lib/logic";
import Triangle from "es6-fuzz/lib/curve/triangle";
import discounts from "./Discount";
import PropTypes from "prop-types";

  const DiscountMoneySpent= money =>{
    let logicAmountSpent = new Logic();
    let amountSpent = logicAmountSpent
      .init(discounts[0], new Triangle(0, 2000, 5000))
      .or(discounts[1], new Triangle(2000, 5000, 7000))
      .or(discounts[2], new Triangle(5000, 7000, 10000))
      .or(discounts[3], new Triangle(7000, 100000, 10000000))
      .defuzzify(money);
    return  amountSpent.defuzzified;
  } 

  DiscountMoneySpent.prototype = {
    name: PropTypes.string,
    value: PropTypes.number
  }

 export default DiscountMoneySpent;