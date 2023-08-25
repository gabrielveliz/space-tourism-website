import React from "react";
import Menu from "../components/Menu";
import BodyIndex from "../components/BodyIndex";
import Fot from "../components/Fot";
import "../hojas-de-estilo/BodyIndex.css";


export const Home = () => {

  return (
    <>
    <div className="contindex">
    <Menu nu={1}></Menu>
    <BodyIndex></BodyIndex>
    <Fot></Fot>
    </div>
    
    </>
  );
};
