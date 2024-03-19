/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../Assets/logo-transparent-png.png";

const LandingPage = () => {
  return (
    <div
      className="bg-no-repeat bg-cover h-screen text-white"
      style={{
        backgroundImage: `url(${"https://images.unsplash.com/photo-1615680022647-99c397cbcaea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG9wZW4lMjB3b3JsZCUyMGdhbWVzfGVufDB8fDB8fHww"})`,
        textShadow: "2px 2px 4px #000000",
      }}
    >
      <nav className="p-5">
        <img src={logo} className="h-24 w-1/10 rounded-full"></img>
        <h1 className="text-center flex justify-center text-5xl">
          Welcome to Open World Gaming!
        </h1>
        <p className="text-center flex justify-center text-xl">
          Experience the thrill of exploration and adventure in our vast
          selection of open-world games.
        </p>
        <button className="bg-red-500 text-white py-4 px-8 text-xl ml-[45%] mt-[20%] rounded-[30px] border-[10px] cursor-pointer">
          Explore Games
        </button>
      </nav>
    </div>
  );
};

export default LandingPage;
