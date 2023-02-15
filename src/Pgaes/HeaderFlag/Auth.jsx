import React from "react";
import { Outlet } from "react-router";

export default () => {
  return (
    <>
      <Outlet /> {/**this is the pages that will change */}
      {/* <Header /> */}
    </>
  );
};
