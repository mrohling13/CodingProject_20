// Task 2: Create Dropdown Filter
import React, { useState } from 'react'; // imports from react


import Gallery from './components/Gallery'; // imports from the gallery component


import DestinationSelector from './components/DestinationSelector'; // imports the distination selector


import './styles/styles.css'; // imports the styling


function App() { // app component
  
  const [tours, setTours] = useState([]); // list the tours
  
  
  const [selectedTour, setSelectedTour] = useState('all'); // tracks the tours selected

  // Task 3: Render Tour Cards
  
  const removeTour = (id) => { // removes a tour 
    setTours((prevTours) => {
      
      const updatedTours = prevTours.filter((tour) => tour.id !== id); 

      // Task 4: Reset View

      if (
        selectedTour !== 'all' &&
        updatedTours.filter((tour) => tour.name === selectedTour).length === 0
      ) {
        setSelectedTour('all');
      }

      
      return updatedTours; // returns updated tours
    });
  };

  // Task 2: Create Dropdown Filter

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