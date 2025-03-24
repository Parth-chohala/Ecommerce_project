const db = require("../db.js");

const getcart = (req, res) => {
  const query1 = `SELECT 
    cart.customer_id, 
    p.name AS product_name,
    p.price as price, 
    cart.quantity, 
    cart.added_at
FROM cart
JOIN products as p ON cart.product_id = p.product_id
WHERE cart.customer_id = ?;

`;
  console.log(req.params.id);

  db.query(query1, [req.params.id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

const getcarts = (req, res) => {
  const query1 = `SELECT customer_name AS name,cart.customer_id, COUNT(cart.product_id) AS item_count FROM cart JOIN products ON cart.product_id = products.product_id JOIN customers ON cart.customer_id = customers.customer_id GROUP BY name;`;

  db.query(query1, [req.params.id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};
const getcartwithitems = (req, res) => {
  const query1 = `SELECT cart.product_id, products.name AS product_name, cart.quantity, cart.added_at
    FROM cart
    JOIN products ON cart.product_id = products.product_id
    WHERE cart.customer_id = ?;
    `;

  db.query(query1, [req.params.id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

const addcart = (req, res) => {
  const query2 = `INSERT INTO \`cart\` (\`product_id\`, \`customer_id\`, \`quantity\`) 
    VALUES (?, ?, ?);`;

  db.query(
    query2,
    [req.body.product_id, req.body.customer_id, req.body.quantity],
    (err, data) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(data);
      }
    }
  );
};

const updatecart = (req, res) => {
  const query3 = `UPDATE cart 
                        SET  quantity = '?'
                        WHERE cart_id = ?`;

  db.query(
    query3,
    [
      req.body.product_id,
      req.body.customer_id,
      req.body.quantity,
      req.params.id,
    ],
    (err, data) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(data);
      }
    }
  );
};

const deletecart = (req, res) => {
  const query4 = "DELETE FROM cart WHERE cart_id = ?";
  db.query(query4, [req.params.id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

//For front

const get_cart_with_all_details = (req, res) => {
  //pro_id cartidname image price qauntity
  const query4 = "select c.cart_id,c.product_id,p.name,p.product_image_main,p.price,c.quantity from cart as c left join products as p on c.product_id = p.product_id where c.customer_id = ?";
  db.query(query4, [req.params.id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};
const Is_in_cart = (req, res) => {
  const query4 = "select * from cart where customer_id =? and product_id=?";
  db.query(query4, [req.query.customer_id,req.query.product_id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};


module.exports = {
  getcart,
  getcarts,
  addcart,
  updatecart,
  deletecart,
  get_cart_with_all_details,
  Is_in_cart
};
