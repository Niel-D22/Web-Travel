import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const TestimonialData =[
     {
    id: 1,
    name: "Andi Pratama",
    text: "Liburan bersama TravelGo sungguh luar biasa! Pelayanannya ramah dan semua destinasi sangat memuaskan.",
    img: "https://i.pinimg.com/736x/58/d3/4f/58d34f784b6dc49c67725fb7bad7d3b4.jpg"
  },
  {
    id: 2,
    name: "Emily Carter",
    text: "Amazing trip! Everything was well-organized and the staff was super friendly. Would travel again!",
    img: "https://i.pinimg.com/1200x/f1/60/0e/f1600e40ce6d7eccc0fa763959290d4c.jpg"
  },
  {
    id: 3,
    name: "Rizky Hidayat",
    text: "Harga terjangkau dengan pengalaman mewah. Cocok buat liburan keluarga!",
    img: "https://i.pinimg.com/736x/b2/d9/e7/b2d9e74cfd6f82e3f7f8e0d5b81d456b.jpg"
  },
  {
    id: 4,
    name: "Liam Walker",
    text: "The booking process was simple and fast. Great destinations and unforgettable memories!",
    img: "https://i.pinimg.com/736x/4e/30/ff/4e30ff922e067776d29974bc889069a4.jpg"
  },
  {
    id: 5,
    name: "Jhon Doe",
    text: "Pertama kali ikut open trip dan langsung jatuh cinta. Gak ribet dan sangat terorganisir!",
    img: "https://i.pinimg.com/736x/42/07/c5/4207c5eb63f72040720b97a9b5e909e9.jpg"
  }
]

const Testimoni = () => {
var settings ={
  dots: true,
  arrows:false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1300,
    cssEase: "linear",
    pauseOnHover:true,
    pauseOnFokus:true,
      responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
         
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
}

  return (
    <div className="py-10">
      <div
        className="w-full mx-auto px-4 sm:px-8 xl:px-20 2xl:px-24
         sm:py-0 lg:py-0"
      >
        {/* bagian  header */}
        <div className=" text-center mb-20 max-w-[400px] mx-auto ">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-[#0287a8] to-[#00c3c7]">
            Testimonial
          </p>
          <h1 className="text-3xl font-bold ">Testimonial</h1>
          <p className="text-xs text-gray-400">
            {""} Here’s what our travelers have to say about their unforgettable
             journeys with us. Real stories, real experiences, and honest feedback from our happy customers.
          </p>
        </div>
        {/* bagian testi */}
        <Slider {...settings}>
            {
                TestimonialData.map(({id,name,text,img})=>{
             return (
                <div key={id} className="my-6">
                 <div className="flex flex-col justify-center items-center 
                 gap-4 text-center shadow-lg p-4 mx-4 rounded-xl h-65 bg-[#0287a8]/10 relative" >
                     <img src={img} alt=""
                     className="rounded-full block mx-auto w-20"/>
                     <h1 className="text-cente text-xl font-bold">{name}</h1>
                     <p className="text-gray-500 text-xm">{text}</p>
                     <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">..</p>
                 </div>
                </div>
             )
                })
            }
        </Slider>
      </div>
    </div>
  );
};

export default Testimoni;
