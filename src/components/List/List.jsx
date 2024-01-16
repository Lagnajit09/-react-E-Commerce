import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../hooks/useFetch";

function List({ subCats, maxPrice, sort, catId }) {
  let subCatsString = subCats.map(
    (item) => `&[filters][sub_categories][id][$eq]=${item}`
  );
  let subCategory = subCatsString.join("");

  // console.log(subCategory);

  const { data, error, loading } = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${catId}&${subCategory}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  // console.log(
  //   `/products?populate=*&[filters][categories][id][$eq]=${catId}${subCats.map(
  //     (item) => `&[filters][sub_categories][id][$eq]=${item}`
  //   )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  // );
  // console.log(subCats);
  // console.log(data);

  return (
    <div className="list">
      {loading
        ? "Loading..."
        : data?.map((item) => <Card key={item.id} item={item} />)}
    </div>
  );
}

export default List;
