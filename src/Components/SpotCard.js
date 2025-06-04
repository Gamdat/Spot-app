import React from 'react';
import './SpotCard.css';


function SpotCard({ title, img }) {
  return (
    <div className="spot-card" >

        {/* Spot image */}
      <img src={img} alt={title} className="spot-img"/>
      
 {/* Title */}
      <p className='spot-title'>{title}</p>
     <span className='heart-icon'><img src="/Union.svg" alt="icon"/>
</span>
     </div> 
  );

}



export default SpotCard;

