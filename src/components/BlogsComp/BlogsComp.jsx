import React from 'react'
import BlogsCard from "./BlogsCard"
import image1  from '../../assets/place2/1.png'
import image2  from '../../assets/place2/2.png'
import image3  from '../../assets/place2/3.png'

const BlogsData =[
  {
id:1,    
img:image1,
titel:"10 Best Places to Visit Because of Their Breathtaking Natural Beauty",
description:"The world is filled with awe-inspiring natural wonders — from towering mountains and crystal-clear lakes to lush forests and cascading waterfalls. In this list, we explore ten of the most visually stunning destinations that showcase nature at its finest. Whether you're an adventurer, a photographer, or simply someone who enjoys serene landscapes, these places are sure to leave you breathless.",
author:"Liam Carter",
date:"July, 2025",


},
  {
id:2,    
img:image2,
titel:"10 Best Places to Visit for Cultural and Historical Experiences",
description:"Traveling isn't just about the views — it's also about connecting with the soul of a place. These ten destinations are rich in culture, history, and tradition. From ancient temples and historic cities to unique local customs and timeless architecture, each place on this list offers a journey through the past and a deeper understanding of human civilization.",
author:"Maya Collins",
date:"Augst, 2025",
},
  {
id:3,    
img:image3,
titel:"10 Best Island Destinations for Relaxation and Adventure",
description:"Dreaming of turquoise waters, soft white sands, and unforgettable ocean adventures? These ten island destinations are perfect for those seeking both tranquility and thrill. Whether you want to relax under palm trees, snorkel vibrant coral reefs, or hike tropical trails, these islands offer a slice of paradise and an experience of a lifetime.",
author:"Ethan Brooks ",
date:"Dec, 2025",
},
  
]


const BlogsComp = () => {
  return (
    <div className=''>
        <div data-aos="fade-up" className='space-y-10 w-full mx-auto px-4 sm:px-8 xl:px-20 2xl:px-24 
         sm:py-0 lg:py-0 h-[500px]   '>
            <h1 className=' border-l-8 border-[#0287a8]/50 
          pl-2 text-3xl font-bold'
            >Our Latest Blog</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
           gap-4 rounded-t-[2px] '>
                {
                    BlogsData.map((item,index)=>(
                         
          <BlogsCard key={index}
          {...item}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default BlogsComp