import React from 'react';

const Bookmarks = ({bookmarks, time}) => {

    console.log(bookmarks);
    return (
        <div className='w-1/3 my-16 ml-8'>
            <div>
                <h3 className='text-lg text-center text-[#6047EC] bg-[#6047EC1A] mt-1 px-4 py-4 rounded-lg' >Spent time on read : {time} min</h3>
            </div>
            <div className='my-6 px-5 py-5 rounded-md bg-[#1111110D]'>
                <h1 className='text-xl font-bold'>Bookmarked Blogs : {bookmarks.length}</h1>
                {
                  bookmarks.map((bookmark, idx) => <h1 key={idx} className='my-3 bg-white p-2 font-semibold rounded-md'>{bookmark.title}</h1>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;