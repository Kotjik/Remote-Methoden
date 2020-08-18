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
