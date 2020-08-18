let allProfileContainers = document.getElementsByClassName("profile");
reduceAllKurzbeschreibung();


function showAllMethods() {
  let methods = document.getElementById("methods");

  methods.classList.remove("hidden");

  //scroll to methods with offset because of Header
  let headerOffset = 65;
  let bodyRect = document.body.getBoundingClientRect().top;
  let methodsRect = methods.getBoundingClientRect().top;
  let methodsPosition = methodsRect - bodyRect;
  let offsetPostion = methodsPosition - headerOffset;
  window.scrollTo({
    top: offsetPostion,
    behavior: "smooth"
  });
}



let allSelections = document.getElementsByTagName("select");
function resetAllSelections(){
  for(i = 0; i< allSelections.length; i++){
    allSelections[i].value = "no_selection";
  }
}


//Kurzbeschreibungen per JS anpassen?
function reduceAllKurzbeschreibung(){
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
