// Task 2: Create Dropdown Filter 

import React from 'react'; // imports from react


const DestinationSelector = ({ tours, selectedTour, setSelectedTour }) => {
  return (
    <div className="destination-selector">
      
      <label htmlFor="destination">Choose a Destination:</label>
      
      
      <select
        
        id="destination" // connects label to dropdown
        
        
        value={selectedTour} // sets the selected place
        
        
        onChange={(e) => setSelectedTour(e.target.value)} // updates the place when changed 
      >
        
        <option value="all">All Destinations</option>
        
        
        {tours.map((tour) => (
          <option key={tour.id} value={tour.name}>
            
            {tour.name} 
          </option>
        ))}
      </select>
    </div>
  );
};


export default DestinationSelector; // makes component available