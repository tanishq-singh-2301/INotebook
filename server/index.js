const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors({
    origin: "*"
}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json('application/json'));
app.use('/', require('./src/router/routes'))

const PORT = process.env.PORT || 8080

app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`) });