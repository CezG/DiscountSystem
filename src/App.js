import "./App.css";

function App() {
  let Logic = require("es6-fuzz/lib/logic");
  let Trapezoid = require("es6-fuzz/lib/curve/trapezoid");
  //var Logic = require('./lib/logic')
  //var Trapezoid = require('./lib/curve/trapezoid');

  let logic = new Logic();
  let res = logic
    .init("cold", new Trapezoid(0, 12, 18, 20)) // until 12-18 around warm
    .or("warm", new Trapezoid(12, 14, 16, 100)) // until 12-18 around warm
    .defuzzify(20);

  console.log(res);

  return <div className="App"></div>;
}

export default App;
