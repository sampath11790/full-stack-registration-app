import React, { createContext, useState } from "react";

const Usercontext = createContext({
  userData: [],
  getData: () => {},
});

export default Usercontext;
