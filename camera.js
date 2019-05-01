//Initialize Cloud Firestore through Firebase
const db = firebase.firestore(); //Iniciacion de Firestore (db)
//agregar documentos
function saveDataUser(){
  const name = document.getElementById("name").value;
  const lastName = document.getElementById("last_name").value;
  const host = document.getElementById("host_name").value;
  const picture = document.getElementById("hiddenPicture").value;
  db.collection("users").add({
      first: name,
      last: lastName,
      hosttest: host,
      picture: picture 
      

  })

document.getElementById("hiddenPicture").style.display= "none";

var player = document.getElementById('player');
var snapshotCanvas = document.getElementById('snapshot');
var captureButton = document.getElementById('capture');

var handleSuccess = function(stream) {
 // Attach the video stream to the video element and autoplay.
 player.srcObject = stream;
};

captureButton.addEventListener('click', function() {
 var context = snapshotCanvas.getContext('2d');
 // Draw the video frame to the canvas.
 const showImage = context.drawImage(player, 0, 0, snapshotCanvas.width,
     snapshotCanvas.height);

 const imageData = context.getImageData(0, 0, snapshotCanvas.width,snapshotCanvas.height);
 console.log(imageData);
 const converToURL = snapshotCanvas.toDataURL('image/png');
document.getElementById("hiddenPicture").innerHTML=converToURL;
});


navigator.mediaDevices.getUserMedia({video: true})
   .then(handleSuccess);