import React from 'react';
import "../hojas-de-estilo/BodyCrew.css";
import data from "../data.json";


function BodyCrew(){
  return(
    <div>
      <div className='pick'><span className='picknum'>02</span><span className='picktex'>Meet your crew</span></div>
      <div className='contcrew'>
        <Team></Team>
        <SubMenut></SubMenut>  
      </div>
    </div>
  );
}

function Team(){
  const TeamData=data.crew.map(
    (info,key)=>{
      let aux = info.id + " conteam";
        return(
          <>
    <div key={key} id={info.id}  className={aux}>
      
      <div className='teaminfo'>
        <div key={key} className='teamrol'><span>{info.role}</span></div>
        <div className='teamname'><span>{info.name}</span></div>
        <div className='teambio'><span>{info.bio}</span></div>    
      </div>
      <div className='contimgplan'>
        <img src={require(`../assets/crew/image-${info.images.png}.png`)} alt="imgmoon" />
      </div>
    </div>
          </>
        )
    }
  )

return(
  TeamData
  );
}

function SubMenut(){
  return(
    <div className='contsubmenut'>
      <div onClick={() => mostrart(1)} id='subment1' className="opcsubment opt1"></div>
      <div onClick={() => mostrart(2)} id='subment2' className="opcsubment"></div>
      <div onClick={() => mostrart(3)} id='subment3' className="opcsubment"></div>
      <div onClick={() => mostrart(4)} id='subment4' className="opcsubment"></div>
    </div>
  );
}

function mostrart(id){
  for(var i=1; i<5;i++)
  {
    document.getElementById("t"+i).style.display="none";
    document.getElementById("subment"+i).style.backgroundColor="#797979";
  }

  document.getElementById("t"+id).style.display="grid";
  document.getElementById("subment"+id).style.backgroundColor="white";

}

export default BodyCrew;