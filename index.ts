import express from "express";

const app = express();
const port = 8080;

app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});