import React from "react";
import Menu from "../components/Menu"
import BodyTech from "../components/BodyTech"
import Fot from "../components/Fot";

export const Technology = () => {
  return (
    <>
    <div className="conttech">
      <Menu nu={4}></Menu>
      <BodyTech></BodyTech>
      <Fot></Fot>
    </div>
    </>
  );
};