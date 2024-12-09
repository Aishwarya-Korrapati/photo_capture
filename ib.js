const video = document.getElementById('video');
const captureButton = document.getElementById('capture-button');

let stream;

navigator.mediaDevices.getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
    this.stream = stream;
    console.log('Camera access granted');
  })
  .catch((error) => {
    console.error('Error accessing camera:', error);
  });


//   navigator.mediaDevices.getUserMedia({
//     video: {
//       width: { ideal: 640 },
//       height: { ideal: 480 }
//     }
//   })
//   .then((stream) => {
//     video.srcObject = stream;
//     this.stream = stream;
//     video.play();
//   })
//   .catch((error) => {
//     console.error('Error accessing camera:', error);
//   });
  
  

video.addEventListener('canplay', () => {
  video.play();
});

captureButton.addEventListener('click', () => {
  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0);
  const imageData = canvas.toDataURL('image/jpeg');
  const branch = document.getElementById('branch').value;
  const rollNumber = document.getElementById('roll-number').value;
  const view = document.getElementById('view').value;
  const filename = `${branch}_${rollNumber}_${view}.jpg`;
  const link = document.createElement('a');
  link.href = imageData;
  link.download = filename;
  link.click();
});


