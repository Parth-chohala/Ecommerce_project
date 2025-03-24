const { json } = require("express");
const db = require("../db.js");

const getproducts = (req, res) => {
  const query1 = "SELECT * FROM products";
  const query2 =
    "SELECT p.product_id,p.name,p.description,p.stock_quantity,p.price ,c.name as category_name FROM products as p  left join category as c on p.category_id = c.category_id";

  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

const productswithdetails = (req, res) => {
  const query2 =
    "SELECT p.product_id,p.name,p.description,p.stock_quantity,p.price ,p.product_status,p.product_image_main,c.name as category_name FROM products as p  left join category as c on p.category_id = c.category_id ORDER BY p.name ASC";
  // console.log(query2);

  db.query(query2, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

const getproduct = (req, res) => {
  const query1 = "SELECT * FROM products where product_id = ?";
  // const query1 = "SELECT p.product_id,p.name,p.description,p.stock_quantity,p.price,p. ,c.name as category_name FROM products as p left join category as c on p.category_id = c.category_id where p.product_id = ?";

  db.query(query1, [req.params.id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};
const getproductbycategory = (req, res) => {
  const query1 = "SELECT * FROM products where category_id = ? and product_status = 1";

  db.query(query1, [req.params.id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};
const addproduct = (req, res) => {
  const query2 = "INSERT INTO `products`(`name`, `description`, `price`, `product_image_main`,`product_images`,`stock_quantity`, `category_id`, `product_status`) VALUES (?,?,?,?,?,?,?,?)";
  // console.log("File info " , req.files)
  const productImageMain = req.files['product_image_main'] 
    ? req.files['product_image_main'][0].filename 
    : null;

    const productImages = req.files['product_images']
    ? req.files['product_images'].map(file => file.filename)
    : [];

  db.query(
    query2,
    [
      req.body.name,
      req.body.description,
      req.body.price,
      productImageMain,
      JSON.stringify(productImages),
      req.body.stock_quantity,
      req.body.category_id,
      req.body.product_status,
    ],
    // console.log("Add function called..", req.body),
    (err, data) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(data);
      }
    }
  );
};

const updateproduct = (req, res) => {
  const q =
    "UPDATE `products` SET `name`= ?,`description`=?,`price`=?,`stock_quantity`= ?,`category_id`=?,`product_status`=? ,`product_image_main`= ? ,`product_images`= ? WHERE product_id = ?";
  // let img = req.file ? req.file.filename : req.body.product_image_main;
  // let images = req.file ? req.
  // console.log("File info " , req.files)

  const productImageMain = req.files['product_image_main'] 
    ? req.files['product_image_main'][0].filename 
    : req.body.product_image_main;

    const productImages = req.files['product_images']
    ? req.files['product_images'].map(file => file.filename)
    : req.body.product_images;

    // productImages =  JSON.stringify(productImages);
    // console.log("Image_main ",productImageMain)
    // console.log("Images_multiple ",productImages)
    


  db.query(
    q,
    [
      req.body.name,
      req.body.description,
      req.body.price,
      req.body.stock_quantity,
      req.body.category_id,
      req.body.product_status,
      productImageMain,
      JSON.stringify(productImages),
      req.params.id,
    ],
    (err, data) => {
      if (err) {
        // console.log("err=>", err);
        return res.json(err);
      } else {
        // console.log("updated",data);
        return res.json(data);
      }
    }
  );
};

const deleteproduct = (req, res) => {
  const query4 = "DELETE FROM products WHERE product_id = ? ";
  db.query(query4, [req.params.id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

//Functions for front_end

const products_with_details_for_front = (req, res) => {
  const query2 =
    "SELECT p.product_id,p.name,p.description,p.stock_quantity,p.price ,p.product_status,p.product_image_main,p.product_images,c.name as category_name FROM products as p  left join category as c on p.category_id = c.category_id where product_status = 1 ORDER BY p.name ASC";
  // console.log(query2);

  db.query(query2, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};
// const products_for_front = (req, res) => {
//   const query2 =
//     "SELECT p.product_id,p.name,p.description,p.stock_quantity,p.price ,p.product_status,p.product_image_main,p.product_images,c.name as category_name FROM products as p  left join category as c on p.category_id = c.category_id where product_status = 1 ORDER BY p.name ASC";
//   // console.log(query2);

//   db.query(query2, (err, data) => {
//     if (err) {
//       return res.json(err);
//     } else {
//       return res.json(data);
//     }
//   });
// };
const products_by_name = (req, res) => {
  const sql = "SELECT * FROM products WHERE name LIKE ?";
  db.query(sql, [req.query.name], (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(result);
  });
}

module.exports = {
  getproducts,
  getproduct,
  productswithdetails,
  products_with_details_for_front,
  getproductbycategory,
  addproduct,
  updateproduct,
  deleteproduct,
  products_by_name
};
