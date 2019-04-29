/* var player = document.getElementById('player');
  var snapshotCanvas = document.getElementById('snapshot');
  var captureButton = document.getElementById('capture');

  var handleSuccess = function(stream) {
    // Attach the video stream to the video element and autoplay.
    player.srcObject = stream;
  };

  captureButton.addEventListener('click', function() {
    var context = snapshot.getContext('2d');
    // Draw the video frame to the canvas.
    const showImage = context.drawImage(player, 0, 0, snapshotCanvas.width,
        snapshotCanvas.height);
    const imageData = context.getImageData(0, 0, snapshotCanvas.width,snapshotCanvas.height);
    const converToURL = showImage.toDataURL('image/png');
    console.log(converToURL)
});



  navigator.mediaDevices.getUserMedia({video: true})
      .then(handleSuccess); */