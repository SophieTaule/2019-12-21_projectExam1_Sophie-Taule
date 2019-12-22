const search_input = document.getElementById('search');

// Gets information about the upcoming launches
function fetchSpaceX(){
fetch("https://api.spacexdata.com/v3/launches/upcoming")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        loopThroughSchedule(json);
    });
}

function loopThroughSchedule(ScheduleObject) {

    const ScheduleArray = ScheduleObject;

     // sort the events by date, so the next upcoming launch will be on top of the list
    ScheduleArray.sort(function(a,b){
        return new Date(a.launch_date_utc) - new Date(b.launch_date_utc);
    })

    

    var filtered = ScheduleArray.filter(function(search){
        return search.mission_name.toLowerCase().includes(search_input.value.toLowerCase())
    })
    

    // the variable holding the HTML string must be declared before the loop
    let newHTML = "";

   

    filtered.forEach(function(Schedule) {

  

        var d = new Date(Schedule.launch_date_utc);

        newHTML += `<div class="schedule-info">
                        <h2> ${Schedule.mission_name}</h2>
                        <p><strong>Date:</strong> ${d.toUTCString()}</p>                       
                    
                        <p><strong>Rocket:</strong> ${Schedule.rocket.rocket_name}</p>

                        <p><strong>Launchsite:</strong> ${Schedule.launch_site.site_name_long}</p>

                    
                      
                        
         
                        
                    </div>`;
    });

    const container = document.querySelector(".schedule");
    container.innerHTML = newHTML;
}

search_input.addEventListener('input', e => {
    fetchSpaceX();
  });
  
  
  fetchSpaceX();









/* to top button */


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






