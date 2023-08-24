import React from 'react';
import "../hojas-de-estilo/BodyCrew.css";
import data from "../data.json";


function BodyCrew(){
  return(
    <div>
      <div className='pick'><span className='picknum'>02</span><span className='picktex'>Meet your crew</span></div>
      <div className='contcrew'>
        <Team></Team>
          
      </div>
    </div>
  );
}

function Team(){
  let cont =0;
  const TeamData=data.crew.map(
    
    (info,key)=>{
      let aux = info.id + " conteam";
      cont +=1
        return(
          <>
    <div key={key} id={info.id}  className={aux}>
      
      <div className='teaminfo'>
        <div key={key} className='teamrol'><span>{info.role}</span></div>
        <div className='teamname'><span>{info.name}</span></div>
        <div className='teambio'><span>{info.bio}</span></div>    
        
        <SubMenut op={cont}></SubMenut>
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

function SubMenut({op}){
  return(
    <div className='contsubmenut'>
      <div onClick={() => mostrart(1,1)} id={op +'subment1'} className="opcsubment opt1"></div>
      <div onClick={() => mostrart(2,2)} id={op +'subment2'} className="opcsubment"></div>
      <div onClick={() => mostrart(3,3)} id={op +'subment3'} className="opcsubment"></div>
      <div onClick={() => mostrart(4,4)} id={op +'subment4'} className="opcsubment"></div>
    </div>
  );
}

function mostrart(op,id){
  for(var i=1; i<5;i++)
  {
    document.getElementById("t"+i).style.display="none";
    document.getElementById(op+"subment"+i).style.backgroundColor="#797979";
  }

  document.getElementById("t"+id).style.display="grid";
  document.getElementById(op+"subment"+id).style.backgroundColor="white";

}

export default BodyCrew;