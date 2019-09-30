import React, { useState } from 'react' 
import { BoxStyle } from './style'
const BoxSvg = (props) => {

    return(
    <BoxStyle>
    <svg x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100">
    <defs>
    <linearGradient id="leftWall" gradientTransform="rotate(5)">
      <stop offset="10%"   stopColor="#b9865c" />
      <stop offset="100%"  stopColor="#8d5631" />
    </linearGradient>
    <linearGradient id="backWall" gradientTransform="rotate(45)">
      <stop offset="5%"   stopColor="#53301b" />
      <stop offset="100%"  stopColor="#8d5631" />
    </linearGradient>
    <linearGradient id="backFlap" gradientTransform="rotate(180)">
      <stop offset="1%"   stopColor="#8d5631" />
      <stop offset="100%"  stopColor="#53301b" />
    </linearGradient>
    <linearGradient id="leftFlap" gradientTransform="rotate(35)">
      <stop offset="5%"   stopColor="#954d2c" />
      <stop offset="100%"  stopColor="#b9865c" />
    </linearGradient>
    <linearGradient id="dropShadow_1" gradientTransform="rotate(15)" >
	<stop  offset="10%"  stopColor="#808080" />
	<stop  offset="100%" stopOpacity='0'  stopColor="#c89869"/>
    </linearGradient>
    <linearGradient id="frontWall" gradientTransform="rotate(5)">
      <stop offset="5%"   stopColor="#c89869" />
      <stop offset="100%"  stopColor="#9b7751" />
    </linearGradient>
    <linearGradient id="rightWall" gradientTransform="rotate(15)">
      <stop offset="10%"   stopColor="#814b29" />
      <stop offset="100%"  stopColor="#c89869" />
    </linearGradient>
    <linearGradient id="rightFlap" gradientTransform="rotate(10)">
      <stop offset="25%"   stopColor="#954d2c" />
      <stop offset="100%"  stopColor="#a07834" />
    </linearGradient>
  </defs>
    <polygon id="dropShadow" fill="url(#dropShadow_1)" points="98.125,78 100,66.625 82.396,66.014 46,78.667 "/>  
    <rect id="backWall" fill="url('#backWall')" x="34.23" y="32.518"    width="47.922" height="33.742"/>

    <polygon id="leftWall" fill="url('#leftWall')"  points="34.719,66.26 
            12.958,78.484 12.47,43.031 34.719,32.518 "/>

    <polygon id="leftFlap" fill="url('#leftFlap')"     points="22.738,21.516 
            0,31.051 12.47,43.031 34.719,32.518 "/>

    <rect id="frontWall" fill="url('#frontWall')" x="12.47" y="42.787"      width="47.922" height="35.697"/>

    <polygon id="backFlap" className="backFlap" fill="url('#backFlap')"    points="89.627,23.117 
            44.597,23.748 34.709,32.535 82.143,32.52 "/>

    <polygon id="frontFlap" fill="#a26a3a"     points="56.989,53.797 
            6.894,54.232 12.47,42.787 60.392,42.787 "/>

    <polygon id="rightWall" fill="url('#rightWall')"     points="82.396,66.014 
            60.421,78.475 60.146,42.787 82.102,32.52 "/>

    <polygon id="rightFlap" fill="url('#rightFlap')"    points="100,27.422 
            74.841,40.164 60.184,42.762 82.147,32.531 "/>
    </svg>    
    </BoxStyle>
    )

}

export default BoxSvg

// <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"
//      xmlns:xlink="http://www.w3.org/1999/xlink">

 
//   <!-- using my linear gradient -->
//   <circle cx="5" cy="5" r="4"  />
// </svg>
