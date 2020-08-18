let allProfileContainers = document.getElementsByClassName("profile");
let searchInput = document.getElementById("search-input");
let clearButton = document.getElementById("search-bar-icon-clear");
searchRemoteProfiles();
reduceKurzbeschreibung();

function searchRemoteProfiles() {
  let query = searchInput.value.toLowerCase();
  for (i = 0; i < allProfileContainers.length; i++) {
    if (allProfileContainers[i].querySelector(".profile-title").textContent.toLowerCase().includes(query)) {
      allProfileContainers[i].classList.remove("hidden");
    } else {
      allProfileContainers[i].classList.add("hidden");
    }
  }

  toggleClearButton();
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

//Kurzbeschreibungen per JS anpassen?
function reduceKurzbeschreibung(){
  for (i = 0; i < allProfileContainers.length; i++) {
    let currentKurzbeschreibungElement = allProfileContainers[i].querySelector(".kurzbeschreibung");
    let currentKurzbeschreibungString = currentKurzbeschreibungElement.textContent;
    if (currentKurzbeschreibungString.length > 300){
      let shortedString = currentKurzbeschreibungString.substring(0, 300);
      let link = allProfileContainers[i].querySelector("a").getAttribute("href");

      currentKurzbeschreibungElement.innerHTML = shortedString + "... <a href='"
                                + link + "'>(weiter lesen)</a>";
    }
  }
}
