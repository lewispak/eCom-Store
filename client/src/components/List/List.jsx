import React from "react";

import Card from "../Card/Card";

import "./list.scss"

const List = () => {

  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Shoes",
      isNew: true,
      oldPrice: 300,
      price: 240
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Glasses",
      isNew: true,
      oldPrice: 200,
      price: 120
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Jacket",
      isNew: false,
      oldPrice: 300,
      price: 200
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Skirt",
      isNew: false,
      oldPrice: 120,
      price: 85
    }
  ]

  return (
    <div className="list">
      {data?.map(item=>(
        <Card item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default List