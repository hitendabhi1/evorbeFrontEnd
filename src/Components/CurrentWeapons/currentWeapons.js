import React, { useContext } from "react";

import ShipContext from "../../Auth/shipContext.js";

function CurrentWeapons(props) {
  const { currentShip } = useContext(ShipContext);
  const { items, ship } = currentShip;
  const { weapon1, weapon2, weapon3, weapon4 } = ship;

  console.log(currentShip);

  let weapons = {
    weapon1,
    weapon2,
    weapon3,
    weapon4,
  };

  if (!weapons) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div>
        <h1>CurrentWeapons</h1>
        {Object.keys(weapons).map((weapon, index) =>
          weapons[weapon] === "0" ? (
            <p key={index}>Weapon Slot Not Available</p>
          ) : (
            (console.log(items[weapons[weapon]]),
            (
              <div key={index} style={{ display: "flex" }}>
                <p>
                  weapon slot is {items[weapons[weapon]].name}/
                  {items[weapons[weapon]].stat}{" "}
                </p>
                <button
                  onClick={() => {
                    console.log(items[weapons[weapon]].id);
                  }}
                >
                  Change Weapon
                </button>
              </div>
            ))
          )
        )}
      </div>
    );
  }
}

export default CurrentWeapons;
