const express = require('express');
const path = require('path');
const app = express();

const APP_NAME = process.env.APP_NAME;
const port = process.env.PORT || 3000; // this env will be set in the docker-compose.yml file


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  console.log(`----------- Serving by ${APP_NAME}`);
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
  console.log(`${APP_NAME} is running on port ${port}`);
});