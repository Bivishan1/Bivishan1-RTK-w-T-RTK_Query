import React from 'react'
import { useUpdateProductMutation } from '../app/service/dummyData'

const UpdateProduct = ({productId}) => {
    const [UpdateProduct, {data, error, isLoading}] = useUpdateProductMutation();

    if (error) { <h1>Error..</h1>}
    if (isLoading) { <h1>Loading...</h1>}

    const handleUpdate = async () => { 
      try {
        const updatedProductData = {
          title:"Updated Title 🙂"

      }

     await UpdateProduct({
      id:productId,
      updatedProduct : updatedProductData
     });


    }
      catch (err) {
        console.error("Error updating product:", err);
      }
    }
    
  return (
    <div>
        <h1>Update Product</h1>
        <button onClick = {handleUpdate} disabled={isLoading}>Update Product</button>
        <h1> {data?.title} </h1>

        
    </div>
  )
}

export default UpdateProduct