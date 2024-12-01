const express = require('express')
const connection = require('./db')
const cors = require("cors")
const app = express()
const port = 3000

app.use(cors())
app.get('/', (req, res) => res.send('Backend Connected.'))
app.get('/db-connection-status', (req, res) => {
    connection.connect(function(err) {
        if (err) {
            res.send('Not connected: error: ', err);
        } else {
            connection.query("show databases;", (err, results, fields) => {
                res.send(results);
            })
        }
    });
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))