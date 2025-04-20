
import React, { useState } from 'react';


import Gallery from './components/Gallery';


import DestinationSelector from './components/DestinationSelector';


import './styles/styles.css';


function App() {
  
  const [tours, setTours] = useState([]);
  
  
  const [selectedTour, setSelectedTour] = useState('all'); 

  
  
  
  const removeTour = (id) => {
    setTours((prevTours) => {
      
      const updatedTours = prevTours.filter((tour) => tour.id !== id);

      
      if (
        selectedTour !== 'all' &&
        updatedTours.filter((tour) => tour.name === selectedTour).length === 0
      ) {
        setSelectedTour('all');
      }

      
      return updatedTours;
    });
  };

  
  const filteredTours =
    selectedTour === 'all'
      ? tours 
      : tours.filter((tour) => tour.name === selectedTour); 

  
  return (
    <main>
      
      <h1>Tour Explorer</h1>

      
      <DestinationSelector
        
        tours={tours} 

        
        selectedTour={selectedTour} 

        
        setSelectedTour={setSelectedTour}
      />

      

      
      <Gallery
        
        tours={filteredTours} 
        
        
        setTours={setTours}

        
        onRemove={removeTour}
      />
    </main>
  )
}


export default App;