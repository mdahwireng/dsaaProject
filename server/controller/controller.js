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
        name: req.body.name,
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
            res.send({ message: "Data Saved" })
        })
        .catch(err => {
            res.send({ message: err.message || "some error occured while creating the create-data-operation" });
        })
}

// retrieve and return all users or a single user
exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id;
        Userdb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: `Could not find transaction with id number ${id}.` })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: `Error retrieving transaction with id number ${id}` })
            })
    } else {
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error occured while retrieving user" })
            })
    }
}

// update user by user id
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({ message: "Data to update cannot be empty!" });
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false, new: true })
        .then(data => {
            if (!data) {
                res.status(404)
                    .send({ message: `Cannot update transaction with ${id}. May be transaction not found` })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500)
                .send({ message: "Error update transaction information" })
        })
}


// delete user by user id in request
exports.delete = (req, res) => {
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404)
                    .send({ message: `Cannot delete transaction with id ${id}. Maybe id is wrong` })
            } else {
                res.send({ message: "Transaction was deleted successfully!" })
            }
        })
        .catch(err => {
            res.status(500)
                .send({ message: `Could not delete transaction with id number ${id}` });
        });
}