const db = require("../db.js");

const getorders = (req, res) => {
  const query1 = "SELECT * FROM orders";

  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
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
  const query1 =
    "SELECT o.order_id,o.customer_id,c.customer_name,o.order_date,o.total_amount,o.status,o.shipping_address FROM orders as o left join customers as c on o.customer_id = c.customer_id";

  db.query(query1, (err, data) => {
    if (err) {
      // console.log("eror" ,err)
      return res.json(err);
    } else {
      // console.log("data", data)
      return res.json(data);
    }
  });
};
const get_specific_order_with_details = (req, res) => {
  const query1 =
    "SELECT o.order_id,o.customer_id,c.customer_name,o.order_date,o.total_amount,o.status,o.shipping_address FROM orders as o left join customers as c on o.customer_id = c.customer_id where o.order_id = ?";

  db.query(query1, [req.params.id], (err, data) => {
    if (err) {
      // console.log("eror" ,err)
      return res.json(err);
    } else {
      // console.log("data", data)
      return res.json(data);
    }
  });
};
const getorder = (req, res) => {
  const query1 = "SELECT * FROM orders where order_id = ?";

  db.query(query1, [req.params.id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

const addOrder = (req, res) => {
  console.log("Add order function called");
  const { customer_id, shipping_address, total_amount, cart_items } = req.body;
  const status = "Delivered";
  // Step 1: Insert into orders table
  const insertOrderQuery = `
    INSERT INTO \`orders\` (\`customer_id\`, \`total_amount\`,\`status\`, \`shipping_address\`)
    VALUES (?, ?, ?,?);`;

  db.query(
    insertOrderQuery,
    [customer_id, total_amount, status, shipping_address],
    (err, orderResult) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Failed to create order", error: err });
      }
      console.log("Order result : ", orderResult);

      const order_id = orderResult.insertId;

      // Step 2: Prepare values for order_items insertion
      const orderItemsValues = cart_items.map((item) => [
        order_id,
        item.product_id,
        item.quantity,
        item.price,
      ]);

      const insertItemsQuery = `
  INSERT INTO \`order_items\` (\`order_id\`, \`product_id\`, \`quantity\`, \`price\`) 
  VALUES ?;
`;

      db.query(insertItemsQuery, [orderItemsValues], (err, itemsResult) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Failed to insert order items", error: err });
        }

        console.log("Items result : ", itemsResult);
        // Step 3: Delete ordered products from cart
        const cartIds = cart_items.map((item) => item.cart_id);
        const deleteCartQuery = `
        DELETE FROM \`cart\` WHERE \`cart_id\` IN (?)`;

        db.query(deleteCartQuery, [cartIds], (err, deleteResult) => {
          if (err) {
            return res.status(500).json({
              message: "Order placed but failed to remove items from cart",
              error: err,
            });
          }
          console.log("Delete result : ", deleteResult);
          // Success
          return res.status(200).json({
            success: true,
            message: "Order placed successfully",
            order_id: order_id,
          });
        });
      });
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
        return res.json(data);
      }
    }
  );
};

const deleteorder = (req, res) => {
  const query4 = "DELETE FROM orders WHERE order_id = ?";
  db.query(query4, [req.params.id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

module.exports = {
  getorder,
  getorderswithdetails,
  get_specific_order_with_details,
  getorders,
  addOrder,
  updateorder,
  deleteorder,
};
