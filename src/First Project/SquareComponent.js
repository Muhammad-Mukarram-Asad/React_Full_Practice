import React from 'react'
import "../../index.css";

function SquareComponent({colorValue, isDarkText}) {
  return (
    <div className='square_div'
        style={{backgroundColor:colorValue,
        color:isDarkText ? "#000" : "#fff"}}>
    <p>{colorValue ? `The Color name is --> ${colorValue}` : "No Color name is given"}
    
    </p>
    
    </div>
  )
}

SquareComponent.defaultProps = {
    colorValue : "Empty Color Value"
}
export default SquareComponent
