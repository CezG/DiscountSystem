import Logic from "es6-fuzz/lib/logic";
import Triangle from "es6-fuzz/lib/curve/triangle";
import discounts from "./Discount";
  

const discountMonths = month =>{
    let logicMonthsOfCooperation = new Logic();
    let monthsOfCooperation = logicMonthsOfCooperation
      .init(discounts[0], new Triangle(0, 6, 12))
      .or(discounts[1], new Triangle(10, 17, 24))
      .or(discounts[2], new Triangle(22, 35, 48))
      .or(discounts[3], new Triangle(43, 60, 1200))
      .defuzzify(month);    
    return monthsOfCooperation.defuzzified;
  } 

  export default discountMonths;