import React, { useContext } from "react";

import ShipContext from "../../Auth/shipContext.js";

function CurrentShields() {
  const { currentShip } = useContext(ShipContext);
  const { ship, items } = currentShip;
  const { shield1, shield2 } = ship;

  let shields = {
    shield1,
    shield2,
  };

  console.log(shields);

  return (
    <div>
      <h1>Shields</h1>
      {Object.keys(shields).map((shield) =>
        shields[shield] === "0" ? (
          <p>Shield Slot Not Available</p>
        ) : (
          <p>Shield Slot: {items[shields[shield]].name}</p>
        )
      )}
    </div>
  );
}

export default CurrentShields;
