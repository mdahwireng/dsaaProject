const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require("./server/database/connection");
const controller = require("./server/controller/controller");
const app = express();
dotenv.config({ path: 'config.env' });

const PORT = process.env.PORT || 8080;

//routes
app.get('/master', (req, res) => {
    res.render('master_view.html')
});

app.get('/add_transaction', (req, res) => {
    res.render('add_transaction.html')
});

app.get('/', (req, res) => {
    res.render("index.html")
});

app.get('/services', (req, res) => {
    res.render("services.html")
});

app.get('/gallery', (req, res) => {
    res.render("gallery.html")
});

app.get('/message', (req, res) => {
    res.render("message.html")
});

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${(PORT)}`)
});

// log request
app.use(morgan('tiny'));

// mongodb connection
connectDB();


app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// set view engine
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', path.resolve(__dirname, "views"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));
app.use('/node_modules', express.static(path.resolve(__dirname, "node_modules")));


// API

app.post('/api/users', controller.create);