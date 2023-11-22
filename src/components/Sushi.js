import React, { useState } from "react";

function Sushi( {sushi, balance, onEat} ) {
  const [isEaten, setIsEaten] = useState(false);

  function handleSushiClick() {
      if (balance >= sushi.price) {
        setIsEaten(true);
        onEat( sushi.price);
      }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={/* Give me a callback! */ handleSushiClick}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
