let secondHeader = document.querySelector(".secondHeader");
let apiKey = "383cb14d5884d28703457a69bdecabf6";
let goUp = document.querySelector(".goUp");
let dropNav = document.querySelector(".dropNav");
console.log(dropNav)
window.onscroll = ()=>{
    if(window.scrollY >= 500){
        secondHeader.style.top ="0";
        secondHeader.style.opacity = "1";
        // console.log(window.scrollY)
        goUp.style.display = "block";
    }else{
        secondHeader.top = "-60px";
        secondHeader.style.opacity = "0";
        goUp.style.display = "none";
    }
};



   
    function showDrop(){
        dropNav.classList.toggle("show")
    }