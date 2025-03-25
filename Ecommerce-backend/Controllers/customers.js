const db = require("../db.js");

const getcustomers = (req, res) => {
  const query1 = "SELECT * FROM customers";

  db.query(query1, [req.params.id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};
const getcustomer = (req, res) => {
  const query1 = "SELECT * FROM customers where customer_id = ?";

  db.query(query1, [req.params.id], (err, data) => {
    if (err) {
      return res.json( err);
    } else {
      return res.json( data);
    }
  });
};

const addcustomer = (req, res) => {
  const query2 = "INSERT INTO customers(customer_name, customer_email, customer_password, customer_phone,customer_status, shipping_address) VALUES (?,?,?,?,?,?)";
  db.query(
    query2,
    [
      req.body.customer_name,
      req.body.customer_email,
      req.body.customer_password,
      req.body.customer_phone,
      1,
      req.body.shipping_address
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

const updatecustomer = (req, res) => {
  const query3 = "UPDATE customers SET customer_name = ?, customer_email = ?, customer_password = ?, customer_phone = ?, shipping_address = ?,customer_status = ? WHERE customer_id = ?;";


  db.query(
    query3,
    [
      req.body.customer_name,
      req.body.customer_email,
      req.body.customer_password,
      req.body.customer_phone,
      req.body.shipping_address,
      req.body.customer_status,
      req.params.id,
    ],
    (err, data) => {
      if (err) {
        return res.json( err);
      } else {
        return res.json(data);
      }
    }
  );
};

const deletecustomer = (req, res) => {
  const query4 = "DELETE FROM customers WHERE customer_id = ?";
  db.query(query4, [req.params.id], (err, data) => {
    if (err) {
      return res.json( err);
    } else {
      return res.json( data);
    }
  });
};

module.exports = {
    getcustomers,
    getcustomer,
    addcustomer,
    updatecustomer,
    deletecustomer,
}