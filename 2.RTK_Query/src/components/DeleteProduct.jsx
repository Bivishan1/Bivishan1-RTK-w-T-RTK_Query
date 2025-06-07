import React from 'react'
import { useDeleteProductMutation } from '../app/service/dummyData'

const DeleteProduct = ({productId}) => {
    const [DeleteProduct, {data, error, isLoading}] = useDeleteProductMutation();

    if (error) <h1>Error</h1>
    if (isLoading) return <h1>Loading...</h1>

    const handleDelete = async () => {
        try {
           await DeleteProduct(productId)
        } catch (err) {
            console.error("Failed to delete product:", err);

        }
    }
    
  return (
    <div>
        <h1>Delete Product</h1>
    <h1>{data?.title? `${data.title} deleted successfully`: '' }</h1>
        <button onClick={handleDelete}>Delete Product</button>
    </div>
  )
}

export default DeleteProduct