import axios from "axios";

const User_id = 1;
const getwishlist = async () => {
  // console.log("Get wishlist called ..")
  const responce = await axios.get(
    `http://localhost:1009/wishlist/product_details/${User_id}`
  );
  if (responce.data.length > 0) {
    return responce.data;
  } else {
    return responce;
  }
};

const Addtowishlist = async (product_id) => {
  // console.log("Get wishlist called ..")
  const responce = await axios.post(`http://localhost:1009/wishlist`, {
    product_id: product_id,
    customer_id: User_id,
  });
  if (responce.data) {
    return true;
  } else {
    console.log("Error in adding to wishlist : ", responce);
    return false;
  }
};
const Is_in_wishlist = async (product_id) => {
  const responce = await axios.get(
    `http://localhost:1009/wishlist/is_in_wishlist`,
    {
      params: {
        product_id: product_id,
        customer_id: User_id,
      },
    }
  );
  return responce.data.flag;
};
const Delete_product_from_wishlist = async (wishlist_id) => {
  const responce = await axios.delete(
    `http://localhost:1009/wishlist/` + wishlist_id
  );
  return responce.data.affectedRows;
};

export {
  getwishlist,
  Addtowishlist,
  Is_in_wishlist,
  Delete_product_from_wishlist,
};
