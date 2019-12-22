



//Get infrmation about the next upcoming Launch
fetch("https://api.spacexdata.com/v3/launches/next")
.then(function(response) {
    return response.json();
})
.then(function(json) {
    loopThroughNextLaunch(json);
});


function loopThroughNextLaunch(NextLaunchObject) {


let newHTML = "";
// Make the Date look more representative 
var d = new Date(NextLaunchObject.launch_date_utc);

    newHTML += `<div class="showcase">
                     <div class="nextinfo">   
                        <h4>Next Launch: ${NextLaunchObject.mission_name}  </h4> 
                        
                         <h1>${NextLaunchObject.rocket.rocket_name}</h1>
                         <h2 id="coutdown"></h2> 
                         <h4>Date: ${d.toUTCString()}</h4>
                           <p><a href="${NextLaunchObject.links.video_link}"> ►  WATCH</a></p>  

                     </div>
                     
                     
                </div>`;

 Coutdown(d.getTime());
const container = document.querySelector(".top-container");
container.innerHTML = newHTML;  
}



// Created countdownd for the next Launch 
function Coutdown(countDownDate){
    // Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="coutdown"
    document.getElementById("coutdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  
    // If the count down is finished, it will show up blank
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("coutdown").innerHTML = "";
    }
  }, 1000);
}













//Get information on the Last Launch
fetch("https://api.spacexdata.com/v3/launches/latest")
.then(function(response) {
    return response.json();
})
.then(function(json) {
    loopThroughLatestLaunch(json);
});


function loopThroughLatestLaunch(LatestLaunchObject) {

// the variable holding the HTML string must be declared before the loop
let newHTML = "";
var d = new Date(LatestLaunchObject.launch_date_utc);

    newHTML += `<div class="replayinfo">
                    <h2>Latest Launch:</h2>
                    <h1> ${LatestLaunchObject.rocket.rocket_name}</h1>
                    <img src="${LatestLaunchObject.links.flickr_images}"width="420" height="315">
                    
                    <p><strong>${d.toUTCString()}</strong></p>  
                    <p>${LatestLaunchObject.details}</p>
                     <p><a href="${LatestLaunchObject.links.video_link}"> ►  Watch Replay</a></p>    
            </div>`;

const container = document.querySelector(".container");
container.innerHTML = newHTML;  
}














//fetch information about Dragon  from api
fetch("https://api.spacexdata.com/v3/dragons/dragon1")
.then(function(response) {
    return response.json();
})
.then(function(json) {
    loopThroughDragon(json);
});


function loopThroughDragon(DragonObject) {


let newHTML = "";

    newHTML += `<div class="replayinfo">
                          
                    <h2>About:</h2>
                    <h1> ${DragonObject.name}</h1>
                    
      
                    <img src="${DragonObject.flickr_images}" >
                    
                    <h3>Date: ${DragonObject.first_flight}</h3>     
                     <p>${DragonObject.description}</p>
                     <p><a href="${DragonObject.wikipedia}" width:420px; heigt:auto>Read more</a></p>
                              
                         
            </div>`;

const container = document.querySelector(".next-launch-container");
container.innerHTML = newHTML;  
}







//fetch information about a Mission from api
/*fetch("https://api.spacexdata.com/v3/missions/F3364BF")
.then(function(response) {
    return response.json();
})
.then(function(json) {
    loopThroughMission(json);
});


function loopThroughMission(MissionObject) {


let newHTML = "";

    newHTML += `<div class="replayinfo">
                          
                    <h1> About Mission: ${MissionObject.mission_name}</h1>
                     <p><strong>Details:</strong></p>
                     <p>${MissionObject.description}</p>
                     <p><a href="${MissionObject.website}">Read more</a></p>
                              
                         
                 </div>`;

const container = document.querySelector(".mission-container");
container.innerHTML = newHTML;  
} */









//fetch information about upcoming launches to create Launch schedule  for home page

fetch("https://api.spacexdata.com/v3/launches/upcoming")
  .then(function(response) {
    return response.json();
})
.then(function(json) {
    loopThroughHomeSchedule(json);
});


function loopThroughHomeSchedule(HomeScheduleObject) {

const HomeScheduleArray = HomeScheduleObject;


 // sort the events by date, so the next upcoming launch will be on top of the list
HomeScheduleArray.sort(function(a,b){
  return new Date(a.launch_date_local) - new Date(b.launch_date_local);
})





let newHTML = "";

HomeScheduleArray.forEach(function(HomeSchedule) {
    var d = new Date(HomeSchedule.launch_date_utc);

    newHTML += `<div class="homeschedule-info">
                    <h3>${HomeSchedule.mission_name}</h3>
                    <p><strong>Date: </strong>${d.toUTCString()}</p>                       
                    <p><strong>Rocket:</strong> ${HomeSchedule.rocket.rocket_name}</p>

                    
                </div>`;
});

const container = document.querySelector(".home-schedule");
container.innerHTML = newHTML;
}

















