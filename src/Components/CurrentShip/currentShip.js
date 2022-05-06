import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";

// API
import { getShip } from "../../API/userShip.js";

// Context
import { UserContext } from "../../Auth/context";
import ShipContext from "../../Auth/shipContext.js";

import CurrentWeapons from "../CurrentWeapons/currentWeapons.js";
import CurrentShields from "../CurrentSheilds/currentShields.js";

function CurrentShip(props) {
  console.log(useContext(ShipContext));

  const { currentShip } = useContext(ShipContext);
  const { ship, items } = currentShip;

  return (
    <div>
      <h1>
        Current Ship {ship.ship_id} - {ship.name}
      </h1>
      <p>Damage: {ship.damage}</p>
      <p>Defence: {ship.defence}</p>
      <CurrentWeapons />
      <CurrentShields />
      {/* {Object.keys(ship).map((shipItems, index) => (
        <p key={index}>
          {shipItems}: {ship[shipItems]}
        </p>
      ))} */}
    </div>
  );
}

export default CurrentShip;
