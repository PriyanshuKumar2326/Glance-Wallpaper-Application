const fs = require("fs");
const path = require("path");

async function viewer(req, res) {
  try {
    const category = req.params.category;

    const folderPath = path.join(__dirname, "../../wallpapers", category);

    if (!fs.existsSync(folderPath)) {
      return res.status(404).json({ message: "Category not found" });
    }

    const images = fs.readdirSync(folderPath);

    if (images.length === 0) {
      return res.status(404).json({ message: "No wallpapers found" });
    }

    const randomImage = images[Math.floor(Math.random() * images.length)];

    return res.status(200).json({
      image: `/wallpapers/${category}/${randomImage}`
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error fetching wallpaper" });
  }
}

module.exports = { viewer };