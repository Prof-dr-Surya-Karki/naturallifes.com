//Form 
const Registration_Form = document.forms['registration-form']

//keep
const email = document.getElementById('email')
const photoUrl = document.getElementById("photoUrl")
const ppSizePhoto = document.getElementById("ppSizePhoto")
const photoIDUrl = document.getElementById("photoIDUrl")
const photoID = document.getElementById("photoID")
const photoEduUrl = document.getElementById("photoEduUrl")
const educationalCertificate = document.getElementById("educationalCertificate")

//Google Sheet url
const scriptURL = 'https://script.google.com/macros/s/AKfycbzZIWg8AS35_QSLmrO9-bJD5r4FDIgYzGp-GQOvHeyKgCARMbzztQn64cwZSYgNQROTSA/exec'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional   
const firebaseConfig = {
  apiKey: "AIzaSyARBhKfVui1on8bXTL2OQApxw-FAz81O8o",
  authDomain: "inm-registration-form.firebaseapp.com",
  projectId: "inm-registration-form",
  storageBucket: "inm-registration-form.appspot.com",
  messagingSenderId: "674317401825",
  appId: "1:674317401825:web:5ccebd15ba559488e501a0",
  measurementId: "G-C17HK3E63M"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//variable declaration for Image
var inputFieldArray = []

var maxFileSize = 5000 //in kb

var files = [];
var ppSizePhotoName;
var photoIDName;
var eduCertificateName;

//getfiles into variable
ppSizePhoto.onchange = function () {
  files[0] = ppSizePhoto.files[0];
  if ((files[0].size / 1024).toFixed(2) > maxFileSize) {
    alert('Please upload file less than ' + maxFileSize + 'kb');
  } else {
    console.log(ppSizePhoto.value);
    ppSizePhotoName = email.value + '__ppSizePhoto' + '.' + getFileExtension(ppSizePhoto.value);
    document.getElementById('image-preview').src = window.URL.createObjectURL(files[0]);
    document.getElementById('image-preview-container').style.display = 'flex';

  }
}

photoID.onchange = function previewImage() {
  files[1] = photoID.files[0];
  if ((files[1].size / 1024).toFixed(2) > maxFileSize) {
    alert('Please upload file less than ' + maxFileSize + 'kb');
  } else {
    console.log(photoID.value);
    photoIDName = email.value + '__ppSizePhoto' + '.' + getFileExtension(photoID.value);
    document.getElementById('image-preview').src = window.URL.createObjectURL(files[1]);
    document.getElementById('image-preview-container').style.display = 'flex';

  }
}

educationalCertificate.onchange = function () {
  files[2] = educationalCertificate.files[0];
  if ((files[2].size / 1024).toFixed(2) > maxFileSize) {
    alert('Please upload file less than ' + maxFileSize + 'kb');
  } else {
    console.log(educationalCertificate.value);
    eduCertificateName = email.value + '__ppSizePhoto' + '.' + getFileExtension(educationalCertificate.value);
    document.getElementById('image-preview').src = window.URL.createObjectURL(files[2]);
    document.getElementById('image-preview-container').style.display = 'flex';

  }
}

//functions
//get file extension
function getFileExtension(filename) {
  var ext = /^.+\.([^.]+)$/.exec(filename);
  return ext == null ? "" : ext[1];
}

//upload to cloud storage and return url
async function uploadFile(directory, fileName, file) {

  let snapshot = await firebase.storage().ref(directory + fileName).put(file).then((snapshot) => {
    return snapshot;
  })

  let url = await snapshot.ref.getDownloadURL().then((url) => {
    return url
  })

  return new Promise(resolve => {
    resolve(url);
  });

}


//function after successful registration
function registrationSuccess() {
  //Registration_Form.reset()
  document.getElementById('registering-label').style.display = "none";
  document.getElementById('registration-form-block').style.display = "none";
  document.getElementById('registeration-success-label').style.display = "flex";
}

function updateDatabase() {

  //Upload Files to the firestore
  document.getElementById('registering-label').style.display = "flex"

  uploadFile('Passport size photo/', ppSizePhotoName, files[0]).then((url) => {
      photoUrl.value = url
      console.log('ppsize' + photoUrl.value)

      uploadFile('Educational Certificate/', eduCertificateName, files[1]).then((url) => {
          photoEduUrl.value = url
          console.log('Educational' + photoEduUrl.value)

          uploadFile('Photo ID/', photoIDName, files[2]).then((url) => {
            photoUrl.value = url
            console.log('Photo ID ' + photoIDUrl.value)

            console.log('sheet updating')
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
          })
        })
  })
}

//submit method of registration form
Registration_Form.addEventListener('submit', e => {
  e.preventDefault()
  console.log("Submitting....");
  updateDatabase()
  console.log("Submitted.");
});