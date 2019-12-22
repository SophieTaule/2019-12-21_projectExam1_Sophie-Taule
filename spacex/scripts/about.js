
//Fetching info 
fetch("https://api.spacexdata.com/v3/info")
.then(function(response) {
    return response.json();
})
.then(function(json) {
    loopThroughAbout(json);
});


function loopThroughAbout(AboutObject) {


let newHTML = "";

    newHTML += `<div class="aboutinfo">
                    <h1>${AboutObject.name}</h1>
                    <p>${AboutObject.summary}</p>  
                </div>
                <div class="aboutinfo">
                    <h3>Founder</h3>
                    <p>${AboutObject.founder}</p>  
                </div>
                <div class="aboutinfo">
                    <h3>Employees</h3>
                    <p>${AboutObject.employees}</p>  
                </div>
               
                <div class="aboutinfo">
                <h3>Founded</h3>
                <p>${AboutObject.founded}</p>  
           
            </div>
                <div class="aboutinfo">
                <h3>Headquarters</h3>
              <p>${AboutObject.headquarters.city},${AboutObject.headquarters.state}</p>
    
            </div>`;

const container = document.querySelector(".about-container");
container.innerHTML = newHTML;  
}









/* information boxes hide/visable */
document.getElementById('moreInfoTrigger1').addEventListener('click', function() {
    var x = document.getElementById("moreInfoContent1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }, false);
  document.getElementById('moreInfoTrigger2').addEventListener('click', function() {
    var x = document.getElementById("moreInfoContent2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }, false); 



