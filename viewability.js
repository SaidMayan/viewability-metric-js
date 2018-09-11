// Write plain javascript to do the following:
// Every 2 seconds:
// ­ Check whether the image is viewable** ­ If yes, write “visible” to the console (that is, window.console) ­ If no, do nothing
// ** the image is “viewable” if any part of it appears on the screen (so if the image is entirely above or below the viewport, then the user cannot see it, so it is not considered “viewable”)

function isVisible () {
  let img = document.querySelector('#myimage');
  let { top, bottom } = img.getBoundingClientRect();
  let vHeight = (window.innerHeight || document.documentElement.clientHeight);
    if((top > 0 || bottom > 0) && (top < vHeight)){
  console.log('visible');
  }}

setInterval(isVisible, 2000);
