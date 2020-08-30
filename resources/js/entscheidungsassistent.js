let profilesContainer = document.querySelector("#profiles-container");
let allProfiles = document.querySelectorAll(".profile");
let allSelections = document.getElementsByTagName("select");
let allFilterBubbles = document.querySelectorAll(".filter-bubble");
window.onload = reduceAllKurzbeschreibung();

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
  resetAllProfilesHTMLPosition();
  resetAllFilterBubbles();
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

//Selectoren
let synchronitaet_selector = document.querySelector("#synchronitaet_selector"),
    moderation_selector = document.querySelector("#moderation_selector"),
    zeit_selector = document.querySelector("#zeit_selector"),
    ressourcen_selector = document.querySelector("#ressourcen_selector"),
    teilnehmeranzahl_selector = document.querySelector("#teilnehmeranzahl_selector"),
    teilnehmerart_selector = document.querySelector("#teilnehmerart_selector"),
    entwicklungsphase_selector = document.querySelector("#entwicklungsphase_selector"),
    ergebnisse_selector = document.querySelector("#ergebnisse_selector");

//Filter-bubbles
let synchronitaet_filterbubble = document.querySelector("#synchronitaet_filterbubble"),
    moderation_filterbubble = document.querySelector("#moderation_filterbubble"),
    zeit_filterbubble = document.querySelector("#zeit_filterbubble"),
    ressourcen_filterbubble = document.querySelector("#ressourcen_filterbubble"),
    teilnehmeranzahl_filterbubble = document.querySelector("#teilnehmeranzahl_filterbubble"),
    teilnehmerart_filterbubble = document.querySelector("#teilnehmerart_filterbubble"),
    entwicklungsphase_filterbubble = document.querySelector("#entwicklungsphase_filterbubble"),
    ergebnisse_filterbubble = document.querySelector("#ergebnisse_filterbubble");


