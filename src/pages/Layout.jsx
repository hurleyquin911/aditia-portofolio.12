import React from "react";

import Header from "../components/Header";
import StairTransition from "../components/StairTransition";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className=" z-50">
        <Header />
      </div>
      <StairTransition />
      {children}
    </React.Fragment>
  );
};

export default Layout;
