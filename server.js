'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('./lib'));

app.listen(PORT, () => console.log('running on', PORT));
