import {BASEURL, myHeaders} from "./base";
import {requestOptions} from "./apiUtilities";

myHeaders.append("Content-Type", "text/plain");

export const registerUser = async (email, username, password) => {

  let data = {
    data: {
      email,
      username,
      password
    },
  };

  let result;

  data = JSON.stringify(data);

  await fetch(
    `${BASEURL}/auth/register`,
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

export const signIn = async (email, password) => {
  let data = {
    data: {
      email,
      password
    },
  };

  let result;

  data = JSON.stringify(data);

  await fetch(
    `${BASEURL}/auth/signin`,
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




