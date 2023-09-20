let secondHeader = document.querySelector(".secondHeader");
let apiKey = "383cb14d5884d28703457a69bdecabf6";

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


let btn = document.getElementById("getlocation");

btn.addEventListener("click", getLocation)

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

let updateImg= document.getElementById("updateImg");
async function showPosition(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // ABBREVIANDO LA API URL
    let request = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
    var res  = await request.json();


        if(res.weather[0].main == "Clear"){
            updateImg.src = "/images/sun.png";
        }else if(res.weather[0].main == "Rain"){
            updateImg.src = "/images/heavy-rain.png";
        }else if(res.weather[0].main == "Clouds"){
            updateImg.src = "/images/png";
        }else if(res.weather[0].main == "Snow"){
            updateImg.src = "/images/snow.png";
        }else if(res.weather[0].main == "Thunderstorm"){
            updateImg.src = "/images/thunderstorm.png";
        }else if(res.weather[0].main == "Haze"){
            updateImg.src = "/images/drizzle.png";
        }
    }