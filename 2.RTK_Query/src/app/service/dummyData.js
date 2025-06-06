//dummyData or apiData, whatever your data file name is OK.
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "products", // name of api like we did in reducer name,
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }), //fetching api base URL but in real world, we provide like mongoDB or express.js URL
  endpoints: (builder) => ({
    //builder parameter to access the endpoints,
    //we use 'query' method in builder , to get or fetch all the products,, but if we want to,,
    // delete, update or add a product we need to use the 'mutation' method in builder
    //just Reading the data,, later RTK will create custom hook name i.e. useGetAllProductsQuery while exporting
    getAllProducts: builder.query({
      //getAllProducts or anything you can provide name; create this function as a key function.
      query: () => "/products",
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),

    addProduct : builder.mutation({
      query: (newProduct) => ({
        url: '/products/add', // from api docs, to add new product, we should pass this endpoint
        method: 'POST', // also from api docs of dummyjson.com
        headers: {
          'Content-Type': 'application/json'}, // setting content type to json, also from docs
        body: newProduct,
      }),
    }),

    updateProduct : builder.mutation({
      query: ({id, updatedProduct}) => ({
        url: `/products/${id}`, // from api docs, to update product, we should pass this endpoint
        method: 'PUT', // also from api docs of dummyjson.com
        headers: {
          'Content-Type': 'application/json'}, // setting content type to json, also from docs
        body: updatedProduct,
      }),
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`, // from api docs, to delete product, we should pass this endpoint
        method: 'DELETE', // also from api docs of dummyjson.com
      }),
    }),
  }),
});

// it's generating custom hook i.e. useGetAllProductsQuery, itself based on our endpoint name i.e. getAllProducts, and add `use` infront of custom hook, and `Query` at the end by RTK query,,,
// from productsApi as we created above, exporting self generated i.e. RTK query generated, custom hook to use in our components.
// see attached video in TG (channel - react-redux-Huxn) for more understanding this line 24 code
//in nutshell, based on the endpoint name, RTK query generates a custom hook for us to use in our components.
export const { useGetAllProductsQuery, useGetProductByIdQuery, useAddProductMutation, useUpdateProductMutation, useDeleteProductMutation } = productsApi; //grabbing this custom hook from productsApi, so we can use it in our components to fetch data.
