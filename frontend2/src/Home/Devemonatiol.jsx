import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import { Link } from 'react-router-dom';

const Devemonatiol = () => {


    const { blog } = useAuth();
    const DevemonatiolBlog = blog?.filter(blog => blog.category === 'Devotional');
    return (

        <div className='container mx-auto my-12 p-4'>
            <h1 className='text-2xl font-bold mb-6'>Devotional</h1>
            <p className='text-center mb-8'>The concept of gods varies wildey across diffrent cultures, religions, and belief system</p>


            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4'>

                {DevemonatiolBlog && DevemonatiolBlog.length > 0 ? (
                    DevemonatiolBlog.map((blog, index) => {

                        return <Link to={`/blog/${blog._id}`} key={index._id}
                            className='relative rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300'>

                            <img src={blog?.blogImage.url} alt={blog.title} className='w-full h-48 object-cover' />

                            <div className='absolute inset-0 bg-black opacity-30'></div>
                            <div className='absolute bottom-4 left-4 text-white'>
                                <h2 className='text-lg font-semibold'>{blog?.title}</h2>
                                <p className='text-sm'>{blog?.category}</p>
                            </div>
                        </Link>
                    })
                ) : (
                    <div className='flex h-screen items-center justify-center '>Loading...</div>
                )}
            </div>
        </div>
    );
}

export default Devemonatiol
