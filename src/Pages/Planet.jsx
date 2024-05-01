import React, { useEffect, useState } from 'react'

function Planet({selectedSpaceapp}) {

    const [planet , setPlanet]=useState([]);

    

    useEffect (()=>{
        fetch(`http://localhost:5000/planets/${selectedSpaceapp.position}`)
        .then(response => response.json())
      .then(data => setPlanet(data));
    },[selectedSpaceapp])
    console.log(planet)
  return (
    <div>
      Planet
    </div>
  )
}

export default Planet
