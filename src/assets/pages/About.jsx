import React from "react";
import Locaton from "../../components/Location/Location"


const About = () => {
  return (
    <div
      className="w-full mx-auto px-4 sm:px-8 xl:px-20 2xl:px-24
         sm:py-0 lg:py-0 mt-[90px]"
    >
      <div className="py-10">
        <h1
          className="my-8 border-l-8 border-[#0287a8]/50
      py-2 pl-2 text-3xl font-bold "
        >
          About us
        </h1>
        <p>
          At TravelGo, we believe that traveling is more than just visiting new
          places — it’s about creating stories, discovering cultures, and
          collecting unforgettable moments. Our mission is to make every trip
          effortless and extraordinary, whether you’re planning a relaxing beach
          getaway, a thrilling mountain hike, or a cultural city tour. We
          provide curated travel options, trusted recommendations, and
          up-to-date destination insights to help you explore the world with
          confidence.
        </p>
        <br />
        <p>
          Founded by passionate explorers and travel tech innovators, TravelGo
          blends smart technology with a human touch. Our platform is designed
          to give you seamless booking experiences, real-time support, and
          personalized itineraries that match your travel style. With TravelGo,
          your next journey is just a click away — easy to plan, exciting to
          experience, and impossible to forget.
        </p>
      </div>
      <Locaton/>
    </div>
  );
};

export default About;
