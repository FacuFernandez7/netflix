import swal from 'sweetalert'

const TIMER = 5000;

export const alertMessage = (title, text, icon) => {
    swal({
      title,
      text,
      icon,
      button: "Acept",
      timer: TIMER
    }) 
}

export const confirmMessage =  (title, text, icon, callback) => {
  swal({
    title,
    text,
    icon,
    buttons: ["No", "Yes"],
  }).then(confirmed => {
    callback(confirmed === true)
  }) 
}

