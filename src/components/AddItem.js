import React, { useState, useRef } from 'react'
import {FaPlusSquare} from "react-icons/fa"
import "../index.css"


function AddItem({newItem,setNewItem,handleSubmit}) {
    // const [id, setId] = useState(0);
    // const [text, setText] = useState("");
    // const [checkbox, setCheckBox] = useState(false);

    const inputRef = useRef();

  return (
    <form onSubmit={handleSubmit}>
        <label>Grocery Item Text:</label>
        <input
            id='addItemText'
            type="text"
            autoFocus
            ref={inputRef}
            placeholder='Enter Your Grocery Item Text:'
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />

        <button onClick={() => inputRef.current.focus()} type='submit' aria-label='addItem-button'>
            <FaPlusSquare />

        </button>

    </form>
    
  )
}

export default AddItem
