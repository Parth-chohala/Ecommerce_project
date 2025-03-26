// import { useState, useEffect } from "react";
import axios from "axios";
import { User_id_provider } from "./Userinfo";

const User_id = User_id_provider();
const get_Cart_Items = async () => {
  const responce = await axios.get(
    "http://localhost:1009/cart/with_details/" + User_id
  );
  return responce.data;
};
const Add_to_cart = async (product_id, quantity = 1) => {
  const responce = await axios.post("http://localhost:1009/cart", {
    customer_id: User_id,
    product_id: product_id,
    quantity: quantity,
  });
  return responce.data.affectedRows;
};
const Is_in_cart = async (product_id) => {
  const responce = await axios.get("http://localhost:1009/cart/is_in_cart", {
    params: {
      product_id: product_id,
      customer_id: User_id,
    },
  });
  return responce.data.length;
};
const Delete_cart_item = async (cart_id) => {
  const responce = await axios.delete("http://localhost:1009/cart/"+cart_id);
  return responce.data.affectedRows;
};

export { get_Cart_Items, Add_to_cart, Is_in_cart,Delete_cart_item };
