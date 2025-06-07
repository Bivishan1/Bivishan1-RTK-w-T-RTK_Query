import React from 'react'
import { useAddProductMutation } from '../app/service/dummyData'

const AddNewProduct = () => {
    //for mutation, like add, update, we have to use array destructuring instead of object destructuring
    //like we desctructure in other components, we don't need desctructure here because it itself return an array, which we can see in console.
    // const res = useAddProductMutation();
    // console.log(res, 'add new product response'); //response from the API

    //since, we are getting array response from useAddProductMutation, we used array destructuring and nested object desctructuring to get the RTK query features like error, data , loading etc.
    //nested object destructuring for data, error and isLoading from the useAddProductMutation hook.
    // simply addProduct is from reducer action name in dummyData.js file, and the second object is the response from the API, which we can use to show loading, error or success state.
    const [addProduct, {data, error, isLoading}] = useAddProductMutation(); //destructuring the response
  
    //cause of submitting the form, we need to handle the product, so we can add the product to the API.
    //we can use async await to handle the product, so we can add the product to the API.
    const handleProduct = async() => {
        try {
            const newProductData = {
                id:1,
                title:'New T-shirt',
                description:'This is a new T-shirt amazing one of the best branded',
                price: 100
            }
// await addProduct(newProductData).unwrap(); //unwrap is used to get the response from the API, so we can handle the success or error state.
            await addProduct(newProductData);
            console.log('Product added successfully', data); //data is the response from the API, which we can use to show success message.

        }

        catch(err) {
            console.error('Error adding product',err);
        }
    }


    if (error) return <div>ERROR...!!!!!!</div>
    // if (isLoading) return <h1>Loading...</h1>
  
    return (
    <div>
        <h1>AddNewProduct </h1> 
        {isLoading ? ( <h1>Loading...</h1>): 
        (
            <>
        <h2> {data?.title} </h2>
        <p> {data?.description} </p>
        <p> Price: ${data?.price} </p>
        </>
        )}

        <button onClick={handleProduct} disabled={isLoading}>Add Product</button>
        </div>
  )
}

export default AddNewProduct