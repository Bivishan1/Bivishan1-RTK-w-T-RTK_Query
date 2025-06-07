import React from 'react'
import { useGetProductByIdQuery } from '../app/service/dummyData';

const SpecificProduct = () => {
    const {data, isError, isLoading} = useGetProductByIdQuery(2); // Assuming you want to fetch product with id 1
    console.log(data,'specific product of 2');

    if (isError) return <div>Error fetching products</div>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
        <h2>Specific Product</h2>
        <h3>Name : {data?.title}</h3>
        <p> Description : {data?.description}</p>
        <p>Price: ${data?.price}</p>
    </div>
  )
}

export default SpecificProduct