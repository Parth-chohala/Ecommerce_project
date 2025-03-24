// INSERT INTO `order_items`(`order_item_id`, `order_id`, `product_id`, `quantity`, `price`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]')

const db = require("../db.js");

const getorder_items = (req, res) => {
  const query1 = "SELECT * FROM order_items where order_id = ?";

  db.query(query1, [req.params.id], (err, data) => {
    if (err) {
      return res.json( err);
    } else {
      return res.json( data);
    }
  });
};
// {
//   "order_item_id": 11,
//   "order_id": 1,
//   "product_id": 1,
//   "quantity": 2,
//   "price": 30
// },
const getorder_items_with_details = (req, res) => {
  const query1 = "SELECT o.order_item_id,o.order_id,p.name,o.product_id,o.quantity,o.price FROM order_items as o left join products as p on o.product_id = p.product_id where order_id = ?";

  db.query(query1, [req.params.id], (err, data) => {
    if (err) {
      return res.json( err);
    } else {
      return res.json( data);
    }
  });
};

const getorder_item = (req, res) => {
  const query1 = "SELECT * FROM order_items where order_item_id = ?";

  db.query(query1, [req.params.id], (err, data) => {
    if (err) {
      return res.json( err);
    } else {
      return res.json(data);
    }
  });
};

const addorder_items = (req, res) => {
  const query2 = `INSERT INTO \`order_items\` (\`order_id\`, \`product_id\`, \`quantity\`, \`price\`) 
  VALUES (?, ?, ?, ?);`;

  db.query(
    query2,
    [req.body.order_id, req.body.product_id, req.body.quantity, req.body.price],
    (err, data) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json( data);
      }
    }
  );
};

const deleteorder_items = (req, res) => {
  const query4 = "DELETE FROM order_items WHERE order_item_id = ?";
  db.query(query4, [req.params.id], (err, data) => {
    if (err) {
      return res.json( err);
    } else {
      return res.json( data);
    }
  });
};

module.exports = {
  getorder_items,
  getorder_item,
  getorder_items_with_details,
  addorder_items,
  deleteorder_items,
};
