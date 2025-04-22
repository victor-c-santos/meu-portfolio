import { useEffect, useState } from 'react';
import '/src/styles/Astronauta.css';
import astronauta from '/src/assets/astronauta.png';

const Astronaut = () => {
  return (
    <div className="astronaut" onClick>
      <img src={astronauta} alt="" draggable='false' />
    </div>
  );
};

export default Astronaut;