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
    res.render("add_transaction.html");
}

exports.updateTransactionRoutes = (req, res) => {
    res.render("add_transaction.html");
}