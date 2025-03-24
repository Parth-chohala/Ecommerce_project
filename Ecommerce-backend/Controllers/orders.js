const db = require("../db.js");

const getorders = (req, res) => {
  const query1 = "SELECT * FROM orders";

  db.query(query1, (err, data) => {
    if (err) {
      return res.json( err);
    } else {
      return res.json( data);
    }
  });
};
// "order_id": 1,
// "customer_id": 2,
// "order_date": "2025-01-31T18:30:00.000Z",
// "total_amount": 1220.5,
// "status": "pending",
// "shipping_address": "123 Main St, City, Country"
// },
const getorderswithdetails = (req, res) => {
  const query1 = "SELECT o.order_id,o.customer_id,c.customer_name,o.order_date,o.total_amount,o.status,o.shipping_address FROM orders as o left join customers as c on o.customer_id = c.customer_id";

  db.query(query1, (err, data) => {
    if (err) {
      // console.log("eror" ,err)
      return res.json( err);
    } else {
      // console.log("data", data)
      return res.json( data);

    }
  });
};
const get_specific_order_with_details = (req, res) => {
  const query1 = "SELECT o.order_id,o.customer_id,c.customer_name,o.order_date,o.total_amount,o.status,o.shipping_address FROM orders as o left join customers as c on o.customer_id = c.customer_id where o.order_id = ?";

  db.query(query1,[req.params.id], (err, data) => {
    if (err) {
      // console.log("eror" ,err)
      return res.json( err);
    } else {
      // console.log("data", data)
      return res.json( data);

    }
  });
};
const getorder = (req, res) => {
  const query1 = "SELECT * FROM orders where order_id = ?";
  
  db.query(query1, [req.params.id], (err, data) => {
    if (err) {
      return res.json( err);
    } else {
      return res.json(data);
    }
  });
}


const addorder = (req, res) => {
  const query2 = `INSERT INTO \`orders\` (\`customer_id\`, \`total_amount\`, \`status\`, \`shipping_address\`) 
  VALUES (?, ?, ?, ?);`;

  db.query(
    query2,
    [
      req.body.customer_id,
      req.body.total_amount,
      req.body.status,
      req.body.shipping_address,
    ],
    (err, data) => {
      if (err) {
        return res.json( err);
      } else {
        return res.json( data);
      }
    }
  );
};

const updateorder = (req, res) => {
  const query3 = `UPDATE orders 
  SET customer_id = ?, total_amount = ?, status = ?, shipping_address = ?
  WHERE order_id = ?;`;

    db.query(
        query3,
        [
        req.body.customer_id,
        req.body.total_amount,
        req.body.status,
        req.body.shipping_address,
        req.params.id,
        ],
        (err, data) => {
        if (err) {
            return res.json(err);
        } else {
            return res.json( data);
        }
        }
    );
    };

const deleteorder = (req, res) => {
  const query4 = "DELETE FROM orders WHERE order_id = ?";
  db.query(query4, [req.params.id], (err, data) => {
    if (err) {
      return res.json( err);
    } else {
      return res.json( data);
    }
  });
};

module.exports = {
  getorder,
  getorderswithdetails,
  get_specific_order_with_details,
  getorders,
  addorder,
  updateorder,
  deleteorder,
};
