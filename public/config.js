let secondHeader = document.querySelector(".secondHeader");
let apiKey = "383cb14d5884d28703457a69bdecabf6";
let goUp = document.querySelector(".goUp");
let dropNav = document.querySelector(".dropNav");
console.log(dropNav)
window.onscroll = ()=>{
    if(window.scrollY >= 500){
        secondHeader.style.top ="0";
        secondHeader.style.opacity = "1";
        secondHeader.style.display ="flex";
        // console.log(window.scrollY)
        goUp.style.display = "block";
    }else{
        secondHeader.top = "-60px";
        secondHeader.style.opacity = "0";
        secondHeader.style.display ="none";
        goUp.style.display = "none";
    }
};


const btn = document.querySelector(" .location");
let updateImg= document.querySelector(" .updateImg");



 btn.addEventListener("click", getLocation)
 
 function getLocation() {
     if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(showPosition);
     } else {
         alert("Geolocation is not supported by this browser.");
     }
 }
  async function showPosition(position){
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(latitude)
      console.log(longitude)
      // ABBREVIANDO LA API URL
      let request = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
      var res  =  await request.json();
          if(res.weather[0].main == "Clear"){
              updateImg.src = "images/sun.png";
          }else if(res.weather[0].main == "Rain"){
              updateImg.src = "images/heavy-rain.png";
          }else if(res.weather[0].main == "Clouds"){
              updateImg.src = "images/cloudy.png";
          }else if(res.weather[0].main == "Snow"){
              updateImg.src = "images/snow.png";
          }else if(res.weather[0].main == "Thunderstorm"){
              updateImg.src = "images/thunderstorm.png";
          }else if(res.weather[0].main == "Haze"){
              updateImg.src = "images/drizzle.png";
          }
      console.log(res)
      }

      let locationtwo = document.querySelector(".locationtwo");
      locationtwo.addEventListener("click", getLoa_for_Btn_two)
   
       function getLoa_for_Btn_two(){
        if (navigator.geolocation) { navigator.geolocation.getCurrentPosition(show_sec_btn_position);} else 
        {alert("Geolocation is not supported by this browser.");
        }
      } async function show_sec_btn_position(position){
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const updateImg_btn_two = document.querySelector(".updateImg_btn_two");
        console.log(latitude)
        console.log(longitude)
        // ABBREVIANDO LA API URL
        let request = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
        var res  =  await request.json();
            if(res.weather[0].main == "Clear"){
                updateImg_btn_two.src = "images/sun.png";
            }else if(res.weather[0].main == "Rain"){
                updateImg_btn_two.src = "images/heavy-rain.png";
            }else if(res.weather[0].main == "Clouds"){
                updateImg_btn_two.src = "images/cloudy.png";
            }else if(res.weather[0].main == "Snow"){
                updateImg_btn_two.src = "images/snow.png";
            }else if(res.weather[0].main == "Thunderstorm"){
                updateImg_btn_two.src = "images/thunderstorm.png";
            }else if(res.weather[0].main == "Haze"){
                updateImg_btn_two.src = "images/drizzle.png";
            }
        console.log(res)
      }

    function showDrop(){
        dropNav.classList.toggle("show")
    }