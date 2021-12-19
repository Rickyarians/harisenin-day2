// import model
const {Article} = require('./models')

Article.create({
    title: "Artikel satu",
    body: "Body artikel satu",
    approved: true
}).then(result => {
    console.log(result)
})