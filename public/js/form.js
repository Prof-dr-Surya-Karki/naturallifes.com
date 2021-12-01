const scriptURL = 'https://script.google.com/macros/s/AKfycbzZIWg8AS35_QSLmrO9-bJD5r4FDIgYzGp-GQOvHeyKgCARMbzztQn64cwZSYgNQROTSA/exec'
const Registration_Form = document.forms['registration-form']


function registrationSuccess() {
  //Registration_Form.reset()
  document.getElementById('registering-label').style.display = "none"
  document.getElementById('registration-form-block').style.display = "none"
  document.getElementById('registeration-success-label').style.display = "flex"
}


Registration_Form.addEventListener('submit', e => {
  e.preventDefault()
  console.log("Submitting....");
  document.getElementById('registering-label').style.display = "flex"
  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(Registration_Form)
  })
  .then(() => {
    console.log('success')
    registrationSuccess()
  })
  .catch((error) => {
    console.error('Error!', error.message)
  })
  console.log("Submitted.")
})


