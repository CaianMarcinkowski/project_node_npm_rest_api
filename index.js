const request = require("request");

const express = require("express");
const app = express();

app.listen(3001);

app.get("/", (req, res) => {
  const options = {
    method: "GET",
    url: "http://pokeapi.co/api/v2/pokemon/",
    headers: { Accept: "application/json" },
  };

  request(options, function (err, response) {
    if (err) throw new Error(err);
    res.send(response.body);
  });
});

app.use(express.json());
