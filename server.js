const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

const FIREBASE_URL = "https://gps-moto-tesis-default-rtdb.firebaseio.com/geocercas";

app.get("/geocercas", async (req, res) => {
  try {
    const response = await axios.get(FIREBASE_URL);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener datos" });
  }
});

app.get("/", (req, res) => {
  res.send("Servidor puente funcionando 🚀");
});

app.listen(PORT, () => {
  console.log("Servidor corriendo");
});
