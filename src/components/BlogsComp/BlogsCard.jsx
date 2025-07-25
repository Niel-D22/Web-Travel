import React from "react";
import { Link } from "react-router-dom";

const BlogsCard = ({ img, titel, description,author,date}) => {
  return (
    <Link to={`/blog/${titel}`}
    onClick={()=>{
        window.scrollTo(0,0);
    }} 
    state={{img, titel, description,author,date}}>
      


      <div className="p-4  shadow-lg transiton-all duration-500
      hover:shadow-xl cursor-pointer rounded-[5px] ">
        <div className="overflow-hidden rounded-t-[2px]">
            <img src={img} alt=""   className="mx-auto h-[220px]
          w-full object-cover transition duration-700 hover:skew-x-2
          hover:scale-110"/>
        </div>
        
        <div className="flex justify-between pt-2">
                    <p>{date}</p>
                    <p>by {author}</p>
        </div>
        <div className="space-y-2 py-3">
            <h1 className="line-clamp-1 font-bold">{titel}</h1>
            <p className="line-clamp-2">{description}</p>
        </div>
              
      </div>
    </Link>
  );
};

export default BlogsCard;
