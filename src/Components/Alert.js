import React from 'react'

function Alert(props) {
  const captalizeText = (word) =>{
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
  return (
    <div style={{height:"40px"}}>
    {props.alertMsg && <div className={`alert alert-${props.alertMsg.type} alert-dismissible fade show`} role="alert">
  <strong>{captalizeText(props.alertMsg.type)}</strong>: {captalizeText(props.alertMsg.msg)}
</div>
  }
</div>
  )
}

export default Alert