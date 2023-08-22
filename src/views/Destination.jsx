import React from "react";
import Menu from "../components/Menu"
import BodyDest from "../components/BodyDest"
import Fot from "../components/Fot";

import "../hojas-de-estilo/BodyDest.css";

export const Destination = () => {
  return (
    <>
    <div className="contdest">
    <Menu></Menu>
    <BodyDest></BodyDest>
    <Fot></Fot>
    </div>
    </>
  );
};


