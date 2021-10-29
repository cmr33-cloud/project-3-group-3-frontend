import React, {useEffect} from "react";
import KUTE from 'kute.js'
const WavesBg = (props) => {

    useEffect(() => {
        morphing()
    }, [])

    function morphing() {
        const options =  { 
            easing: 'easingCubicInOut', 
            yoyo: true, repeat: 20, duration: 10000}
        KUTE.fromTo('#path1', {path: '#path1' }, { path: '#path7' }, options).start();
        KUTE.fromTo('#path2', {path: '#path2' }, { path: '#path8' }, options).start();
        KUTE.fromTo('#path3', {path: '#path3' }, { path: '#path9' }, options).start();
       
        
    }

  return (
    <div id={props.id}>
        

      <svg id="visual" viewBox="0 0 1800 1200" width="1800" height="1200">
      <defs>
        <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur"></feGaussianBlur>
        </filter>
    </defs>
    <g filter="url(#blur1)" >
        <path id='path1'
          d="M0 61L120 121L240 85L360 121L480 133L600 109L720 181L840 61L960 181L1080 169L1200 73L1320 97L1440 169L1560 193L1680 97L1800 85L1800 0L1680 0L1560 0L1440 0L1320 0L1200 0L1080 0L960 0L840 0L720 0L600 0L480 0L360 0L240 0L120 0L0 0Z"
          fill="#3a9bdc"
          stroke="#ff0000"
        ></path>
        <path id='path2'
          d="M0 301L120 301L240 469L360 577L480 577L600 505L720 373L840 325L960 601L1080 457L1200 289L1320 325L1440 709L1560 445L1680 301L1800 457L1800 83L1680 95L1560 191L1440 167L1320 95L1200 71L1080 167L960 179L840 59L720 179L600 107L480 131L360 119L240 83L120 119L0 59Z"
          fill="#7b9bdc"
          stroke="#00ff00"
        ></path>
        <path id='path3'
          d="M0 529L120 613L240 673L360 721L480 721L600 697L720 505L840 553L960 697L1080 709L1200 445L1320 577L1440 817L1560 565L1680 553L1800 577L1800 455L1680 299L1560 443L1440 707L1320 323L1200 287L1080 455L960 599L840 323L720 371L600 503L480 575L360 575L240 467L120 299L0 299Z"
          fill="#38ac9c"
          stroke="#0000ff"
        ></path>
        
        <path id='path7' style={{visibility: 'hidden'}}
          d="M0 121L120 181L240 205L360 205L480 61L600 85L720 85L840 193L960 49L1080 37L1200 157L1320 97L1440 193L1560 193L1680 121L1800 145L1800 0L1680 0L1560 0L1440 0L1320 0L1200 0L1080 0L960 0L840 0L720 0L600 0L480 0L360 0L240 0L120 0L0 0Z"
          fill="#252220"
        ></path>
        <path  id='path8'style={{visibility: 'hidden'}}
          d="M0 301L120 253L240 325L360 385L480 121L600 229L720 265L840 337L960 157L1080 73L1200 205L1320 217L1440 253L1560 337L1680 277L1800 181L1800 143L1680 119L1560 191L1440 191L1320 95L1200 155L1080 35L960 47L840 191L720 83L600 83L480 59L360 203L240 203L120 179L0 119Z"
          fill="#263c49"
        ></path>
        <path id='path9'style={{visibility: 'hidden'}}
          d="M0 481L120 457L240 817L360 469L480 673L600 589L720 673L840 697L960 325L1080 661L1200 469L1320 409L1440 793L1560 517L1680 661L1800 445L1800 179L1680 275L1560 335L1440 251L1320 215L1200 203L1080 71L960 155L840 335L720 263L600 227L480 119L360 383L240 323L120 251L0 299Z"
          fill="#195a6a"
        ></path>
        
        
        </g>
      </svg>
      
        
      
    </div>
  );
};

export default WavesBg;
