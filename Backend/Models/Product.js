const {Schema, model}= require('../connection')
const productSchema = new  Schema({
    name: String,
    category: String,
    price: Number,
    description: String
});
module.exports = model('product', productSchema)