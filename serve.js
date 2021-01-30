const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const name = req.query.name;
    res.sendFile(`${__dirname}/public/index.html`);
    console.log(`/へ${name}がアクセスがありました`);
});

app.get('/images/:file', (req, res) => {
    const file = req.params.file;
    res.sendFile(`${__dirname}/public/images/${file}`);
    console.log(`/images/${file}へアクセスがありました`);
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});
