const db = require("../db.js");

const getadmin = (req, res) => {
  const query1 = "SELECT * FROM admin where admin_id = ?";

  db.query(query1, [req.params.id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};
const getadmins = (req, res) => {
  const query1 = "SELECT * FROM admin";

  db.query(query1, [req.params.id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

const addadmin = (req, res) => {
  const query2 = `INSERT INTO \`admin\` (\`admin_name\`, \`admin_email\`, \`admin_password\`, \`admin_phone\`,\`admin_status\`, \`role\`) VALUES (?, ?, ?, ?, ?,?);`;
  db.query(
    query2,
    [
      req.body.admin_name,
      req.body.admin_email,
      req.body.admin_password,
      req.body.admin_phone,
      req.body.admin_status,
      req.body.role,
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

const updateadmin = (req, res) => {
  const query3 = `UPDATE admin 
                        SET admin_name = ?, admin_email = ?, admin_password = ?, admin_phone = ?, role = ? ,admin_status = ?
                        WHERE admin_id = ?`;
  db.query(
    query3,
    [
      req.body.admin_name,
      req.body.admin_email,
      req.body.admin_password,
      req.body.admin_phone,
      req.body.role,
      req.body.admin_status,
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

const deleteadmin = (req, res) => {
  const query4 = "DELETE FROM admin WHERE admin_id = ?";
  db.query(query4, [req.params.id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

module.exports = {
  getadmin,
  getadmins,
  addadmin,
  updateadmin,
  deleteadmin,
};
