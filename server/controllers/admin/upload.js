const uploadImages = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        message: "No images uploaded",
      });
    }

    const images = req.files.map((file) => ({
      url: file.path,
      altText: "",
    }));

    res.status(200).json({
      images,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Image upload failed",
    });
  }
};

module.exports = {
  uploadImages,
};
