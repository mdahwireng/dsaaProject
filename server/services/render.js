const { default: axios } = require("axios");
const PORT = process.env.PORT;
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
    axios.get(`http://localhost:${PORT}/api/users`, { params: { id: req.query.id } })
        .then(function(trxnData) {
            trxnData.data['PORT'] = PORT;
            res.render("add_transaction.html", { transactionData: trxnData.data })
        })
        .catch(err => {
            res.send(err.message);
        })
}

exports.updateTransactionRoutes = (req, res) => {
    res.render("add_transaction.html");
}