const db = require("../db.js");

const getcategorys = (req, res) => {
  const query1 = "SELECT * FROM category";

  db.query(query1, [req.params.id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

const getcategory = (req, res) => {
  const query1 = "SELECT * FROM category where category_id = ?";
  db.query(query1, [req.params.id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

const addcategory = (req, res) => {
  const query2 =
    "INSERT INTO `category`(`name`, `description`, `category_image`, `category_status`) VALUES (?,?,?,?)";

  db.query(
    query2,
    [req.body.name, req.body.description, req.file.filename],
    (err, data) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(data);
      }
    }
  );
};

const updatecategory = (req, res) => {
  const query3 = "UPDATE `category` SET `name`= ? ,`description`=?,`category_image`= ?,`category_status`= ? WHERE category_id = ?";

  const img = req.file ? req.file.filename : req.body.category_image;

  console.log([
    req.body.name,
    req.body.description,
    img,
    req.body.category_status,
    req.params.id,
  ]);
  db.query(
    query3,
    [
      req.body.name,
      req.body.description,
      img,  
      req.body.category_status,
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

const deletecategory = (req, res) => {
  const query4 = "DELETE FROM categorys WHERE category_id = ?";
  db.query(query4, [req.params.id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};
//For Front_end
const get_categorys_for_front = (req, res) => {
  const query1 = "SELECT * FROM category where category_status = 1";

  db.query(query1, [req.params.id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};
module.exports = {
  getcategorys,
  getcategory,
  get_categorys_for_front,
  addcategory,
  updatecategory,
  deletecategory,
};
