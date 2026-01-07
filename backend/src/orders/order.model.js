const mongoose=require('mongoose')
const orderSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        city: {
        required: true,
        type: String,
    },
        country: String,
        state: String,
        zipcode: String,
    },
    phone: {
        type: Number,
        required: true,
    },
    productIds: cartItems.map(item => item?._id),
    totalPrice: totalPrice
})