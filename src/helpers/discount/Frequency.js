import Logic from "es6-fuzz/lib/logic";
import Triangle from "es6-fuzz/lib/curve/triangle";
import discounts from "./Discount";
import PropTypes from "prop-types";


const DiscountFrequency = frequency=>{
    let logicFrequencyPerYear = new Logic();
    let frequencyPerYear = logicFrequencyPerYear
        .init(discounts[0], new Triangle(0, 3, 6))
        .or(discounts[1], new Triangle(5, 12, 20))
        .or(discounts[2], new Triangle(18, 30, 50))
        .or(discounts[3], new Triangle(48, 100, 50000))
        .defuzzify(frequency);
    return frequencyPerYear.defuzzified;
}

DiscountFrequency.prototype = {
    name: PropTypes.string,
    value: PropTypes.number
}

export default DiscountFrequency;