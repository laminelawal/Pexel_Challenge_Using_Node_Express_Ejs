// // IMPORTING FILES
import express from "express"
import bodyParser from "body-parser"
import axios from "axios"

// // My apiKey
 const apiKey= "PdEFuffsLh2JVYqFYhwGQ17pPL3xUj6KGR3AiNKvPrz0KpwKqa2utVx8";


 const config = {
     headers: { Authorization: apiKey },
   };

// // Creating express app and PORT
 const app = express();
 const port = 3000;
//  app.set('view engine', 'ejs');

// // Using middlewear
// // The static styles in public
 app.use(express.static("public"))
// // app.get("/", (req,res)=>{
// //     res.render("index.ejs")
// // })
app.use(bodyParser.urlencoded({extended : true}))
// // https://api.pexels.com/v1/search?query=nave" FOR SEARCH PICS
// // https://api.pexels.com/v1/curated?page=1&per_page=10
// // let currenPage = 1;
//  app.get("/", async (req,res)=>{
//      try{
//          const response = await axios.get("https://api.pexels.com/v1/curated?page=2&per_page=10", config);
//          const result = response.data;
//          // resArray.push(result.photos.src.original)
//          const randomIndex = Math.floor(Math.random() * result.photos.length);
//          const imageUrl = result.photos[randomIndex].src.original;
//          const userName = result.photos[randomIndex].photographer;
//          const userUrl = result.photos[randomIndex].photographer_url
//          res.render("index.ejs",{
//              imageUrl: imageUrl,
//              userName: userName,
//              userUrl: userUrl
//          })
//      }catch(err){
//          console.error(err)
//      }
//  })





// // USING API TO SHOW THE PIC IN GALLERY
app.get("/", (req,res)=>{
    res.render("index.ejs")
})
app.get("/search", async (req, res) => {
     const { query } = req.query;
    const imageArray = [];
    try {
      const response = await axios.get(
        `https://api.pexels.com/v1/search?query=${query}&per_page=12`,
        config
      );
  
      const result = response.data;
      const images = result.photos.map((photo) => ({
        image: photo.src.original,
      }));
      console.log(images)
    } catch (err) {
      console.error("Error fetching search results:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  



// // Listening server Port
 app.listen(port,()=>{
     console.log("Server is working on PORT = ["+port+"]")
 })


