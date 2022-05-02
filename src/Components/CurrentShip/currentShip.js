import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";

// API
import { getShip } from "../../API/userShip.js";

// Context
import { UserContext } from "../../Auth/context";

function CurrentShip(props) {
  const {currentShip} = props;

  return (
    <div>
      <h1>Current Ship {currentShip.ship_id} - {currentShip.name}</h1>
      {Object.keys(currentShip).map((ship,index) => (
        <p key={index}>{ship}: {currentShip[ship]}</p>
      ))}
    </div>
  );
}

export default CurrentShip;
