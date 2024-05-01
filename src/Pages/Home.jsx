import React, { useEffect, useState } from 'react'
import { Navbar } from '../Components'
import { Link } from 'react-router-dom';

function Home() {

  const [spaceapp , setSpaceapp] = useState([]);

  const application = async() =>{
    try {
      const data = await fetch(`http://localhost:5000/planets/`);
      if(!data.ok){
        console.log("Data cant  be fetched")
      }
      const res = await data.json();
      setSpaceapp (res.planets.slice(0,4));
    }
    catch (error){
      console.log("Error " , error)
    }
  }

  useEffect(()=>{
    application();
    console.log(spaceapp)
  },[])

  return (
    <>
    <div className='w-full h-screen bg-black'>
        <section className='h-[10%]'>
          <Navbar  />
        </section>
        <section  className='text-white flex m-10 p-2'>
        {
          spaceapp && spaceapp.map((space,index)=>(
            <Link to={`/planet`}  key={space.position}>
              <div className=''>
              <img className='sm:w-10 md:w-96 lg:w-[120px] p-4 m-4 bg-white bg-opacity-10' src={space.image} alt="" />
              <h1 className='text-center font-orbitron tracking-widest'>{space.name}</h1>
              </div>            
            </Link>
          ))
        }
        </section>
    </div>
    </>
  )
}

export default Home
