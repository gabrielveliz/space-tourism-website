import React from "react";
import Menu from "../components/Menu"
import BodyCrew from "../components/BodyCrew"
import "../hojas-de-estilo/BodyCrew.css";
import Fot from "../components/Fot";

export const Crew = () => {
  return (
    <>
    <div className="contcrew">
      <Menu></Menu>
      <BodyCrew></BodyCrew>
      <Fot></Fot>
    </div>
    
    </>
  );
};