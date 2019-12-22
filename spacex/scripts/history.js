const search_input = document.getElementById('search');

// Fetch history api
function fetchSpaceX(){
fetch("https://api.spacexdata.com/v3/history")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        loopThroughHistory(json);
    });
  }


function loopThroughHistory(HistoryObject) {

    const HistoryArray = HistoryObject;

  
    // sort the events by date     
    HistoryArray.sort(function(a,b){
      return new Date(b.launch_event_date_utc) - new Date(a.launch_event_date_utc);
  })

  //filter everything to lowercase so the search input does not have to be correct 
    var filtered = HistoryArray.filter(function(search){
      return search.title.toLowerCase().includes(search_input.value.toLowerCase())
  })

 


    let newHTML = "";

    filtered.forEach(function(History) {
      var d = new Date(History.event_date_utc);


        newHTML += `<div class="historyinfo">
                        <h1>${History.title}</h1>
                        <h3>Date: ${d.toUTCString()}</h3>                       
                        <p>${History.details}</p>
                        <a href="${History.links.article}">Read Article</a>
                        <a href="${History.links.wikipedia}">View Wikipedia</a>                        
                    </div>`;
    });

    const container = document.querySelector(".history-container");
    container.innerHTML = newHTML;
}



search_input.addEventListener('input', e => {
  fetchSpaceX();
});


fetchSpaceX();











/* Go to top button */



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








