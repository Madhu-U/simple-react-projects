import React, { useEffect, useState } from "react";
import TourCard from "./TourCard";

const Tours = () => {
  const url = "https://www.course-api.com/react-tours-project";
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchTours() {
    try {
      setLoading(true);
      const response = await fetch(url);
      const tourData = await response.json();
      setLoading(false);
      setTours(tourData);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  useEffect(() => {
    fetchTours();
  }, []);

  function removeTour(tourId) {
    setTours(tours.filter((tour) => tour.id !== tourId));
  }

  return (
    <div className='w-[1200px] mx-auto flex flex-wrap gap-5 items-center justify-center'>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        tours.map((tour) => (
          <TourCard key={tour.id} tourData={tour} handleRemove={removeTour} />
        ))
      )}
    </div>
  );
};

export default Tours;
