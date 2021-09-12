const express = require('express');
const app = express();

const app_routes = require("./routes/routes")

app.use(express.json())
app.use(app_routes)

let port = 5050 || process.env.PORT

app.listen(port, () => console.log('App is Running...'))