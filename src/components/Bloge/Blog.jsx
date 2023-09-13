import { FcBookmark } from 'react-icons/fc';
const Blog = ({ blog, handleClicked, markHandleClick }) => {
    const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog
    return (
        <div className="my-7">
            <img src={cover} alt="" />
            <div className='flex justify-between'>
                <div className="flex items-center my-3">
                    <img className="w-[50px] mr-3 rounded-lg" src={author_img} alt="" />
                    <div>
                        <h4 className="text-xl font-bold">{author}</h4>
                        <p className="text-[#11111199] font-semibold">{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <p className="text-[#11111199] font-semibold mr-2">{reading_time} min read</p>
                    <button onClick={() => handleClicked(blog)}><FcBookmark size={'1.5rem'}></FcBookmark></button>
                </div>
            </div>
            <h1 className="text-4xl font-bold">{title}</h1>
            <div className="flex">
                {
                    hashtags.map((hashtag, idx) => <button key={idx} className="mr-2 my-1">#{hashtag}</button>)
                }
            </div>
            <button onClick={() => markHandleClick(blog)} className="text-blue-500 underline">Mark as read</button>
        </div>
    );
};

export default Blog;