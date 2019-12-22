const search_input = document.getElementById('search');

//fetch information from Launches api
function fetchSpaceX(){
fetch("https://api.spacexdata.com/v3/launches")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        loopThroughLaunch(json);
    });
}



function loopThroughLaunch(LaunchObject) {

    const LaunchArray = LaunchObject;


 //filter everything to lowercase so the search input does not have to be correct 
 // search by rocket name
    var filtered = LaunchArray.filter(function(search){
        return search.rocket.rocket_name.toLowerCase().includes(search_input.value.toLowerCase())
    })
  //search by mission name
    var filtered = LaunchArray.filter(function(search){
        return search.mission_name.toLowerCase().includes(search_input.value.toLowerCase())
    })



 
    let newHTML = "";
    

    filtered.forEach(function(Launch) {
      var d = new Date(Launch.launch_date_utc);

     // det is a varable for details, that will show blank if the details = null 
      var det =  Launch.details;
      if(!det){det = ""};

      // pic is a varable for picture, that will show blank if there is no picture to fetch

      var pic =  Launch.links.mission_patch_small;
      if(!pic){pic = ""};


 


        newHTML += `<div class="launchinfo">
                        <h1>${Launch.mission_name}</h1> 
                        <p><strong>Date:</strong> ${d.toUTCString()}</p>  
                       <img src="${pic}">
                                       
                        <p><strong>Rocket:</strong> ${Launch.rocket.rocket_name}</p>
                        <p>${det}</p>
                       
                        <p><strong>Launch site:</strong> ${Launch.launch_site.site_name_long}</p> 
                     <p>  <a href="${Launch.links.video_link}"> ►   WATCH LAUNCH</a></p>
                     <br>
                        <p><a href="${Launch.links.article_link}">Read Article</a>
                        <a href="${Launch.links.wikipedia}">View Wikipedia</a></p>
                      
            
                        
                    </div>`;
    });

    const container = document.querySelector(".launch-container");
    container.innerHTML = newHTML;
}


search_input.addEventListener('input', e => {
    fetchSpaceX();
  });
  

  fetchSpaceX();








/* Go to top button */
//Get the button:
mybutton = document.getElementById("toTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



