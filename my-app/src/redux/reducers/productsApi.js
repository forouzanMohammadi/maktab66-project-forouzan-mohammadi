import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const productsAPi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3002'}),
    endpoints:(builder) =>({
        getAllProducts: builder.query({
            query:()=>"products",
        }),
    }),
});

export const { useGetAllProductsQuery} = productsAPi