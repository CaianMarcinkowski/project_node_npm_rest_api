const express = require("express");
const app = express();
const routes = require("./routes/routes");
const bodyParser = require("body-parser");

// configurando bodyparser para enviar requisições pelo body no postman/front
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));

app.listen(3001);

app.use(express.json());
app.use("/", routes);
