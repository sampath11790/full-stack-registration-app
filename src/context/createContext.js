import React, { createContext, useState } from "react";

// const usercontext = createContext({
//   userData: [],
//   getData: () => {},
// });
import Usercontext from "./userContext";
let url = "http://localhost:4000/user-data";

const UserContextProvider = (props) => {
  const [data, setdata] = useState([]);
  const mygetdata = async () => {
    let resoponse = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await resoponse.json();
    setdata(data);
    console.log("user collection", data);
    console.log("context get data function");
  };

  return (
    <Usercontext.Provider value={{ getData: mygetdata, data: data }}>
      {props.children}
    </Usercontext.Provider>
  );
};

export default UserContextProvider;
