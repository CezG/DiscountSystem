import React from "react";
import Logic from "es6-fuzz/lib/logic";
import Trapezoid from "es6-fuzz/lib/curve/trapezoid";

class AmountSpent extends React.Component{
  constructor(){

 //   let Logic = require("es6-fuzz/lib/logic");
 //   let Trapezoid = require("es6-fuzz/lib/curve/trapezoid");
    let logic = new Logic();
  }


  // const AmountSpent = () =>{
    state = {
      amount: 19,
    }
    
    
     res = this.logic
      .init("", new Trapezoid(0, 12, 18, 20)) // until 12-18 around warm
      .or("warm", new Trapezoid(12, 14, 16, 100)) // until 12-18 around warm
      .defuzzify(amount);
    
    console.log(res);
  
  // }

  render(){
    return(
      <div>

      </div>

    )
  }
}
export default AmountSpent;