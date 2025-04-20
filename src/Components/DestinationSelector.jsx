// Task 2: Create Dropdown Filter 

import React from 'react';


const DestinationSelector = ({ tours, selectedTour, setSelectedTour }) => {
  return (
    <div className="destination-selector">
      
      <label htmlFor="destination">Choose a Destination:</label>
      
      
      <select
        
        id="destination"
        
        
        value={selectedTour}
        
        
        onChange={(e) => setSelectedTour(e.target.value)} 
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


export default DestinationSelector;