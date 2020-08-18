let profilesContainer = document.querySelector("#profiles-container");
let allProfiles = document.getElementsByClassName("profile");
let allSelections = document.getElementsByTagName("select");
reduceAllKurzbeschreibung();

// Zu den Methoden scrollen
function srollToMethods(){
  //scroll to methods with offset because of Header
  let headerOffset = 65;
  let bodyRect = document.body.getBoundingClientRect().top;
  let profilesContainerRect = profilesContainer.getBoundingClientRect().top;
  let profilesContainerPosition = profilesContainerRect - bodyRect;
  let offsetPostion = profilesContainerPosition - headerOffset;
  window.scrollTo({
    top: offsetPostion,
    behavior: "smooth"
  });
}


//Filterauswahl zurücksetzen
function resetAllSelections(){
  profilesContainer.classList.add("hidden");
  for(i = 0; i< allSelections.length; i++){
    allSelections[i].value = "no_selection";
  }
}

//lange Kurzbeschreibungen verkürzen
function reduceAllKurzbeschreibung(){
  for (i = 0; i < allProfiles.length; i++) {
    let currentKurzbeschreibungElement = allProfiles[i].querySelector(".kurzbeschreibung");
    let currentKurzbeschreibungString = currentKurzbeschreibungElement.textContent;
    if (currentKurzbeschreibungString.length > 300){
      let shortedString = currentKurzbeschreibungString.substring(0, 300);
      let link = allProfiles[i].querySelector("a").getAttribute("href");

      currentKurzbeschreibungElement.innerHTML = shortedString + "... <a href='"
                                + link + "'>(weiter lesen)</a>";
    }
  }
}


// Passende Methoden finde, ausgehen von den gesetzten Filtern
function showAllMethods() {
  profilesContainer.classList.remove("hidden");
  for(i = 0; i<allProfiles.length; i++){
    allProfiles[i].classList.remove("hidden");
  }
}

let synchronitaet_selector = document.querySelector("#synchronitaet"),
    moderation_selector = document.querySelector("#moderation"),
    kommunikation_selector = document.querySelector("#kommunikation"),
    zeit_selector = document.querySelector("#zeit"),
    ressourcen_selector = document.querySelector("#ressourcen"),
    teilnehmeranzahl_selector = document.querySelector("#teilnehmerzahl"),
    teilnehmerart_selector = document.querySelector("#teilnehmerart"),
    tools_selector = document.querySelector("#tools"),
    entwicklungsphase_selector = document.querySelector("#entwicklungsphase"),
    ergebnisse_selector = document.querySelector("#ergebnisse");



function showWantedProfiles(){
  profilesContainer.classList.remove("hidden");
  let numberOfFoundProfiles = 0;

  for (i = 0; i < allProfiles.length; i++) {
    let synchronitaet_eigenschaft = allProfiles[i].querySelector(".synchronitaet").textContent.toLowerCase(),
        moderation_eigenschaft = allProfiles[i].querySelector(".moderation").textContent.toLowerCase(),
        kommunikation_eigenschaft = allProfiles[i].querySelector(".kommunikation").textContent.toLowerCase(),
        zeit_eigenschaft = allProfiles[i].querySelector(".zeitaufwand").textContent.toLowerCase(),
        ressourcen_eigenschaft = allProfiles[i].querySelector(".ressourcen").textContent.toLowerCase(),
        teilnehmeranzahl_eigenschaft = allProfiles[i].querySelector(".anzahlTeilnehmer").textContent.toLowerCase(),
        teilnehmerart_eigenschaft = allProfiles[i].querySelector(".artTeilnehmer").textContent.toLowerCase(),
        tools_eigenschaft = allProfiles[i].querySelector(".tools").textContent.toLowerCase(),
        entwicklungsphase_eigenschaft = allProfiles[i].querySelector(".entwicklungsphase").textContent.toLowerCase(),
        ergebnisse_eigenschaft = allProfiles[i].querySelector(".ergebnisse").textContent.toLowerCase();

    let falscheEigenschaften = 0;


    for(j = 0; j < allSelections.length; j++){
      switch(allSelections[j]){
        case synchronitaet_selector:
          if(synchronitaet_selector.value != "no_selection"){
            if(synchronitaet_selector.value != synchronitaet_eigenschaft){
              falscheEigenschaften++;
            }
          }
          break;
        case moderation_selector:
          if(moderation_selector.value != "no_selection"){
            if(moderation_selector.value != moderation_eigenschaft){
              falscheEigenschaften++;
            }
          }
          break;
        case kommunikation_selector:
          if(kommunikation_selector.value != "no_selection"){
            if(kommunikation_selector.value != kommunikation_eigenschaft){
              falscheEigenschaften++;
            }
          }
          break;
        case zeit_selector:
          if(zeit_selector.value != "no_selection"){
            if(zeit_selector.value != zeit_eigenschaft){
              falscheEigenschaften++;
            }
          }
          break;
        case ressourcen_selector:
          if(ressourcen_selector.value != "no_selection"){
            if(ressourcen_selector.value != ressourcen_eigenschaft){
              falscheEigenschaften++;
            }
          }
          break;
        case teilnehmeranzahl_selector:
          if(teilnehmeranzahl_selector.value != "no_selection"){
            if(teilnehmeranzahl_selector.value != teilnehmeranzahl_eigenschaft){
              falscheEigenschaften++;
            }
          }
          break;
        case teilnehmerart_selector:
          if(teilnehmerart_selector.value != "no_selection"){
            if(teilnehmerart_selector.value != teilnehmerart_eigenschaft){
              falscheEigenschaften++;
            }
          }
          break;
        case tools_selector:
          if(tools_selector.value != "no_selection"){
            if(tools_selector.value != tools_eigenschaft){
              falscheEigenschaften++;
            }
          }
          break;
        case entwicklungsphase_selector:
          if(entwicklungsphase_selector.value != "no_selection"){
            if(entwicklungsphase_selector.value != entwicklungsphase_eigenschaft){
              falscheEigenschaften++;
            }
          }
          break;
        case ergebnisse_selector:
          if(ergebnisse_selector.value != "no_selection"){
            if(ergebnisse_selector.value != ergebnisse_eigenschaft){
              falscheEigenschaften++;
            }
          }
          break;
      }
    }
    if(falscheEigenschaften == 0){
      allProfiles[i].classList.remove("hidden");
      numberOfFoundProfiles++;
    }else{
      allProfiles[i].classList.add("hidden");
    }
  }
  srollToMethods();

    //// TODO: Anzahl gefundener Methoden anzeigen lassen!
  updateNumberOfProfilesFoundHTML(numberOfFoundProfiles);

}

function updateNumberOfProfilesFoundHTML(number){
  let numberOfProfilesFoundElement = document.getElementById("numberOfProfilesFoundElement");
  numberOfProfilesFoundElement.innerHTML = "Es gibt " + number + " Methoden, die deinen Filtereinstellungen entsprechen:";
}
