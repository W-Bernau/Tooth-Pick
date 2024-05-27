const express = require('express')
const path = require('path')
const mysql = require('mysql')
const dotenv = require('dotenv')

dotenv.config({ path:'.env'})
const app = express();
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'toothpick-login'
})

db.connect((error) => {
    if(error) {
        console.log(error);
    } else {
        console.log("MYSQL connected");
    }
})

app.get('/', (req, res) => {
    res.sendFile('/Users/willbernau/Documents/Tooth-Pick/frontend/index.html')
    app.use(express.static('/Users/willbernau/Documents/Tooth-Pick/frontend'));
})

app.get('/signUp.html', (req, res) => {
    res.sendFile('/Users/willbernau/Documents/Tooth-Pick/frontend/signUp.html')
})

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
})