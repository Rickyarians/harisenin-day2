const {check} = require('express-validator')


exports.store = [
    check('title').notEmpty().withMessage("Judul nggak boleh kosong"),
    check('body').notEmpty().withMessage("Body nggak boleh kosong")
    // check('body')
]