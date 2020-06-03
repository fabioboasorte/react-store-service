const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");

const app = express();
const router = express.Router();

app.use(cors());

router.get("/autor", (req, res) => {
  res.json({
    "message": "success",
    "data": [
      { "id": 15, "nome": "luís", "livro": "história do js", "preco": 111 },
      { "id": 14, "nome": "paulo professor", "livro": "react-js", "preco": 122 },
      { "id": 13, "nome": "joão", "livro": "alemão", "preco": 132 },
      { "id": 12, "nome": "fabio", "livro": "react", "preco": 12 }
    ]
  })
});

router.get("/autor/livro", (req, res) => {
  res.json({
    "message": "success",
    "data": [
      { "livro": "react", "id": 12 },
      { "livro": "alemão", "id": 13 },
      { "livro": "react-js", "id": 14 },
      { "livro": "história do js", "id": 15 }
    ]
  })
});

router.get("/autor/nome", (req, res) => {
  res.json({
    "message": "success",
    "data": [
      { "nome": "fabio", "id": 12 },
      { "nome": "joão", "id": 13 },
      { "nome": "paulo professor", "id": 14 },
      { "nome": "luís", "id": 15  }
    ]
  })
});

router.get("/", (req, res) => {
  res.json({
    "message": "Online"
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
