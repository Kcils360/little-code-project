'use strict';

function Image(number) {
  this.name = number;
  this.source = 'img/' + this.name + '.jpg';  //this is the source of the images for the website
  this.timesShown = 0;
  Image.all.push(this);
}

Image.all = [];
Image.allNames = ['one', 'two', 'three', 'four', 'five', 'six' ,'seven', 'eight', 'nine', 'ten'];

for(var i = 0; i < Image.allNames.length; i++){
  new Image(image.allNames[i]);
}

new Image('one');

Image.imgEl = document.getElementById('the_image');

function randomImage(e) {
  if(e.target.alt === 'nine'){
    alert('OMG A BABY GOAT');
  }
  console.log(Image.imgEl.alt, '');
  var randomIndex = Math.floor(Math.random * Image.all.length);
  Image.imgEl.src = Image.all[randomIndex].source;
  Image.imgEl.alt = Image.all[randomIndex].name;
  Image.all[randomIndex].timesShown += 1;
}
randomImage();
document.getElementById('the_image').addEventListener('click', randomImage);
