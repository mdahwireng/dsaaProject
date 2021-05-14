var Userdb = require("../model/model")

// create and save new user
exports.create = (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({ message: "content cannot be empty!" });
        return;
    }

    // new user
    const user = new Userdb({
        first_name: req.body.first_name,
        last_name: req.body.name,
        email: req.body.email,
        tel: req.body.tel,
        hair_cut: req.body.hair_cut,
        hair_styling: req.body.hair_styling,
        hair_coloring: req.body.hair_coloring,
        hair_locking: req.body.hair_locking,
        facial_care: req.body.facial_care,
        full_massage: req.body.full_massage,
        date: req.body.date,
        time: req.body.time,
        status: req.body.status,
        comment: req.body.comment
    })

    // save user in the database
    user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "some error occured while creating the create-data-operation" });
        })
}