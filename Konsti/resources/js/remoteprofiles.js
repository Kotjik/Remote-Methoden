let allProfileContainers = document.getElementsByClassName("profile");

function searchRemoteProfiles(){
  let query = document.getElementById("search").value.toLowerCase();
  for(i = 0; i < allProfileContainers.length; i++){


    if(allProfileContainers[i].querySelector(".profile-title").textContent.toLowerCase().includes(query)){
      allProfileContainers[i].classList.remove("hidden");

    }else{
      allProfileContainers[i].classList.add("hidden");
    }

  }
}
