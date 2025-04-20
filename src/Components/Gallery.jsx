// Task 1: Fetch & Store Tour Data

import React, { useEffect, useState } from 'react';


import TourCard from './TourCard';


const url = 'https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project';


const Gallery = ({ tours, setTours, onRemove }) => {
  
  const [loading, setLoading] = useState(true);

  
  const [error, setError] = useState(false);

  
  const fetchTours = async () => {
    try {
      
      setLoading(true);
      const response = await fetch(url);

      
      if (!response.ok) {
        throw new Error("Failed to fetch tours");
      }

      
      const data = await response.json();
      setTours(data);
    } catch (error) {
      console.log('Fetch error:', error);

      
      setError(true);

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
  
  return (
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