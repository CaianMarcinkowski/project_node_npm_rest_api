const express = require("express");
const app = express();

app.listen(3001);

app.use(express.json());
