//morning bonus 1

import { useState } from 'react';

export default function TrafficLight() {
    const [walk, setWalk] = useState(true);
  
    function handleClick() {
			const showAlert = () => {walk ? alert("Stop is next") : alert("Walk is next")}
			showAlert();
      setWalk(!walk);
			
    }
		//alert position doesnt make any difference
  
    return (
      <>
        <h2>Bonus1: TrafficLight</h2>
        <button onClick={handleClick}>
          Change to {walk ? 'Stop' : 'Walk'}
        </button>
        <h1 style={{
          color: walk ? 'darkgreen' : 'darkred'
        }}>
          {walk ? 'Walk' : 'Stop'}
        </h1>
      </>
    );
  }