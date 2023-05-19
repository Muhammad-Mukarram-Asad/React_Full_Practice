import React from 'react'

function InputComponent({colorValue, setColorValue, isDarkText,setIsDarkText}) {
  return (
    <form onSubmit={e => e.preventDefault()}>
        <label htmlFor='colorInput'>Enter your color name below:</label>
        <input id='colorInput'
            type="text"
            value={colorValue}
            onChange={(e) => setColorValue(e.target.value)}
             />
        <button onClick={() => setIsDarkText(!isDarkText)} type='submit' id="input_btn">Toggle Text Color</button>

    </form>
  )
}

export default InputComponent
