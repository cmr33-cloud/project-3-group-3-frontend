import React from "react";

export default function LevelCircle(props) {
  return (
    <div className = 'level-holder flex'>
      <svg 
        className = 'level-svg'
        viewBox="0 0 150 150"
        preserveAspectRatio="none"
        
      >
          <circle className='level-icon'
        
        cx="90%"
        cy="50%"
        r="57"
        fill="none"
        stroke="#cccccc"
        stroke-width="15"
        transform="rotate(-90,100,100)"
      />
        <circle className='level-icon'
        
          cx="90%"
          cy="50%"
          r="57"
          fill="none"
          stroke="rgba(139,92,246,1)"
          stroke-width="15"
          stroke-dasharray={`${props.xp*360/(props.level*100)},2000`}
          transform="rotate(-90,100,100)"
        />
        
        <text text-anchor="middle" x="50%" y="50%" style={{fontSize: '2rem'}}>{props.level}</text>
      </svg>
    </div>
  );
}
