/* eslint-disable */
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

const url = 'https://course-api.com/react-tours-project';

function Loading() {
  return (
    <div className="loading">
      <h1>loading...</h1>
    </div>
  );
}

function Tour({ id, image, info, name, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img width="100px" src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : '  read more'}</button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
}

function Tours({ tours, removeTour }) {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline" />
      </div>
      <div>
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </section>
  );
}

Tours.propTypes = {
  tours: PropTypes.array.isRequired,
  removeTour: PropTypes.func.isRequired,
};

export default function ToursApp() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button onClick={refresh}>Refresh</button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}
