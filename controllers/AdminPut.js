const express=require("express");
const app = express();
const multer = require("multer");
const router=express.Router();

const Adminput = async(req,res)=>{
    console.log("enter admin page");
    
    app.use("/uploads", express.static("uploads"));
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, "uploads/");
      },
      filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
      },
    });
    
    const upload = multer({ storage });
    
    // Routes
    router.post("/upload", upload.single("image"), async (req, res) => {
      const { title, description, amount } = req.body; // Get description and amount from body
      console.log(title,description,"dsfgasfdgf =>>>>>>>>>>>>>>>>>>>>>>");
      
      const image = new Image({
        title,
        description, // Save description
        amount, // Save amount
        image: req.file.path,
      });
      await image.save();
      res.status(201).json(image);
    });
    

}
module.exports = Adminput