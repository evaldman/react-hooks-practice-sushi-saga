import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [allSushi, setAllSushi] = useState([])
  const [budget, setBudget] = useState(100)
  const [plates, setPlates] = useState([])

  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then(setAllSushi)
  }, [])

    function handleEatSushi(sushiPrice){
      const updatedPlates = [...plates, 1]
      setPlates(updatedPlates)
      setBudget(budget - sushiPrice)
    }


  // console.log(allSushi)
  // console.log(plates)

  return (
    <div className="app">
      <SushiContainer budget={budget} allSushi={allSushi} handleEatSushi={handleEatSushi}/>
      <Table plates={plates} budget={budget}/>
    </div>
  );
}

export default App;