function showWantedProfiles(){
  profilesContainer.classList.remove("hidden");
  resetAllFilterBubbles();
  let numberOfFoundProfiles = 0;
  let foundProfiles = [];

  for (i = 0; i < allProfiles.length; i++) {

    //Eigenschaften
    let synchronitaet_eigenschaft = allProfiles[i].querySelector(".synchronitaet").textContent.toLowerCase(),
        moderation_eigenschaft = allProfiles[i].querySelector(".moderation").textContent.toLowerCase(),
        zeit_eigenschaft = allProfiles[i].querySelector(".zeitaufwand").textContent.toLowerCase(),
        ressourcen_eigenschaft = allProfiles[i].querySelector(".ressourcen").textContent.toLowerCase(),
        teilnehmeranzahl_eigenschaft = allProfiles[i].querySelector(".anzahlTeilnehmer").textContent.toLowerCase(),
        teilnehmerart_eigenschaft = allProfiles[i].querySelector(".artTeilnehmer").textContent.toLowerCase(),
        entwicklungsphase_eigenschaft = allProfiles[i].querySelector(".entwicklungsphase").textContent.toLowerCase(),
        ergebnisse_eigenschaft = allProfiles[i].querySelector(".ergebnisse").textContent.toLowerCase();

    let falscheEigenschaften = 0;


    for(j = 0; j < allSelections.length; j++){
      switch(allSelections[j]){
        // Auswahl: syncrhon | asynchron | beides
        case synchronitaet_selector:
          if(synchronitaet_selector.value != "no_selection"){
            if(synchronitaet_selector.value != synchronitaet_eigenschaft
               || synchronitaet_eigenschaft == ""){
              falscheEigenschaften++;
            }else{
              synchronitaet_filterbubble.classList.remove("hidden");
              synchronitaet_filterbubble.querySelector(".filterbubble-content")
                .innerHTML = "Sychronität: " +  synchronitaet_selector.options[synchronitaet_selector.selectedIndex].text;
            }
          }
          break;

          // Auswahl: moderiert | automatisiert | beides
        case moderation_selector:
          if(moderation_selector.value != "no_selection"){
            if(moderation_selector.value != moderation_eigenschaft
               || moderation_eigenschaft == ""){
              falscheEigenschaften++;
            }else{
              moderation_filterbubble.classList.remove("hidden");
              moderation_filterbubble.querySelector(".filterbubble-content")
                .innerHTML = "Moderation: " +  moderation_selector.options[moderation_selector.selectedIndex].text;
            }
          }
          break;

          // Auswahl: gering | mittel | hoch
        case zeit_selector:
          if(zeit_selector.value != "no_selection"){
            if(zeit_selector.value != zeit_eigenschaft
               || zeit_eigenschaft == ""){
              falscheEigenschaften++;
            }else{
              zeit_filterbubble.classList.remove("hidden");
              zeit_filterbubble.querySelector(".filterbubble-content")
                .innerHTML = "Zeitaufwand: " +  zeit_selector.options[zeit_selector.selectedIndex].text;
            }
          }
          break;

          // Auswahl: gering | mittel | hoch
        case ressourcen_selector:
          if(ressourcen_selector.value != "no_selection"){
            if(ressourcen_selector.value != ressourcen_eigenschaft
               || ressourcen_eigenschaft == ""){
              falscheEigenschaften++;
            }else{
              ressourcen_filterbubble.classList.remove("hidden");
              ressourcen_filterbubble.querySelector(".filterbubble-content")
                .innerHTML = "Ressourcen: " +  ressourcen_selector.options[ressourcen_selector.selectedIndex].text;
            }
          }
          break;

          // Auswahl: Weniger als 20 = gering | 20 bis 99 = mittel | über 90 = hoch
        case teilnehmeranzahl_selector:
          if(teilnehmeranzahl_selector.value != "no_selection"){
            // if(teilnehmeranzahl_selector.value.includes(teilnehmeranzahl_eigenschaft)){
            if(!teilnehmeranzahl_eigenschaft.includes(teilnehmeranzahl_selector.value)
               || teilnehmeranzahl_selector == ""){

              falscheEigenschaften++;
            }else{
              teilnehmeranzahl_filterbubble.classList.remove("hidden");
              teilnehmeranzahl_filterbubble.querySelector(".filterbubble-content")
                .innerHTML = "Teilnehmeranzahl: " +  teilnehmeranzahl_selector.options[teilnehmeranzahl_selector.selectedIndex].text;
            }
          }
          break;

          // Auswahl: anfänger | experte | stakeholder
        case teilnehmerart_selector:
          if(teilnehmerart_selector.value != "no_selection"){
            // if(teilnehmerart_selector.value != teilnehmerart_eigenschaft){
            if(!teilnehmerart_eigenschaft.includes(teilnehmerart_selector.value)
               || teilnehmerart_eigenschaft == ""){

              falscheEigenschaften++;
            }else{
              teilnehmerart_filterbubble.classList.remove("hidden");
              teilnehmerart_filterbubble.querySelector(".filterbubble-content")
                .innerHTML = "Teilnehmerart: " +  teilnehmerart_selector.options[teilnehmerart_selector.selectedIndex].text;
            }
          }
          break;

          // Auswahl: analyse | konzept | umsetzung | nachumsetzung
        case entwicklungsphase_selector:
          if(entwicklungsphase_selector.value != "no_selection"){
            if(entwicklungsphase_selector.value != entwicklungsphase_eigenschaft
               || entwicklungsphase_eigenschaft == ""){
              falscheEigenschaften++;
            }else{
              entwicklungsphase_filterbubble.classList.remove("hidden");
              entwicklungsphase_filterbubble.querySelector(".filterbubble-content")
                .innerHTML = "Entwicklungsphase: " +  entwicklungsphase_selector.options[entwicklungsphase_selector.selectedIndex].text;
            }
          }
          break;

          // Auswahl: quantitativ | qualitativ | beides
        case ergebnisse_selector:
          if(ergebnisse_selector.value != "no_selection"){
            // if(ergebnisse_selector.value != ergebnisse_eigenschaft
            // if(!teilnehmerart_eigenschaft.includes(teilnehmerart_selector.value)
            if(!ergebnisse_eigenschaft.includes(ergebnisse_selector.value)
               || ergebnisse_eigenschaft == ""){
              falscheEigenschaften++;
            }else{
              ergebnisse_filterbubble.classList.remove("hidden");
              ergebnisse_filterbubble.querySelector(".filterbubble-content")
                .innerHTML = "Ergebnisse: " +  ergebnisse_selector.options[ergebnisse_selector.selectedIndex].text;
            }
          }
          break;
      }
    }
    if(falscheEigenschaften == 0){
      numberOfFoundProfiles++;
      foundProfiles.push(allProfiles[i]);
    }else{
    }
  }

  updateNumberOfProfilesFoundHTML(numberOfFoundProfiles);
  resetAllProfilesHTMLPosition();
  assignProfilesToRows(foundProfiles);
  srollToMethods();

}

