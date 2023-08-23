import React from 'react';
import "../hojas-de-estilo/BodyDest.css";
import data from "../data.json";

function Planets(){
    const DisplayData=data.destinations.map(
    (info)=>{
      let aux = info.name + " contplanetas";
        return(
          <>
    <div key={info.ky} id={info.id}  className={aux}>

      <div className='contimgplan'>
        <img src={require(`../assets/destination/${info.images.png}.png`)} alt="imgmoon" />
      </div>
      <div>
        <div className='planetastitulo'><span>{info.name}</span></div>
        <div className='planetasparrafo'><span>{info.description}</span></div>
        <div className='contdisttra'>
          <div>
            <div className='subti'><span>Avg. distance</span></div>
            <div className='titulotradis'><span>{info.distance}</span></div>
          </div>
          <div>
            <div className='subti'><span>Est. travel time</span></div>
            <div className='titulotradis'><span>{info.travel}</span></div>
          </div>
        </div>
      </div>
    </div>
          </>
        )
    }
  )

return(
  DisplayData
);
}


export default Planets;