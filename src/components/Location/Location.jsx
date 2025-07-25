import React from "react";

const Location = () => {
  return (
    <div>
      <div>
        <div
          className="w-full mx-auto px-4 sm:px-8 xl:px-20 2xl:px-24
         sm:py-0 lg:py-0 pb-10"
        >
          <h1
            className=" inline-block border-l-8 border-[#0287a8]/50
      py-2 pl-2 text-xl sm:text-3xl font-bold mb-4"
          >
            Location to visit
          </h1>
          <div className="rounded-xl">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.978772447606!2d106.6927417!3d-6.1335543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a0299810b8659%3A0x812482816328f120!2sTravelgo!5e0!3m2!1sid!2sid!4v1753463262834!5m2!1sid!2sid" 
        width="100%"
        height="360"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ borderRadius: "20px" }}
      ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
