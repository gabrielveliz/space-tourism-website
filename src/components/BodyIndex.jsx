import React from 'react';
import { Link } from "react-router-dom";

function BodyIndex(){
  return(
  <div className='conthome'>

  <div className='conthometext'>
    <div className='so'><span>So, you want to travel to</span></div>
    <div className='spa'><span>Space</span></div>
    <div className='parraf'><span>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</span></div>
  </div>
  <div className='conthomeboton'>
    <div className='efexplore'>
      <div className='explore'>
      <Link to="/Destination" style={{ textDecoration: 'none',color:"#0B0D17" }}><span>Explore</span></Link>
      </div>
    </div>
    
  </div>
  </div>
  );
}

export default BodyIndex;