import React from "react";

// set the defaults
const ShipContext = React.createContext({
  ship: false,
  setShip: () => {},
});

export default ShipContext;
