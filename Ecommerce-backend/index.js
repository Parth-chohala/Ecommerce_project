const express = require('express');
const cors= require('cors');
const app = express();
const path = require("path");

app.use(cors());
// app.use(cors({ origin: 'http://localhost:3000', methods: ['GET', 'POST', 'PUT', 'DELETE'], credentials: true }));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// const department= require('./Models/r_department.js')
const category= require('./Models/r_categories.js')
const product= require('./Models/r_product.js')
const customer= require('./Models/r_customers.js')
const admin= require('./Models/r_admin.js')
const cart= require('./Models/r_cart.js')
const order= require('./Models/r_orders.js')
const order_items = require('./Models/r_order_items.js')
const wishlist = require('./Models/r_wishlist.js')
const reviews = require('./Models/r_review.js')

// app.use('/department', department)
app.use("/images", express.static(path.join(__dirname, "images")));

app.use('/product', product)
app.use('/category', category)
app.use('/customer', customer)
app.use('/admin', admin)
app.use('/cart', cart)
app.use('/orders', order)
app.use('/order_items', order_items)
app.use('/wishlist', wishlist)
app.use('/reviews', reviews)
app.use('/uploads', express.static('uploads'));


app.listen(1009,() => {
    console.log('Server is running on port 1009')
})