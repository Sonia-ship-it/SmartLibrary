import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import getBaseUrL from "../../../util/baseURL"
const baseQuery=fetchBaseQuery({
    baseUrl: `${getBaseUrL()}/api/books`,
    credentials: 'include',
    prepareHeaders: (Headers) => {
        const token=localStorage.getItem('token');
        if(token) {
            Headers.set('Authorization', `Bearer ${token}`)
        }
        return Headers;
    }
})
const booksApi=createApi ({
    reducerPath: 'bookApi',
    baseQuery,
    endpoints: (builder) => ({
        fetchAllBooks: builder.query({ 
        query: ( ) => "/", providesTags: ["Books"] }),
        fetchBookById: builder.query({
            query: (id) => `/${id}`,
            providesTags: (result, error, id) => [{type: "Books", id}]
        }),
        addBook: builder.mutation({
            query: (newBook) => ({
                url: `/create-book`,
                method: "POST",
                body: newBook
            }),
            invalidatesTags: ["Books"]
        }), 
            updateBook: builder.mutation({
            query: ({id, ...rest}) => ({
                url:  `/edit/${id}`,
                method: "POST",
                body: rest,
                headers: {
                    'Content-Type': 'application/json' 
                }
            }),
            invalidatesTags: ["Books"]
        }),
        deleteBook: builder.mutation({
            query: (id) =>({ 
             url: `/${id}`,
             method: "DELETE"   
            }),
            invalidatesTags: ["Books"]
        }),
    })
})
export const {useFetchAllBooksQuery, useFetchBookByIdQuery, useAddBookMutation, useUpdateBookMutation, useDeleteBookMutation} = booksApi;
export default booksApi;