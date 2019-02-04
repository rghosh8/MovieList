const express = require('express');
const path = require('path');
const app = express();
let port = 3000;
app.use(express.static(path.join(__dirname, '../client/dist/')));


console.log(`Hello from the server running at port ${port}`);
app.listen(port, () => `server listening at ${port}`);