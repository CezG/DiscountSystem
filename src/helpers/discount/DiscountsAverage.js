import discountMoneySpent from "./AmountSpent";
import discountFrequency from "./Frequency";
import discountMonths from "./MonthsOfCooperation";

const weightedAverage = (x, y, z) => (x * 4 + y * 1 + z * 2) / (1 + 2 + 4);

  let discountValue = weightedAverage(
    discountMoneySpent().value,
    discountFrequency().value,
    discountMonths().value
  ).toFixed(2);

  export default discountValue;