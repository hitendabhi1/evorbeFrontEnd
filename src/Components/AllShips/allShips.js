import React, { useContext, useState, useEffect } from "react";
import { useQuery } from "react-query";

import { getAllShips, changeShip } from "../../API/userShip";
import { UserContext } from "../../Auth/context";
import ShipContext from "../../Auth/shipContext.js";
import { getShip } from "../../API/userShip.js";

function AllShips(props) {
  const { session } = useContext(UserContext);
  const { currentShip, setShip } = useContext(ShipContext);

  const [allShips, setAllShip] = useState(false);

  const { data, status } = useQuery("allShips", () =>
    getAllShips(session.token, session.userId)
  );

  useEffect(() => {
    if (status === "success" && !allShips) {
      setAllShip(JSON.parse(data).result.data);
    }
  }, [data]);

  if (!allShips) {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  } else {
    return (
      <div>
        <h1>Change Ship</h1>
        {allShips.map(
          (ship, index) =>
            currentShip.ship.ship_id !== ship.ship_id && (
              <button
                onClick={async () =>
                  await changeShip(
                    session.token,
                    session.userId,
                    ship.ship_id
                  ).then((resp) => {
                    getShip(session.token, session.userId).then((resp) => {
                      let currentState = { ...currentShip };
                      currentState = JSON.parse(resp).result.data;
                      setShip(currentState);
                    });
                  })
                }
                key={index}
              >
                {ship.ship_id}
                {ship.name}
              </button>
            )
        )}
      </div>
    );
  }
}

export default AllShips;
