

var widgetIframe = document.getElementById('sc-widget'),
widget   = SC.Widget(widgetIframe);

// volumeCurrent = 0

volumeControl= document.getElementById('volumeControl')
console.log(volumeControl.value);

//EVENT LISTENER
document.querySelector('#volumeControl').addEventListener("change", myFunction);

//FUNCTION TO RUN ON EVENT
function myFunction() {
  volumeControl= document.querySelector('#volumeControl');
  volumeControl = parseInt(volumeControl.value);
  console.log(volumeControl);
  widget.setVolume(volumeControl);
}
