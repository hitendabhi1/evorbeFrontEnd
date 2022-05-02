import React, { useContext, useState, useEffect } from "react";
import { useQuery } from "react-query";

import { getAllShips, changeShip } from "../../API/userShip";
import { UserContext } from "../../Auth/context";

function AllShips(props) {
  const { session } = useContext(UserContext);
  const [allShips, setAllShip] = useState(false);

  const { data, status } = useQuery("allShips", () =>
    getAllShips(session.token, session.userId)
  );

  useEffect(() => {
    if (status === "success" && !allShips) {
      setAllShip(JSON.parse(data).result.data);
    }
  });


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
          (ship, index) => (
            props.currentShip.ship_id !== ship.ship_id &&
            (
              <button
                onClick={() =>
                  changeShip(session.token, session.userId, ship.ship_id).then(
                    (resp) => props.setShip(ship)
                  )
                }
                key={index}
              >
                {ship.ship_id}
                {ship.name}
              </button>
            )
          )
        )}
      </div>
    );
  }
}

export default AllShips;
