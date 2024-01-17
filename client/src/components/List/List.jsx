import React from "react";
import useFetch from "../../hooks/useFetch.js";
import Card from "../Card/Card";
import "./list.scss"

const List = ({ subCats, maxPrice, sort, catId }) => {

  const{ data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(item=>`&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}`
    // Can add sorting filter by lowest and highest prices but it doesn't work when reloaded. Code below:
    // &sort=price:${sort}`
  );

  return (
    <div className="list">
      {
      // Loading text glitches slider filter. Looks cool but impractical for 1000s of products.
      // loading 
      //   ? "Loading..." 
      //   : 
        data?.map(item=>(
          <Card item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default List