// Task 1: Fetch & Store Tour Data

import React, { useEffect, useState } from 'react'; // imports reacts and its tools 


import TourCard from './TourCard'; // imports tour card


const url = 'https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project'; // url contains tour data


const Gallery = ({ tours, setTours, onRemove }) => { // displays all tours
  
  const [loading, setLoading] = useState(true); // displays loading when being fetched

  
  const [error, setError] = useState(false); // displays error

  
  const fetchTours = async () => { // fetches tour data
    try {
      
      setLoading(true); // loading screen
      const response = await fetch(url); 

      
      if (!response.ok) {
        throw new Error("Failed to fetch tours"); // shows error
      }

      
      const data = await response.json();
      setTours(data);
    } catch (error) {
      console.log('Fetch error:', error);

      
      setError(true); // displays error

      setLoading(false);
    } finally {
      
      setLoading(false); 
    }
  };

  
  useEffect(() => {
    fetchTours();
  }, []);

  
  if (loading) {
    return <h2>Loading...</h2>;
  }

  
  if (error) {
    return <h2>Something went wrong.</h2>;
  }

  // Task 4: Reset View

  if (tours.length === 0) {
    return (
      <div className="no-tours">
        <h2>No tours left. Refresh to reload.</h2>
        <button onClick={fetchTours}>
          Refresh
        </button>
      </div>
    );
  }

  // Task 3: Render Tour Cards
  
  return ( // displays all tours
    <section className="gallery">
      {tours.map((tour) => (
        <TourCard
          
          key={tour.id}

          
          {...tour}

          
          onRemove={onRemove}
        />
      ))}
    </section>
  );
};


export default Gallery;