import {BASEURL, myHeaders} from "./base";
import {requestOptions} from "./apiUtilities";

myHeaders.append("Content-Type", "text/plain");

export const getUserName = async ( auth, userId ) => {

    myHeaders.append("user-id", userId);
    myHeaders.append("token", auth);

    let result;

    await fetch(
        `${BASEURL}/users/register`,
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

}