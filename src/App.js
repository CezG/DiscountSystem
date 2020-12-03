import React, { useState, useEffect } from "react";
import DataForm from "./packages/DataForm";
import Chart from "./packages/Chart";
import './App.css';
const App = () => {
  const [dataRecived, setDataRecived] = useState(false);
  const [formData, saveFormData] = useState();

  const initialStorage = localStorage?.getItem("companysData");

    useEffect(() => {
        if(formData === undefined) {
            return
        }
        let dataToSave = []
        if(initialStorage?.length > 0) {
            let storage = JSON.parse(initialStorage);
            Array.isArray(storage) ?
                storage.forEach(companyData => dataToSave.push(companyData)) : dataToSave.push(storage)
            localStorage.removeItem("companysData");
        }
        dataToSave.push(formData);
        localStorage.setItem("companysData", JSON.stringify(dataToSave));
    }, formData);


  const handleDataSave = data => {
      setDataRecived(true);
      saveFormData(data);
  }

  return (
      <div className="App">
          {!dataRecived && (<DataForm submitFunction={handleDataSave}/>)}
        <div className="chart">
            {
                dataRecived && (<Chart sales={0.8} orders={0.3} cooperationMonths={0.2}/>)
            }
        </div>
      </div>
  );
}

export default App;
