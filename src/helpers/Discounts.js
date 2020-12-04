import Logic from "es6-fuzz/lib/logic";
import Triangle from "es6-fuzz/lib/curve/triangle";

class Discount {
    constructor(name, value) {
      this.name = name;
      this.value = value;
    }
  }
  
  const min = new Discount("min", 0.02);
  const medium = new Discount("medium", 0.15);
  const high = new Discount("high", 0.35);
  const max = new Discount("max", 0.5);

  
  const discountMoneySpent= money=>{
    let logicAmountSpent = new Logic();
    let amountSpent = logicAmountSpent
    .init(min, new Triangle(0, 2000, 5000))
    .or(medium, new Triangle(2000, 5000, 7000))
    .or(high, new Triangle(5000, 7000, 10000))
    .or(max, new Triangle(7000, 100000, 100000000))
    .defuzzify(money);
    return  amountSpent.defuzzified;
  } 
  //3500
   
  const discountFrequency = frequency=>{
    let logicFrequencyPerYear = new Logic();
    let frequencyPerYear = logicFrequencyPerYear
      .init(min, new Triangle(0, 3, 6))
      .or(medium, new Triangle(5, 12, 20))
      .or(high, new Triangle(18, 30, 50))
      .or(max, new Triangle(48, 100, 50000))
      .defuzzify(frequency);
    return frequencyPerYear.defuzzified;    
} 

  const discountMonths = month =>{
    let logicMonthsOfCooperation = new Logic();
    let monthsOfCooperation = logicMonthsOfCooperation
      .init(min, new Triangle(0, 6, 12))
      .or(medium, new Triangle(10, 17, 24))
      .or(high, new Triangle(22, 35, 48))
      .or(max, new Triangle(43, 60, 1200))
      .defuzzify(month);    
    return monthsOfCooperation.defuzzified;
  } 

  const weightedAverage = (x, y, z) => (x * 4 + y * 1 + z * 2) / (1 + 2 + 4);

//   let discountValue = weightedAverage(
//     discountMoneySpent().value,
//     discountFrequency().value,
//     discountMonths().value
//   ).toFixed(2);


//   export default discountValue;
 export default discountMonths;
  