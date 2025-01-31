const Image = require("../models/product");

 async function AdminGetimage (req, res)  {
    try {
      const images = await Image.find();
  
      
  
  
  
      
  
      res.json(images);
    } catch (error) {
      console.error("Error fetching images:", error);
      res.status(500).send({ message: "Error fetching images", error });
    }
  };

module.exports=AdminGetimage  

