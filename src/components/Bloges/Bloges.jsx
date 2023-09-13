import { useEffect, useState } from "react";
import Blog from "../Bloge/Blog";

const Bloges = ({handleClicked, markHandleClick}) => {
    const [bolges, setBloges] = useState([])

    useEffect(()=>{
        fetch('bloges.json')
        .then(res => res.json())
        .then(data => setBloges(data))
    },[])


    return (
        <div className="w-2/3 my-10">
            {
                bolges.map(blog => <Blog key={blog.id} blog={blog} handleClicked={handleClicked} markHandleClick={markHandleClick}></Blog>)
            }
        </div>
    );
};

export default Bloges;