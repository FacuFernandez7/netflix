import React from 'react'
import swal from 'sweetalert'


export const Message = ({title, text, icon, button = "acept"}) => {

  const TIMER = 2000;

  const showMessage = (title,text,icon,button) => {
    swal({
      title,
      text,
      icon,
      button,
      timer: TIMER
    })
    
  }

  return (
    <div>{showMessage()}</div>
  )
}

export default Message
