import React from "react";
const Hero = () => {
  const [PriceValue, setPriceValue] = React.useState(40);

  return (
    <div className="bg-black/20 min-h-screen  ">
      <div
        className="h-full flex justify-center items-center min-h-screen
        p-4  bg-[#0287a8]/10"
      >
        <div
          className="w-full mx-auto  px-4 sm:px-8 xl:px-20 2xl:px-24 py-[2px] h-57 sm:py-0 lg:py-0
            grid grid-cols-1 gap-4  "
        >
          {/* bagian text content */}
          <div className="text-white px-10 mb-5 ">
            <p data-aos="fade-up">Our packages</p>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-4xl font-bold text-shadow-black"
            >
              Search Your Destination
            </h1>
            {/* bagian form */}
            <div data-aos="fade-up" data-aos-delay="600"
              className="bg-white border h-[300px] sm:h-[140px]  md:h-[140px] rounded-[8px]
           mt-7  text-gray-600 p-4 relative "
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 py-3 gap-2   ">
                <div>
                  <label className="opacity-70" htmlFor="destination">
                    Search Destination
                  </label>
                  <input
                    type="text"
                    name="destination"
                    placeholder="Dubai"
                    className="w-full bg-gray-100 my-2 range
                    accent-[#0287a8] focus:outline-[#0287a8]
                    outline-1 rounded-[6px] p-2"
                  />
                </div>
                <div>
                  <label className="opacity-70" htmlFor="destination">
                    Date
                  </label>
                  <input
                    type="date"
                    name="destination"
                    id="destination"
                    className="w-full !placeholder-slate-400
                    bg-gray-100  my-2 focus:outline-[#0287a8]
                    focus:outline outline-1 rounded-[6px] p-2"
                  />
                </div>
                <div>
                  <label htmlFor="destination" className="opacity-70 block">
                    <div className="w-full flex justify-between items-center">
                      <p>max price</p>
                      <p className="font-bold text-xl">{PriceValue}</p>
                    </div>
                  </label>
                  <div
                    className=" bg-gray-100 rounded-[6px] p-2
                    flex items-center justify-center mt-1 "
                  >
                    <input
                      type="range"
                      name="destination"
                      id="destination"
                      className="appearance-none w-full bg-gradient-to-r
                    from-[#0287a8] to-[#00c3c7] h-2 rounded-full 
                   my-2"
                      min="150"
                      max="1000"
                      value={PriceValue}
                      step="10"
                      onChange={(e) => setPriceValue(e.target.value)}
                    />
                  </div>
                </div>
              </div>
                   {/* button search */}
         <button className="bg-gradient-to-r from-[#0287a8]
         to-[#00c3c7] text-white hover:scale-105 px-4 py-2 rounded-[20px]
         duration-200 absolute -bottom-[-5] left-1/2 -translate-x-1/2 ">
            Search Now
         </button>
            </div>
         
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Hero;
