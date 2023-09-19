// // IMPORTING FILES
import express from "express"
import bodyParser from "body-parser"
import axios from "axios"
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

// // Creating express app and PORT
 const app = express();
 const port = 3000;
 app.set('view engine', 'ejs');
 app.set("views", __dirname + "/views");
var userIsAuthorised = false;

// // Using middlewear
// // The static styles in public
 app.use(express.static("public"))
// // app.get("/", (req,res)=>{
// //     res.render("index.ejs")
// // })
app.use(bodyParser.urlencoded({extended : true}))
// // https://api.pexels.com/v1/search?query=nave" FOR SEARCH PICS
// // https://api.pexels.com/v1/curated?page=1&per_page=10
app.get("/", (req,res)=>{
    res.render("login.ejs")
  })  
  app.post("/check", (req, res) => {
    const password = req.body.password;
  
    if (password === "ILoveProgramming") {
      // Password is correct, set userIsAuthorised to true
      userIsAuthorised = true;
      res.redirect("/"); // Redirect to the homepage or another page
    } else {
      // Password is incorrect, render the login page again with an error message
      res.render("login.ejs", { error: "Incorrect password. Please try again." });
    }
  });
  

  app.listen(port,()=>{
    console.log("Server is working on PORT = ["+port+"]")
})
