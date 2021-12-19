var express = require('express');
var router = express.Router();
const {Article} = require('./../models')
const article = require('./../controller/articleController')

const {store} = require('./../middleware/validation/article')

router.post('/', store ,article.create);
router.get('/', article.getAll)
router.get('/:id', article.getDetail)


module.exports = router;