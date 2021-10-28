import React from "react";

export default function LevelCircle(props) {
  return (
    <div className = 'level-holder flex'>
      <svg 
        
        viewBox="0 0 300 300"
        preserveAspectRatio="none"
       
      >
          <circle className='level-icon'
        
        cx="100"
        cy="100"
        r="57"
        fill="none"
        stroke="#cccccc"
        stroke-width="15"
        transform="rotate(-90,100,100)"
      />
        <circle className='level-icon'
        
          cx="100"
          cy="100"
          r="57"
          fill="none"
          stroke="rgba(139,92,246,1)"
          stroke-width="15"
          stroke-dasharray={`${props.xp*360/(props.level*100)},2000`}
          transform="rotate(-90,100,100)"
        />
        
        <text text-anchor="middle" x="100" y="110" style={{fontSize: '2rem'}}>{props.level}</text>
      </svg>
    </div>
  );
}
