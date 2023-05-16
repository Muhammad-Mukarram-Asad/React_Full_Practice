import React from 'react'

function Footer(props) {
  return (
    <div style={{width:"100%",position:"fixed",bottom:0, border:"1px solid black"}}>
        <p style={{color:"black", fontSize:20,textAlign:"center"}}>Developer:
        <span style={{color:"darkblue", fontSize:16,textAlign:"center"}}>
            Muhammad Mukarram Asad
        </span> 
        </p>

        <p style={{color:"black", fontSize:20,textAlign:"center"}}>
          {props === 1 ? `${props.length} Item in the array`: `${props.length} Items in the array...`}
        </p>
      
    </div>
  )
}

export default Footer
