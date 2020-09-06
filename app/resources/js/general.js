let mySidebar = document.getElementById("mySidebar");

// Toggle between showing and hiding the sidebar when clicking the menu icon
function w3_open() {
  let mySidebar = document.getElementById("mySidebar");
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
}

// Scroll to top of page smoothly
function scrollToTopSmooth(){
  window.scrollTo({top: 0, behavior: "smooth"});
}
