import styles from './Spinner.module.css'
import React from 'react'
import styled, { keyframes } from 'styled-components'

const motion = props => keyframes`
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
`

const HourGlassSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: ${p => `${p.size}${p.sizeUnit}`};
  height: ${p => `${p.size}${p.sizeUnit}`};

  &:after {
    content: ' ';
    display: block;
    border-radius: 50%;
    width: 1;
    height: 0;
    margin: 6px;
    box-sizing: border-box;
    border: 26px solid ${p => p.color};
    border-color: ${p => p.color} transparent ${p => p.color} transparent;
    animation: ${p => motion(p)} 1.2s infinite;
  }
`

const Spinner = ({ color, size, sizeUnit }) => {
  return (

  <div className={styles.spin}>
  <HourGlassSpinner color={color} size={size} sizeUnit={sizeUnit} />
  <br />
  <p className={styles.text}>Searching News</p>
  </div>
  )
  }

Spinner.defaultProps = {
  size: 65,
  color: '#999',
  sizeUnit: 'px'
}

export default Spinner