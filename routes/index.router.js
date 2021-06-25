const express = require("express");
const router = express.Router();
const UserModel = require("./../models/User.model");

router.get("/api", async (req, res) => {
  const data = await UserModel.find();
  res.json(data);
});

router.post("/api", async (req, res) => {
  const { name, age } = req.body;
  const doc = new UserModel({
    name,
    age,
  });
  await doc.save();
  res.end();
});

router.put("/api", async (req, res) => {
  const { id, name, age } = req.body;
  const newData = {};
  if (name) newData.name = name;
  if (age) newData.age = age;
  await UserModel.findByIdAndUpdate(id, newData);
  res.end();
});

router.delete("/api", async (req, res) => {
  const { id } = req.body;
  await UserModel.findByIdAndRemove(id);
  res.end();
});

module.exports = router;
