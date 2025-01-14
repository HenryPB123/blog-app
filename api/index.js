const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");

const app = express();
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");
const categoriesRouter = require("./routes/categories");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

dotenv.config();

app.use(cors());
app.use(express.json()); //Permite enviar archivos JSON
app.use("/images", express.static(path.join(__dirname, "/images")));

// Crear carpeta "images" si no existe
if (!fs.existsSync("./images")) {
  fs.mkdirSync("./images");
}

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));

//!Para Cargar Imágenes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name || file.originalname);
  },
});
const upload = multer({ storage: storage });
//!Route Cargar Imágenes
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);
app.use("/api/categories", categoriesRouter);

app.listen("5000", () => {
  console.log("Backend runnig in port 5000");
});
