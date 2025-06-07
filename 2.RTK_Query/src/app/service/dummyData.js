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
  }),
});

// it's generating custom hook i.e. useGetAllProductsQuery, itself based on our endpoint name i.e. getAllProducts, and add `use` infront of custom hook, and `Query` at the end by RTK query,,,
// from productsApi as we created above, exporting self generated i.e. RTK query generated, custom hook to use in our components.
// see attached video in TG (channel - react-redux-Huxn) for more understanding this line 24 code
//in nutshell, based on the endpoint name, RTK query generates a custom hook for us to use in our components.
export const { useGetAllProductsQuery } = productsApi; //grabbing this custom hook from productsApi, so we can use it in our components to fetch data.
