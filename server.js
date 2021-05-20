const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require("./server/database/connection");
const controller = require("./server/controller/controller");
const app = express();
dotenv.config({ path: 'config.env' });

PORT = process.env.PORT || 8080;

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

// load routes
app.use('/', require("./server/routes/router"));