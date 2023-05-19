import React from 'react'
import Button from './Button'
import "./secondProject.css";
function Form({reqType, setReqType}) {
  return (
    <div>
        <form className='form_btns_div' onSubmit={(e) => e.preventDefault()}>
            <Button reqType={reqType} setReqType={setReqType} buttonText={"users"} />
            <Button reqType={reqType} setReqType={setReqType} buttonText={"posts"} />
            <Button reqType={reqType} setReqType={setReqType} buttonText={"comments"} />

        </form>
      
    </div>
  )
}

export default Form
