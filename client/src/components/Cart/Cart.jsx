import React from "react";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import "./cart.scss";

const Cart = () => {

  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Shoes",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto eum nihil id, fuga veniam voluptatem vel velit dicta? Veniam aut excepturi veritatis at! Necessitatibus praesentium itaque consequatur distinctio rem earum.",
      isNew: true,
      oldPrice: 300,
      price: 240
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Glasses",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto eum nihil id, fuga veniam voluptatem vel velit dicta? Veniam aut excepturi veritatis at! Necessitatibus praesentium itaque consequatur distinctio rem earum.",
      isNew: true,
      oldPrice: 200,
      price: 120
    }
  ]

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map(item=>(
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0,100)}</p>
            <div className="price">
              1 x {item.price}
            </div>
          </div>
          <DeleteOutlinedIcon className="delete"/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL: </span>
        <span>$164.87</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
      
    </div>
  )
}

export default Cart