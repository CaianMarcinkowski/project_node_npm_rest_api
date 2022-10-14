const request = require("request");

const base_url = "http://pokeapi.co/api/v2";

const allPokemons = (req, res) => {
  const options = {
    method: "GET",
    url: `${base_url}/pokemon/`,
    headers: { Accept: "application/json" },
  };

  request(options, function (err, response) {
    if (err) throw new Error(err);
    res.send(response.body);
  });
};

const infoPokemons = (req, res) => {
  const { num } = req.body;

  const options = {
    method: "GET",
    url: `${base_url}/pokemon/${num}/`,
    headers: { Accept: "application/json" },
  };

  request(options, function (err, response) {
    if (err) throw new Error(err);
    res.send(response.body);
  });
};

const allMoves = (req, res) => {
  const options = {
    method: "GET",
    url: `${base_url}/move/`,
    headers: { Accept: "application/json" },
  };

  request(options, (err, response) => {
    if (err) throw new Error(err);
    res.send(response.body);
  });
};

module.exports = {
  allPokemons,
  allMoves,
  infoPokemons,
};
