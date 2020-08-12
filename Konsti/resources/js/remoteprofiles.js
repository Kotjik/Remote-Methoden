let allProfileContainers = document.getElementsByClassName("profile");
let searchInput = document.getElementById("search-input");
let clearButton = document.getElementById("search-bar-icon-clear");

function searchRemoteProfiles() {
  let query = searchInput.value.toLowerCase();
  for (i = 0; i < allProfileContainers.length; i++) {


    if (allProfileContainers[i].querySelector(".profile-title").textContent.toLowerCase().includes(query)) {
      allProfileContainers[i].classList.remove("hidden");

    } else {
      allProfileContainers[i].classList.add("hidden");
    }

  }
}

function toggleClearButton(){
  if(searchInput.value.length == 0){
    clearButton.classList.add("hidden");
  }else{
    clearButton.classList.remove("hidden");
  }
}

function clearInput(){
  searchInput.value = "";
  clearButton.classList.add("hidden");
  searchRemoteProfiles();
}
