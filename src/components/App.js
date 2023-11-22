import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setSushis(data));
  }, []);

  const [sushis, setSushis] = useState([]);
  const [emptyPlates, setEmptyPlates] = useState([]);
  const [balance, setBalance] = useState(100);

  // Renders an empty plate image to the table image
  // Calculates new balance
  function handleEatSushi(priceOfSushi) {
    const emptyPlateObject = "";
    setEmptyPlates([...emptyPlates, emptyPlateObject]);
    setBalance(balance - priceOfSushi);
  }

  return (
    <div className="app">
      <SushiContainer 
        sushis={sushis}
        balance={balance}
        onEat={handleEatSushi} 
      />
      <Table 
        plates={emptyPlates}
        balance={balance}
      />
    </div>
  );
}

export default App;
