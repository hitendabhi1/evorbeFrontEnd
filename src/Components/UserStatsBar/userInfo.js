import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../Auth/context";

function UserInfo() {
  const [stats, setStats] = useState(false);
  const { session, user } = useContext(UserContext);

  useEffect(() => {
    if (user !== false) {
      updateState();
    }
  });

  const updateState = () => {
    if (!stats) {
      const { money, energy, exp, metal, ore } = user;

      let state = stats;

      state = {
        money,
        energy,
        exp,
        metal,
        ore,
      };

      state["level"] = levelFunc();
      setStats(state);
    }
  };

  const levelFunc = () => {
    let levelValue = 100;
    let levelCopy = 1;

    while (stats.xp >= levelValue) {
      levelValue = levelValue * 1.5;
      levelCopy++;
    }

    return levelCopy;
  };

  const { money, energy, exp, metal, level, ore } = stats;

  if (!user) {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  } else {
    return (
      <>
        <p>money: {money}</p>
        <p>Energy: {energy}</p>
        <p>XP: {exp}</p>
        <p>metal: {metal}</p>
        <p>Level: {level}</p>
        <p>Ore: {ore}</p>
      </>
    );
  }
}

export default UserInfo;
