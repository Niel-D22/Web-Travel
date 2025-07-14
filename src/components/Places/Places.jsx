import React from 'react'
import PlacesCard from './placesCard'
import Img1  from '../../assets/places/bunaken.jpeg'


const PlacesData =[
  {
img: Img1,
titel:"Bunaken",
location:"Indonesia, Sulawesi Utara",
description:"Kawasan konservasi laut yang terletak di utara Pulau Sulawesi, Indonesia, tepatnya di dekat Kota Manado.Dikenal dunia sebagai surganya bawah laut, Bunaken menawarkan keindahan terumbu karang yang luar biasa, berbagai jenis ikan, moluska, reptil, dan mamalia laut.",
price:300,
type: "Wisata bahari",
aos:"fade-up",
delay:300,
},
  {
img:Img1,
titel:"Boat tour",
location:"USA",
description:"lorem impsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\
ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor",
aos:"fade-up",
delay:300,
},
  {
img: Img1,
titel:"Bunaken",
location:"Indonesia, Sulawesi Utara",
description:"Kawasan konservasi laut yang terletak di utara Pulau Sulawesi, Indonesia, tepatnya di dekat Kota Manado.Dikenal dunia sebagai surganya bawah laut, Bunaken menawarkan keindahan terumbu karang yang luar biasa, berbagai jenis ikan, moluska, reptil, dan mamalia laut.",
price:300,
type: "Wisata bahari",
aos:"fade-up",
delay:300,
},
  {
img:Img1,
titel:"Boat tour",
location:"USA",
description:"lorem impsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\
ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor",
aos:"fade-up",
delay:500,
},
  {
img: Img1,
titel:"Bunaken",
location:"Indonesia, Sulawesi Utara",
description:"Kawasan konservasi laut yang terletak di utara Pulau Sulawesi, Indonesia, tepatnya di dekat Kota Manado.Dikenal dunia sebagai surganya bawah laut, Bunaken menawarkan keindahan terumbu karang yang luar biasa, berbagai jenis ikan, moluska, reptil, dan mamalia laut.",
price:300,
type: "Wisata bahari",
aos:"fade-up",
delay:500,
},
  {
img:Img1,
titel:"Boat tour",
location:"USA",
description:"lorem impsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\
ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor",
aos:"fade-up",
delay:500,
},
  {
img: Img1,
titel:"Bunaken",
location:"Indonesia, Sulawesi Utara",
description:"Kawasan konservasi laut yang terletak di utara Pulau Sulawesi, Indonesia, tepatnya di dekat Kota Manado.Dikenal dunia sebagai surganya bawah laut, Bunaken menawarkan keindahan terumbu karang yang luar biasa, berbagai jenis ikan, moluska, reptil, dan mamalia laut.",
price:300,
type: "Wisata bahari",
aos:"fade-up",
delay:700,
},
  {
img:Img1,
titel:"Boat tour",
location:"USA",
description:"lorem impsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\
ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor",
aos:"fade-up",
delay:700,
},
  {
img:Img1,
titel:"Boat tour",
location:"USA",
description:"lorem impsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\
ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor",
aos:"fade-up",
delay:700,
},

  
]


const Places = () => {
  return (
   <>
    <div className='bg-white min-h-screen mt-3  w-full rounded-2xl '>
        <div className='w-full mx-auto px-4  space-y-4 sm:px-8 xl:px-20 2xl:px-24
         py-[2px]  sm:py-0 lg:py-0   '>
            <h1 data-aos="fade-up" className=' border-l-8 border-[#0287a8]/50 my-15
            py-2 pl-2 text-3xl font-bold'>
                Best Places to visit</h1>
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
           gap-4 rounded-t-[2px] '>
            {
              PlacesData.map((item,index)=>{
         return(
          <PlacesCard key={index}
          {...item}/>
         )
              })
            }
           </div>

        </div>
    </div>
   </>

  )
}

export default Places