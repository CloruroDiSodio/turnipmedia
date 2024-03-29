import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import {animated, useSpring} from "react-spring";

const AnimatedCircle = _props => {
    const { pathname} = useLocation();

  const props = useSpring({ rx: 60, ry:60, from: { rx: 30, ry:40} })
  return (
    <animated.svg rx={props.rx} ry={props.ry}>
      <defs>
        <linearGradient spreadMethod="pad" y2="0.914063" x2="0.738281" y1="0" x1="0" id="svg_5">
          <stop offset="0" stopColor={(pathname === '/')? "#b431f5" : (pathname === '/resume')? '#007bff' : '#ACE900'}/>
          <stop offset="0.980469" stopOpacity="0" stopColor="0"/>
        </linearGradient>
      </defs>
      <g>
        <title>Layer 1</title>
        <ellipse
          ry="60"
          rx="60"
          id="svg_8"
          cy="60"
          cx= "70"
          fillOpacity="null"
          fill="url(#svg_5)"/>
      </g>
    </animated.svg>
  )

}


const Circle = (props) => {
    const { pathname} = useLocation();

  const[width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
    })
  },[])

  return(
    (width <= 677)?
      <>
      *<svg width="150"  height="150"  xmlns="http://www.w3.org/2000/svg" className={props.className}>
      <defs>
        <linearGradient spreadMethod="pad" y2="0.914063" x2="0.738281" y1="0" x1="0" id="svg_5">
          <stop offset="0" stopColor={(pathname === '/')? "#b431f5" : (pathname === '/resume')? '#007bff' : '#ACE900'}/>
          <stop offset="0.980469" stopOpacity="0" stopColor="0"/>
        </linearGradient>
      </defs>
      <g>
        <title>Layer 1</title>
        <ellipse
          ry="60"
          rx="60"
          id="svg_8"
          cy="60"
          cx= "70"
          fillOpacity="null"
          fill="url(#svg_5)"/>
      </g>
    </svg>
    {/*<AnimatedCircle location={props.location.pathname}/>*/}
    </>

      :

      <svg width="1000" height="1000" xmlns="http://www.w3.org/2000/svg" className={props.className}>
        <defs>
          <linearGradient spreadMethod="pad" y2="0.914063" x2="0.738281" y1="0" x1="0" id="svg_5">
            <stop offset="0" stopColor={(pathname === '/')? "#b431f5" : (pathname === '/resume')? '#007bff' : '#ACE900'}/>
            <stop offset="0.980469" stopOpacity="0" stopColor="0"/>
          </linearGradient>
        </defs>
        <g>
          <title>Layer 1</title>
          <ellipse
            ry="398.5"
            rx="451"
            id="svg_8"
            cy="498.953125"
            cx= "485.5"
            fillOpacity="null"
            fill="url(#svg_5)"/>
        </g>
      </svg>
  )
}

export default Circle
