const {Article, Comments} = require('./../models')
const {validationResult} = require('express-validator')

module.exports = {
    create: (req, res) => {
        
        const errorFormatter = ({location, msg, param, value, nestedErrors}) => {
            return {
                "key": param,
                "message": msg
            }
        }
        const result = validationResult(req).formatWith(errorFormatter)

        if(!result.isEmpty()){
            return res.status(400).json({
                status: "error",
                code: 400,
                errors: result.array()
            })
        }

        Article.create(req.body).then(result => {
            res.status(201).json({
                message: "Berhasil Tambah Data Artikel",
                data: result,
                status: "succes",
                code: 201
            })
        })
    },
    getAll: (req, res) => {
        Article.findAll({
            attributes: ['id', 'title', 'body']
            }).then(result => {
            res.status(200).json({
              message: "Berhasil get data articles", 
              status: 'success',
              code: 200,
              data: result
            })
        })
    },
    getDetail: (req, res) => {
        Article.findOne({
            include : [{model: Comments, as: 'comments'}],
            where: {id: req.params.id}
        }).then(result => {
            res.status(200).json({
                message: "Berhasil get data articles", 
                status: 'success',
                code: 200,
                data: result
              })
        })
    }
}