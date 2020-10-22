
window.onscroll = function() {
    myFunction();
};
function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
let nav= document.getElementById("res-menu");
let close= document.getElementById("close");
let hamburger= document.getElementById("hamburger");
function viewNAV(){
        nav.style.display = "block";
        hamburger.style.display="none";
        close.style.display = "block";
        nav.style.marginTop="70px";
}
function closeNAV(){
    nav.style.display = "none";
    hamburger.style.display="block";
    close.style.display = "none";
}

function active(navActive){
  let removeActive = document.getElementsByClassName("active");
  while (removeActive.length)
    removeActive[0].classList.remove("active");
    navActive.classList.add("active");
}