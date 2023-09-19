let secondHeader = document.querySelector(".secondHeader");
console.log(secondHeader)
window.onscroll = ()=>{
    if(window.scrollY >= 500){
        secondHeader.style.top ="0";
        secondHeader.style.opacity = "1";
        // console.log(window.scrollY)
    }else{
        secondHeader.top = "-60px";
        secondHeader.style.opacity = "0";
    }
};
// window.addEventListener('scroll', () => {
//     // Check the scroll position
//     if (window.scrollY > 200) { // Adjust the scroll threshold as needed
//         // Execute your scroll action here
//         console.log('Scrolled beyond 200 pixels');
//     }
// });
