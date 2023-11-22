import React, {useState} from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

const SUSHIS_PER_RENDER = 4;

function SushiContainer( {sushis, balance, onEat}) {
  const [line, setLine] = useState({
    startIndex: 0,
    endIndex: 4
  });

  const sushisInLine = sushis.slice(line.startIndex, line.endIndex);
  //console.log(sushisInLine);
  const sushisToDislpay = sushisInLine.map((sushi) => {
    return (
      <Sushi
        key={sushi.id}
        sushi={sushi}
        balance={balance}
        onEat={onEat}
      />
    )
  });

  //console.log(line);

  function nextInLine() {
    setLine({
      ...line,
      startIndex: (line.endIndex < sushis.length) ? line.endIndex : (line.endIndex % sushis.length),
      endIndex: (line.endIndex < sushis.length) ? (line.endIndex + SUSHIS_PER_RENDER) : (line.endIndex + SUSHIS_PER_RENDER) % sushis.length
    });
  }

  return (
    <div className="belt">
      {sushisToDislpay}
      <MoreButton onNextRender={nextInLine} />
    </div>
  );
}

export default SushiContainer;
