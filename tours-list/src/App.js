import React, { useState, useEffect } from "react";
import Loading from "./loading";
import Tours from "./tours";
import data from "./data";
// import Tours from
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState(data);

  const refreshTours = () => {
    setTours(data);
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id != id);
    setTours(newTours);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
          <button classname="newToursBtn" onClick={refreshTours}>
            Refresh
          </button>
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

export default App;
