const { default: axios } = require("axios");
exports.homeRoutes = (req, res) => {
    res.render("index.html");
}

exports.servicesRoutes = (req, res) => {
    res.render("services.html");
}

exports.galleryRoutes = (req, res) => {
    res.render("gallery.html");
}

exports.messageRoutes = (req, res) => {
    res.render("message.html");
}

exports.masterRoutes = (req, res) => {
    res.render("master_view.html");
}

exports.addTransactionRoutes = (req, res) => {
    axios.get('https://alphamalegrooming.herokuapp.com/api/users', { params: { id: req.query.id } })
        .then(function(trxnData) {
            res.render("add_transaction.html", { transactionData: trxnData.data })
        })
        .catch(err => {
            res.send(err.message);
        })
}

exports.updateTransactionRoutes = (req, res) => {
    res.render("add_transaction.html");
}