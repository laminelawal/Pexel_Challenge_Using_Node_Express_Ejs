import express from "express"
import bodyParser from "body-parser"
import axios from "axios"
let temp="50%";let imageArray=[];const apiKey="PdEFuffsLh2JVYqFYhwGQ17pPL3xUj6KGR3AiNKvPrz0KpwKqa2utVx8";const config={headers:{Authorization:apiKey},};const app=express();const port=3000;app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:!0}))
app.get("/",async(req,res)=>{try{const response=await axios.get("https://api.pexels.com/v1/curated?page=10&per_page=15",config);const result=response.data;const randomIndex=Math.floor(Math.random()*result.photos.length);const imageUrl=result.photos[randomIndex].src.landscape;const userName=result.photos[randomIndex].photographer;const userUrl=result.photos[randomIndex].photographer_url;const randomly=Math.random()*result.photo;console.log(randomly)
const randomImages=[];for(let i=0;i<result.photos.length;i++){const randomIndex=Math.floor(Math.random()*result.photos.length);const imageUrl=result.photos[randomIndex].src.landscape;randomImages.push(imageUrl)}
console.log(randomImages)
console.log(randomImages)
res.render("home.ejs",{imageUrl:imageUrl,userName:userName,userUrl:userUrl,images:imageArray,randomImages:randomImages,temp:temp})
console.log(temp)}catch(err){console.error(err)}})
app.get("/search",async(req,res)=>{const{query}=req.query;try{const response=await axios.get(`https://api.pexels.com/v1/search?query=${query}&page=10&per_page=15`,config)
const result=response.data;imageArray=result.photos.map((photo)=>({imageLink:photo.src.large,}));console.log(imageArray)
res.redirect("/")}catch(err){console.error("Error fetching search results:",err);res.status(500).json({error:"Internal server error"})}});app.get("/index",(req,res)=>{res.redirect("/")})
app.get("/about",(req,res)=>{res.render("about.ejs")})
app.get("/services",(req,res)=>{res.render("services.ejs")})
app.listen(port,()=>{console.log("Server is working on PORT = ["+port+"]")})