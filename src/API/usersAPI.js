import { BASEURL } from "./base";
import { requestOptions } from "./apiUtilities";

export const getUser = async (auth, userId) => {
  if (auth === null || userId === null) {
    return;
  }

  let myHeaders = new Headers();

  myHeaders.append("user-id", `${userId}`);
  myHeaders.append("token", `${auth}`);

  let result;

  await fetch(
    `${BASEURL}/users/getUser?user_id=${userId}`,
    requestOptions("GET", myHeaders)
  )
    .then((response) => response.text())
    .then((response) => {
      result = response;
      console.log("ran");
    })
    .catch((error) => {
      result = error;
    });

  return result;
};
