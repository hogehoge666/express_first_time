const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;
const file = 'counter.txt';
const ZERO = '0';


app.get('/count', (req, res) => {
    fs.readFile(file, (err, data) => {
        const count = Number(data) + 1;

        if (err) {
            res.send(`エラーが発生しました ${err}`);
            return (false);
        }

        fs.writeFile(file, String(count), (err) => {
            if (err) {
                res.send(`エラーが発生しました ${err}`);
                return (false);
            }

            res.send(`あなたは${count}人目のお客様です`);
        });
    });
});

app.get('/reset', (req, res) => {
    fs.writeFile(file, ZERO, (err) => {
        if (err) {
            res.send(`エラーが発生しました ${err}`);
            return(false);
        }
        res.send('カウンタをリセットしました');        
    });
});

app.get('/api', (req, res) => {
    const data = {
        'message': 'Hello World',
        'date': '2021-01-31'
    };
    res.json(data);
});

app.use(express.urlencoded({
    extended: true
}));

app.post('/', (req, res) => {
    const name = req.body.name;
    console.log(`/へ${name}がPOSTしました`)
});

app.get('/', (req, res) => {
    const name = req.query.name;
    res.sendFile(`${__dirname}/public/index.html`);
    console.log(`/へ${name}がGETしました`);
});

app.get('/images/:file', (req, res) => {
    const file = req.params.file;
    res.sendFile(`${__dirname}/public/images/${file}`);
    console.log(`/images/${file}へアクセスがありました`);
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});
