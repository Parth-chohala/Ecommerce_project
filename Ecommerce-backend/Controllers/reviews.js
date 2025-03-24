const db = require('../db.js');

const getreviews = (req, res) => {
    const query1 = 'SELECT * FROM reviews where product_id = ?';

    db.query(query1,[req.params.id] ,(err, data) => {
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
}
const get_reviews_with_details = (req, res) => {
    const query1 = 'SELECT r.review_id,r.product_id,c.customer_name,r.rating,r.comment,r.review_date from reviews as r left JOIN customers  as c on r.customer_id= c.customer_id WHERE product_id = ?';

    db.query(query1,[req.params.id] ,(err, data) => {
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
}
const getallreviews = (req, res) => {
    const query1 = 'SELECT r.product_id,p.name,AVG(r.rating) as rating,count(r.product_id) as review_count FROM reviews as r LEFT JOIN products as p on r.product_id = p.product_id GROUP BY r.product_id;';

    db.query(query1,[req.params.id] ,(err, data) => {
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
}
const updatereview = (req, res) => {
    const query3 = `UPDATE \`reviews\` SET \`rating\` = ?, \`comment\` = ? WHERE review_id = ?;`;

    db.query(query3,[req.body.rating,req.body.comment,req.params.id], (err, data) => {
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
}

const addreview = (req, res) => {
    const query2 = `INSERT INTO \`reviews\` (\`product_id\`, \`customer_id\`, \`rating\`, \`comment\`) 
    VALUES (?, ?, ?, ?);`;


    db.query(query2,[req.body.product_id, req.body.customer_id, req.body.rating, req.body.comment], (err, data) => {        
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
}

const deletereview = (req, res) => {
    const query4 = 'DELETE FROM reviews WHERE review_id = ?';
    db.query(query4,[req.params.id], (err, data) => {
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
}
const get_reviews_with_all_avgs = (req, res) => {
    const query1 = 'SELECT COUNT(rating) AS review_count,AVG(rating) AS avg_rating,SUM(rating = 5) AS fivestar_count,SUM(rating = 4) AS fourstar_count,SUM(rating = 3) AS threestar_count,SUM(rating = 2) AS twostar_count,SUM(rating = 1) AS onestar_count FROM reviews WHERE product_id = ? GROUP BY product_id;';
    // console.log("ID",req.params.id);
    db.query(query1,[req.params.id] ,(err, data) => {
        if(err){
            // console.log("Error",err);
            return res.json(err)
        }else{
            // console.log("Data",data);

            return res.json(data)
        }
    })
}

module.exports = {
    getreviews,
    getallreviews,
    get_reviews_with_details,
    get_reviews_with_all_avgs,
    updatereview,
    addreview,
    deletereview
}