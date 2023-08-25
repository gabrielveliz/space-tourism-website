import React from 'react';
import "../hojas-de-estilo/BodyDest.css";
import data from "../data.json";

function Planets(){
    const DisplayData=data.destinations.map(
    (info)=>{
      let aux = info.name + " contplanetas";
        return(
    <div key={info.ky} id={info.id}  className={aux}>
      <div className='contimgplan'>
        <img className='imgplanetas' src={require(`../assets/destination/${info.images.png}.png`)} alt="imgmoon" />
      </div>
      <div className='conttextplan'>
        <MenuP op={info.ky}></MenuP>
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
        )
    }
  )

return(
  DisplayData
);
}

function MenuP({op}){
  let aux = 'm'+op;
  return(
    <div className='cnm'> 
      <div>
      </div>
      <div className='submenuplan'>
        <div className='ms moon' id={aux+"1"} onClick={() => mostrar(1,1)}><span>MOON</span></div>
        <div className='ms'  id={aux+"2"} onClick={() => mostrar(2,2)}><span>MARS</span></div>
        <div className='ms'  id={aux+"3"} onClick={() => mostrar(3,3)}><span>EUROPA</span></div>
        <div className='ms'  id={aux+"4"} onClick={() => mostrar(4,4)}><span>TITAN</span></div>
      </div>
    </div>
  );
}

function mostrar(op,id){
  for(var i=1; i<5;i++)
  {
    document.getElementById("p"+i).style.display="none";
    document.getElementById("m"+op+i).style.borderBottom="2px rgba(228, 228, 228, 0) solid";
    document.getElementById("m"+op+i).style.color="#bcc2cb";
    
  }

  document.getElementById("p"+id).style.display="grid";
  document.getElementById("m"+op+id).style.borderBottom="2px white solid";
  document.getElementById("m"+op+id).style.color="white";

}


export default Planets;