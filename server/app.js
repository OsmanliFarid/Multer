import express, { request } from "express";
import multer from "multer";
import cors from "cors";

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());
app.use("/images", express.static("images"));

let users = [];

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("avatar"), (req, res) => {
  const newUser = {
    id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    phoneNumber: req.body.phoneNumber,
    avatar: req.file?.filename || "",
  };
  users.push(newUser);
  res.send(newUser);
});

app.get("/upload", (req, res) => {
  res.send(users);
});
app.get("/upload/:id", (req, res) => {
  const id = req.params.id;

  const data = users.find((item) => item.id === id);
  res.send(data);
});
app.delete("/upload/:id", (req, res) => {
  const id = req.params.id;

  users = users.filter((item) => item.id !== id);
  res.send(users);
});
app.listen(port, () => {
  console.log("isleyir port", port);
});
