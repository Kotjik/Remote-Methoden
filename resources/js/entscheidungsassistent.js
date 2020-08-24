let profilesContainer = document.querySelector("#profiles-container");
let allProfiles = document.querySelectorAll(".profile");
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
  resetAllProfilesHTMLPosition();
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
    kommunikation_selector = document.querySelector("#kommunikation_selector"),
    zeit_selector = document.querySelector("#zeit_selector"),
    ressourcen_selector = document.querySelector("#ressourcen_selector"),
    teilnehmeranzahl_selector = document.querySelector("#teilnehmeranzahl_selector"),
    teilnehmerart_selector = document.querySelector("#teilnehmerart_selector"),
    tools_selector = document.querySelector("#tools_selector"),
    entwicklungsphase_selector = document.querySelector("#entwicklungsphase_selector"),
    ergebnisse_selector = document.querySelector("#ergebnisse_selector");



function showWantedProfiles(){
  profilesContainer.classList.remove("hidden");
  let numberOfFoundProfiles = 0;
  let foundProfiles = [];

  for (i = 0; i < allProfiles.length; i++) {

    //Eigenschaften
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
        // Auswahl: syncrhon | asynchron | beides
        case synchronitaet_selector:
          if(synchronitaet_selector.value != "no_selection"){
            if(synchronitaet_selector.value != synchronitaet_eigenschaft
               || synchronitaet_eigenschaft == ""){
              falscheEigenschaften++;
            }
          }
          break;

          // Auswahl: moderiert | automatisiert | beides
        case moderation_selector:
          if(moderation_selector.value != "no_selection"){
            if(moderation_selector.value != moderation_eigenschaft
               || moderation_eigenschaft == ""){
              falscheEigenschaften++;
            }
          }
          break;

          // Auswahl: TODO
        case kommunikation_selector:
          if(kommunikation_selector.value != "no_selection"){
            if(kommunikation_selector.value != kommunikation_eigenschaft
               || kommunikation_eigenschaft == ""){
              falscheEigenschaften++;
            }
          }
          break;

          // Auswahl: gering | mittel | hoch
        case zeit_selector:
          if(zeit_selector.value != "no_selection"){
            if(zeit_selector.value != zeit_eigenschaft
               || zeit_eigenschaft == ""){
              falscheEigenschaften++;
            }
          }
          break;

          // Auswahl: gering | mittel | hoch
        case ressourcen_selector:
          if(ressourcen_selector.value != "no_selection"){
            if(ressourcen_selector.value != ressourcen_eigenschaft
               || ressourcen_eigenschaft == ""){
              falscheEigenschaften++;
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
            }
          }
          break;

          // Auswahl: TODO
        case tools_selector:
          if(tools_selector.value != "no_selection"){
            if(tools_selector.value != tools_eigenschaft
               || tools_eigenschaft == ""){
              falscheEigenschaften++;
            }
          }
          break;

          // Auswahl: analyse | konzept | umsetzung | nachumsetzung
        case entwicklungsphase_selector:
          if(entwicklungsphase_selector.value != "no_selection"){
            if(entwicklungsphase_selector.value != entwicklungsphase_eigenschaft
               || entwicklungsphase_eigenschaft == ""){
              falscheEigenschaften++;
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
  numberOfProfilesFoundElement.innerHTML = "Es gibt " + number + " Methoden, die deinen Filtereinstellungen entsprechen:";
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
