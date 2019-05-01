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