import React from 'react'
import { useAddProductMutation } from '../app/service/dummyData'

const AddNewProduct = () => {
    //like we desctructure in other components, we don't need desctructure here because it itself return an array, which we can see in console.
    // const res = useAddProductMutation();
    // console.log(res, 'add new product response'); //response from the API

    //since, we are getting array response from useAddProductMutation, we used array destructuring and nested object desctructuring to get the RTK query features like error, data , loading etc.
    //nested object destructuring for data, error and isLoading from the useAddProductMutation hook.
    // simply addProduct is from reducer action name in dummyData.js file, and the second object is the response from the API, which we can use to show loading, error or success state.
    const [addProduct, {data, error, isLoading}] = useAddProductMutation(); //destructuring the response
  
    if (error) return <div>ERROR</div>
    if (isLoading) return <h1>Loading...</h1>
  
    return (
    <div>
        <h1>AddNewProduct </h1> 
        <button onClick={handleProduct} disabled={isLoading}>Add Product</button>
        </div>
  )
}

export default AddNewProduct