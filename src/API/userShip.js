import { BASEURL } from "./base";
import { requestOptions } from "./apiUtilities";

export const getShip = async (auth, userId) => {
  let myHeaders = new Headers();
  myHeaders.append("user-id", `${userId}`);
  myHeaders.append("token", `${auth}`);

  let result;

  await fetch(
    `${BASEURL}/ship/getShip?user_id=${userId}`,
    requestOptions("GET", myHeaders)
  )
    .then((response) => response.text())
    .then((response) => {
      result = response;
    })
    .catch((error) => {
      result = error;
    });

  return result;
};

export const getAllShips = async (auth, userId) => {
  let myHeaders = new Headers();
  myHeaders.append("user-id", `${userId}`);
  myHeaders.append("token", `${auth}`);

  let result;

  await fetch(
    `${BASEURL}/ship/getShips?user_id=${userId}`,
    requestOptions("GET", myHeaders)
  )
    .then((response) => response.text())
    .then((response) => {
      result = response;
    })
    .catch((error) => {
      result = error;
    });

  return result;
};

export const changeShip = async (auth, userId, shipId) => {
  let myHeaders = new Headers();

  myHeaders.append("user-id", `${userId}`);
  myHeaders.append("token", `${auth}`);

  let data = {
    data: {
      user_id: `${userId}`,
      ship_id: `${shipId}`
    },
  };

  let result;

  data = JSON.stringify(data);

  await fetch(
    `${BASEURL}/ship/changeShip`,
    requestOptions("POST", myHeaders, data)
  )
    .then((response) => response.text())
    .then((response) => {
      result = response;
    })
    .catch((error) => {
      result = error;
    });

  return result;
};
