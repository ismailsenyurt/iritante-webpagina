// functie 1 

function on(){
    document.getElementById("iphone").src='afbeeldingen/Picture 133.png'
    setTimeout(on, 3000)

}



  // function 2

function GG(){
    alert("Wezzebeaaa");
    document.getElementById("myButton").disabled = true;
  
}

// Function to open the pop-up only in visual are of user
function openPopup(popupNumber) {
  var popupContainer = document.getElementById("popup-container" + popupNumber);
  var overlay = document.getElementById("overlay");

  // Calculate the maximum top and left positions
  var maxTop = window.innerHeight - popupContainer.clientHeight;
  var maxLeft = window.innerWidth - popupContainer.clientWidth;

  // Set random top and left values within the limits
  var randomTop = Math.min(Math.floor(Math.random() * maxTop), maxTop);
  var randomLeft = Math.min(Math.floor(Math.random() * maxLeft), maxLeft);

  popupContainer.style.top = randomTop + "px";
  popupContainer.style.left = randomLeft + "px";

  popupContainer.style.display = "block";
  overlay.style.display = "block";
}

// Function to close the pop-up
function closePopup(popupNumber) {
  var popupContainer = document.getElementById("popup-container" + popupNumber);

  popupContainer.style.display = "none";
}

// Function to set up the interval for showing the pop-ups
function startInterval() {
  let popupNumber = 1;

  setInterval(() => {
    openPopup(popupNumber);
    popupNumber++;

    // als alle 5 popups zijn al op de page dan begint de interval opnieuw
    if (popupNumber > 5) {
      popupNumber = 1;
    }
  }, 5000); // 5000 milliseconds = 5 seconds
}

// Start het interval wanneer de pagina wordt geladen.
window.onload = startInterval;






