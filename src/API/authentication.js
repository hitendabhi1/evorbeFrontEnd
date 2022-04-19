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
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "data": {
      "email": "test@email.com",
      "password": "password"
    }
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("https://evorbe.com/evorbeapi/auth/signin", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
};




