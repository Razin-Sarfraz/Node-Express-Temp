const express = require("express");
const path = require("path");
const app = express();

app.use(express.static('./public/'))

app.get('/', (req, res) => {
res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
});

app.get('*', (req, res) => {
res.status(404).send('Resource not found')
});

app.listen(5000, () => {
  console.log("Server listeneing port 5000....");
});

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen
