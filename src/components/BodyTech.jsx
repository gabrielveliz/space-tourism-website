import React from 'react';
import "../hojas-de-estilo/BodyTech.css";
import data from "../data.json";


function BodyTech(){
  return(
    <div>
      <div className='pick'><span className='picknum'>03</span><span className='picktex'>Space launch 101</span></div>
      <Vehi></Vehi>
    </div>
  );
}

const Vehi = ()=> {
  let cont = 0;
  const VeData=data.technology.map(
    (info,key)=>{
      let aux = info.id + " contech";
      cont +=1;

        return(
    <div key={key} id={info.id}  className={aux}>
        

      <div className='techinfo'>
        <div className='coliz'><MenuVe i={cont}></MenuVe></div>
        <div className='colde'>
          <div key={key} className='termi'><span>The terminology...</span></div>
          <div className='techname'><span>{info.name}</span></div>
          <div className='techdes'><span>{info.description}</span></div> 
        </div>
      </div>
      <div className='contimgtech'>
        <img className='imgtechport' src={require(`../assets/technology/image-${info.images.portrait}.jpg`)} alt="imgvehicles" />
        <img className='imgtechland' src={require(`../assets/technology/image-${info.images.landscape}.jpg`)} alt="imgvehicles" />
      </div>
    </div>
        )
    }
  )

return(
  VeData
  );
}

function MenuVe({i}){
  return(
    <div className='submenuveh'>
      <div id={i+"submenv1"} onClick={() => mostrarv(1,1)} className="menunumber selemenunumb"><span>1</span></div>
      <div id={i+"submenv2"} onClick={() => mostrarv(2,2)} className="menunumber"><span>2</span></div>
      <div id={i+"submenv3"} onClick={() => mostrarv(3,3)} className="menunumber"><span>3</span></div>
    </div>
  );
}

function mostrarv(a,id){
  for(var i=1; i<4;i++)
  {
    document.getElementById("v"+i).style.display="none";
    document.getElementById(a+"submenv"+i).style.backgroundColor="rgb(255, 255, 255,0)";
    document.getElementById(a+"submenv"+i).style.color="white";
  }
  document.getElementById("v"+id).style.display="grid";
  document.getElementById(a+"submenv"+id).style.backgroundColor="white";
  document.getElementById(a+"submenv"+id).style.color="black";

}

export default BodyTech;