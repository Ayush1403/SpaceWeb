import React, { useState, useEffect } from "react";
import bg from '../assets/Bg.jpg';
import planet from '../assets/Planet.svg'
import telescope from '../assets/Telescope.png'
import { Navbar } from "../Components";

function Page() {
  const [spaceapp, setSpaceApp] = useState([]);

  const backgroundStyle = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
    height: '100vh'
  };

  const fetchSpaceData = async () => {
    try {
      const response = await fetch("http://localhost:5000/planets/");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setSpaceApp(data.planets.slice(0, 3));
    } catch (error) {
      console.error("Error details:", error);
    }
  };

  useEffect(() => {
    fetchSpaceData();
  }, []);

  return (
    <main className="w-full flex-col h-full relative" style={backgroundStyle}>
      <section className="h-[10%]">
     <Navbar />
      </section>
      <section className="w-screen flex items-center h-[90%]">
        <div className="lg:w-1/2 flex-col ml-144px">
          <h1 className="text-white md:text-1lp lg:text-4xl font-orbitron font-semibold">Explore the space with us</h1>
          <div className="flex mt-19px space-x-6">
            <a href={"/home"} className="text-white font-orbitron border-2 border-white p-4"> Discover Space </a>
            <a href="#" className=" font-semibold font-orbitron border-2 border-white bg-white p-4"> Join Community </a>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-end overflow-hidden scr md:w-0 absolute bottom-0 right-0 ">
          <img src={planet} alt="" className="h-[780px] shadow-2xl align-bottom object-contain" />
        </div>
      </section>
      <section id="about" className="w-screen overflow-hidden flex items-start p-4  z-0 h-[auto]" style={backgroundStyle}>
        <div className="flex-col lg:w-[70%] ml-116px">
          <h1 className="text-white font-orbitron text-xl font-semibold">About us</h1>
          <p className="lg:w-1/2 font-orbitron tracking-widest text-white">Welcome to ExploreSpace, <br /> your premier destination for unlocking the mysteries of the cosmos!

<br /> At ExploreSpace, we're dedicated to bringing the wonders of space exploration and astronomy closer to you. Our mission is to inspire curiosity, ignite imagination, and foster a deeper understanding of the universe we inhabit.</p>
        </div>
        <div className="lg:w-[30%] flex h-full w-0">
          <img src={telescope} alt="" className="h-96 w-96  p-4 z-10"/>
        </div>
      </section>
    </main>
  );
}

export default Page;
