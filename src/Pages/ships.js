import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";

// API

import { getShip } from "../API/userShip.js";

// Context
import { UserContext } from "../Auth/context.js";

// components
import CurrentShip from "../Components/CurrentShip/currentShip.js";
import AllShips from "../Components/AllShips/allShips.js";
import { getAllShips } from "../API/userShip.js";

function Ships() {
  const { session, user } = useContext(UserContext);
  const [currentShip, setShip] = useState(false);

  const { data, status } = useQuery("currentShip", () =>
    getShip(session.token, session.userId)
  );

  useEffect(() => {
    if (status === "success" && !currentShip) {
      setShip(JSON.parse(data).result.data.ship);
    }
  });

  return (
    <>
      <h1>Ship Page</h1>
      <div className="ship-container" style={{display:"flex"}}>
      <CurrentShip currentShip={currentShip} />

      <AllShips setShip={setShip} />
      </div>
    </>
  );
}

export default Ships;
