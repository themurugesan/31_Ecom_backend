async function AdminDelete (req, res)  {
    const { id } = req.params;
    await Image.findByIdAndDelete(id);
    res.json({ message: "Image deleted" });
  };

module.exports=AdminDelete  