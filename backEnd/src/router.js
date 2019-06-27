const express = require("express");
const router = express.Router();
const axios = require("axios");
const API_PATH = "https://api.github.com";

router.get("/api", async (req, res, next) => {
  try {
    res.status(200).send("Seja Bem-Vindo.");
  } catch (error) {
    res.status(404).send(error , "Não foi possível estabelecer conexão com o servidor.");
  }
})

router.get("/api/users/:username/repos", async (req, res, next) => {
  try {
    username = req.params.username;
    const searchUrl = `${API_PATH}/users/${username}/repos`;

    const result = await axios.get(searchUrl);
    res.status(200).json(result.data);
    next();
  } catch (error) {
    res.status(404).json({ message: error });
    next();
  }
});

router.get("/api/users/:username/details", async (req, res, next) => {
  try {
    username = req.params.username;
    const searchUrl = `${API_PATH}/users/${username}`;

    const result = await axios.get(searchUrl);
    res.json(result.data);
    next();
  } catch (error) {
    res.status(404).json({ message: error });
    next();
  }
});

router.get("/api/users", async (req, res, next) => {
  try {
    const number = req.query.since;
    console.log(number);
    const searchUrl = `${API_PATH}/users?since=${4}&per_page=5&rel=next`;
    console.log("searchUrl", searchUrl);
    const result = await axios.get(searchUrl);
    
    res.json(result.data);
    next();
  } catch (error) {
    res.status(404).json({ message: error });
    next();
  }
  console.log("query: " , req.query.searchUrl);
});

module.exports = router