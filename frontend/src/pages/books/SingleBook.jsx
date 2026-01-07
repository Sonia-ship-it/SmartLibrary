import React from 'react'
import { useFetchBookByIdQuery } from '../../redux/features/cart/booksApi'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getImgUrl } from '../../util/getImgUrl';
import { FiShoppingCart } from 'react-icons/fi';
export const SingleBook = () => {
    const {id} = useParams();
    const {data: book, isLoading, error} = useFetchBookByIdQuery(id)
        const dispatch = useDispatch() 
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }
    if(isLoading) {
        return <div className="p-5">Loading...</div>;
    }
    if(error) {
        return <div className="p-5 text-red-500">Failed to load book.</div>;
    }
    if(!book) {
        return <div className="p-5">Book not found.</div>;
    }
    console.log(book);
    return(
        <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
        <div className='max-w-lg shadow-md p-5'>
            <h1 className='text-2xl font-bold mb-6'>{book.title}</h1>
            <div className=''>
            <div>
                <img src={`${getImgUrl(book.coverImage)}`} alt={book.title} className='w-1/2 mb-8' />
            </div>
            <div className='mb-5'>
                <p className='text-gray-700 text-lg mb-4'><strong>Author: </strong> {book.author || 'Admin'}</p>
                <p className='text-gray-700 text-lg mb-4'>
                    <strong>Published: </strong>{new Date(book.createdAt).toLocaleDateString()}
                </p>
                <p className='text-gray-700 mb-4 capitalize text-lg'>
                    <strong>Category: </strong>{book.category}
                </p>
                <p className='text-gray-700 text-lg'>
                    <strong>Description: </strong>{book.description}
                </p>
            </div>
            <div className='flex justify-center items-center'>
            <button onClick={() => handleAddToCart(book)} className='btn-primary px-6 space-x-1 flex items-center gap-1'>
                <FiShoppingCart className='' />
                <span>Add to Cart</span>
            </button></div>
            </div>
        </div>
        </div>
    );
}
