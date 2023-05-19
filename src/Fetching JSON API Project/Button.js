import React from 'react'
import "./secondProject.css";

function Button({buttonText,reqType,setReqType}) {
  return (
    <div>
        <button  className={buttonText == reqType ? "selected": "btn"}
         onClick={()=> setReqType(buttonText)}>
            {buttonText}
        </button>
      
    </div>
  )
}

export default Button
