export const requestOptions = (method, headers, body) => {

    const requestOptions = {
      method,
      headers,
      body,
      redirect: "follow",
    };
  
    return requestOptions;
  };