const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3030;
const path = require('path');

const app = express();
app.use(express.static(`${__dirname}/../client/public`));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../client/public/index.html`));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});