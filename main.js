
var tabLinks = document.getElementsByClassName("tab-links")
var tabContents = document.getElementsByClassName("tab-contents")

function openTab(tabName){
    for( let tabLink of tabLinks){
    tabLink.classList.remove("active-link");
     }

    for(let tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");

}

let sideMenu = document.getElementById("sidemenu");
function openmenu(){
    sideMenu.style.right = "0";
} 
function closemenu(){
    sideMenu.style.right = "-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbw440wPqy8SrtgcMg4tPRm_YzrQ8-gyul124yaRrOpCF4XJ0A2DYDc9lLQeGiRaccZ9yw/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})