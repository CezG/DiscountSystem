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

const discounts = [min,medium,high,max];

export default discounts;