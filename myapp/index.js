console.log(`Current dir: ${__dirname}`);

const express = require('express');
const app = express();
const port = process.env.SERVICE_PORT;


app.get('/', (req, res) => {
    res.status(200).send(`<font color="green"><h1>Server name. ${process.env.SERVICE_NAME}</h1></font><br/><font color="blue"><h1>Server port: ${port}</h1></font>`);
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})