const request = require("request");

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

// configurando bodyparser para enviar requisições pelo body no postman/front
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));

app.listen(3001);

app.get("/allPokemons", (req, res) => {
  const options = {
    method: "GET",
    url: "http://pokeapi.co/api/v2/pokemon/?limit=1154",
    headers: { Accept: "application/json" },
  };

  request(options, function (err, response) {
    if (err) throw new Error(err);
    res.send(response.body);
  });
});

app.get("/infoPokemons", (req, res) => {
  const { num } = req.body;

  const options = {
    method: "GET",
    url: `https://pokeapi.co/api/v2/pokemon/${num}/`,
    headers: { Accept: "application/json" },
  };

  request(options, function (err, response) {
    if (err) throw new Error(err);
    res.send(response.body);
  });
});

app.use(express.json());
