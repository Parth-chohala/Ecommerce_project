const db = require('../db.js');
// const { get } = require('../Models/r_review.js');

const getwishlist = (req, res) => {
    const query1 = 'SELECT * FROM wishlist where customer_id = ?';

    db.query(query1,[req.params.id] ,(err, data) => {
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
}
// "wishlist_id": 1,
// "customer_id": 1,
// "product_id": 1,
// "added_at": "2025-01-31T18:30:00.000Z"
// },
const get_wishlist_with_name = (req, res) => {

    const query1 = 'SELECT c.customer_id,c.customer_name, COUNT(w.wishlist_id) AS wishlist_count FROM wishlist AS w LEFT JOIN customers AS c ON c.customer_id = w.customer_id GROUP BY c.customer_id, c.customer_name;';

    db.query(query1,[req.params.id] ,(err, data) => {
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
}
const get_wishlist_details = (req, res) => {

    const query1 = 'SELECT w.wishlist_id,w.customer_id,c.customer_name,w.product_id, p.name,w.added_at FROM wishlist as w left join products as p on w.product_id = p.product_id left join customers as c on w.customer_id = c.customer_id where w.customer_id = ?';

    db.query(query1,[req.params.id] ,(err, data) => {
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
}

const getwishlists = (req, res) => {
    const query1 = 'SELECT * FROM wishlist';

    db.query(query1,[req.params.id] ,(err, data) => {
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
}

const addwishlist = (req, res) => {
    const query2 = `INSERT INTO \`wishlist\` (\`product_id\`, \`customer_id\`) 
    VALUES (?, ?);`;

    db.query(query2,[req.body.product_id, req.body.customer_id], (err, data) => {    
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
}

//Functions For front 

const deletewishlist = (req, res) => {
    const query4 = 'DELETE FROM wishlist WHERE wishlist_id = ?';
    db.query(query4,[req.params.id], (err, data) => {
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
}

const Get_wishlist_with_product_details = (req,res) =>{
    const query4 = 'select w.wishlist_id,w.product_id,p.name,p.price,p.product_image_main from wishlist as w LEFT JOIN products as p on w.product_id = p.product_id where customer_id = ?';
   
   
    db.query(query4,[req.params.id], (err, data) => {
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
}
const Is_in_wishlist = (req, res) => {
    const query4 = 'SELECT * FROM wishlist WHERE customer_id = ? AND product_id = ?';
    
   
    db.query(query4, [req.query.customer_id, req.query.product_id], (err, data) => {
        console.log("Is in wishlist called");

        if (err) {
            console.error("Error in fetching data:", err);
            return res.status(500).json({ error: "Database error" });
        }
        // if(data.length>0)console.log("data :",true)
        //     else console.log("data :",false)

        return res.json({
            flag: data.length > 0 // true if product is in wishlist, false otherwise
        });
    });
};


module.exports = {
    getwishlist,
    get_wishlist_with_name,
    get_wishlist_details,
    getwishlists,
    addwishlist,
    deletewishlist,
    Get_wishlist_with_product_details,
    Is_in_wishlist
}