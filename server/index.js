const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(cors())
const PORT = 8081

app.get('/status', (req,res) => {
    res.send({
        message:'All fine'
    })
    console.log('Прошел запрос')
})

var connection = mysql.createConnection({
    connectionLimit : 100,
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'blog'
  });

connection.connect();
    
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('База данных подключена');
});

app.get('/posts', (req,res) => {
    connection.query('SELECT * FROM `post`', function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    })
})



/* connection.end(() => {
    console.log('База данных сброшена')
});
 */

app.listen(PORT, () => console.log("СЕРВЕР ПОДНЯТ НА: localhost:" + PORT));