function updateNumberOfProfilesFoundHTML(number){
  let numberOfProfilesFoundElement = document.getElementById("numberOfProfilesFoundElement");
  let noFilterChosenElement = document.getElementById("noFilterChosenElement");
  numberOfProfilesFoundElement.innerHTML = "Es gibt " + number + " Methoden, die Ihren Filtereinstellungen entsprechen:";

  let noFilterChosen = false;
  let filterChosenCounter = 0;
  for(i=0; i<allSelections.length; i++){
    if(allSelections[i].value == "no_selection"){
      filterChosenCounter++;
    }
  }
  if(filterChosenCounter == 8){
    noFilterChosen = true;
  }
  if(noFilterChosen){
    noFilterChosenElement.classList.remove("hidden");
  }else{
    noFilterChosenElement.classList.add("hidden");
  }
}

function assignProfilesToRows(profiles){
  let colCounter = 0;
  let rowCounter = 0;

  for(i=0; i<profiles.length; i++){
      document.getElementsByClassName("w3-row-padding")[rowCounter].appendChild(profiles[i]);
      colCounter++;
      if(colCounter > 3){
        colCounter = 0;
        rowCounter++;
      }
  }
}

function resetAllProfilesHTMLPosition(){
  for(i=0; i<allProfiles.length; i++){
    document.getElementById("all-profiles-section").appendChild(allProfiles[i]);
  }
}




//Falls Nutzer von einer Detailseite zurückgeht oder reloaded, sollen die vorherig gefundenen
//Methoden wieder angezeigt werden
//Call function after everything loaded
window.onload = function(){
  const perfEntries = performance.getEntriesByType('navigation');
  if (perfEntries.length && (perfEntries[0].type === 'back_forward' || perfEntries[0].type === 'reload')) {
    showWantedProfiles();
  }
}



//Filterbubbles Funktionen
function resetAllFilterBubbles(){
  for(i=0; i<allFilterBubbles.length; i++){
    allFilterBubbles[i].classList.add("hidden");
    allFilterBubbles[i].querySelector(".filterbubble-content").innerHTML = "";
  }
}

function deleteClickedFilter(element){
  element.classList.add("hidden");

  switch(element.id){
    case "synchronitaet_filterbubble":
      synchronitaet_selector.value = "no_selection";
      break;

    case "moderation_filterbubble":
      moderation_selector.value = "no_selection";
      break;

    case "zeit_filterbubble":
      zeit_selector.value = "no_selection";
      break;

    case "ressourcen_filterbubble":
      ressourcen_selector.value = "no_selection";
      break;

    case "teilnehmeranzahl_filterbubble":
      teilnehmeranzahl_selector.value = "no_selection";
      break;

    case "teilnehmerart_filterbubble":
      teilnehmerart_selector.value = "no_selection";
      break;

    case "entwicklungsphase_filterbubble":
      entwicklungsphase_selector.value = "no_selection";
      break;

    case "ergebnisse_filterbubble":
      ergebnisse_selector.value = "no_selection";
      break;
  }
  showWantedProfiles();
}












//for added newlines
