const multer = require("multer");
const express = require("express");
const router = express.Router();
const { protect } = require("../../Middlewares/authMiddleware");
const {
  getBoots,
  postBoot,
  putBoot,
  deleteBoot,
} = require("../../Controllers/bootsController/bootsController");

// defining storage
const fileStorageEngine = multer.diskStorage({
  destination: "../../images",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const upload = multer({
  storage: fileStorageEngine,
});

// Routes of Retro Boots' API

router.get("/boots", getBoots);

router.post("/boot", upload.single("image"), postBoot);

router.route("/boot/:id").put(protect, putBoot).delete(protect, deleteBoot);

module.exports = router;
