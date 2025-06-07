import React from "react";
import { useGetAllProductsQuery } from "../app/service/dummyData";

const Products = () => {
  const res = useGetAllProductsQuery();
  console.log(res , 'undistructured products list'); //response from the API

  const {data, isError, isLoading} = res; //destructuring the response

  data && console.log(data, 'data from products'); //data from the API
  if (isError) return <div>Error fetching products</div>;
  if (isLoading) return <h1>Loading...</h1>;


  
  return (
  <div>
    <ul>
        {data?.products.map((p)=> (
        <li key={p.id}>{p.title}</li>
    ))}
    </ul>
    
  </div>
  )
};

export default Products;
