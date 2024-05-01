import React from 'react'

function Planet(planet) {
  return (
    <div>
      {/* <section className="flex h-screen">
      {
      spaceapp &&
        spaceapp.map((planet) => (
         
          <div key={planet} className="lg:flex md:flex-col md:justify-center w-screen items-center">
            <div className="md:flex md:h-[50%] md:w-screen lg:w-[50%]">
            <motion.img animate={{rotate: 360} }
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
             transition={{duration: 2} }
          
            src={planet.image} alt="" key={planet.id} className="object-contain h-20" />
           
            </div>
            <div className="flex-col">
            <h1 className="text-white w-[50%] align-middle font-bold text-9xl" key={planet.id}>{planet.name}</h1>
            <p className="text-white p-4 text-3xl w-[90%]">{planet.description} </p>
            
            </div>
          </div>
     
        ))}  </section> */}
       
    </div>
  )
}

export default Planet
