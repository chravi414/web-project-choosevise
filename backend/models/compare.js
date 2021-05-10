const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: String,
    brand: String,
    name: String,
    price: String,
    rating: String,
    image: String,
    link: String,
}, {
    timestamps: true
})

const comparisonSchema = new mongoose.Schema({
    userId: String,
    products: [productSchema],
    created: {
        type: Date, default: Date.now
    }
})

const product = mongoose.model('product', productSchema);
const compare = mongoose.model('compare', comparisonSchema)
module.exports = {
    product: product,
    compare: compare
};