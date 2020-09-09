let upButton = document.getElementById("up-button");
let footerUpButton = document.querySelector("#footer-up-button");

window.onscroll = function(){toggleVisibility()};

function toggleVisibility(){
  if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
  && !isAnyPartOfElementInViewport(footerUpButton)) {
    //make visible
    upButton.classList.add("show");

  }else{
    //make invisible
    upButton.classList.remove("show");
  }



}


//Nach oben scrollen
function scrollToTopSmooth(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


//source: https://gist.github.com/davidtheclark/5515733
function isAnyPartOfElementInViewport(el) {

    const rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}
