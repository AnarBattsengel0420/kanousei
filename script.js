// JavaScript code to rotate images in the slider automatically
const imageSlider = document.getElementById('imageSlider');
let currentImageIndex = 0;
const images = imageSlider.getElementsByTagName('img');

function rotateImages() {
  images[currentImageIndex].style.display = 'none';
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.display = 'block';
}

// Rotate images every 3 seconds
setInterval(rotateImages, 3000);

