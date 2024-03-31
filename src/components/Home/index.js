import { useState, useEffect } from "react";

import ShowCard from "../ShowCard";
import EventsCard from "../EventsCard";
import Navbar from "../Navbar";
import "./index.css";

const Home = () => {
  const [recomendedShows, setRecomendeShows] = useState([]);
  const [events, setEvents] = useState([]);

  const getRecomendedShows = async () => {
    const url = process.env.URL1;

    const responce = await fetch(url);
    const data = await responce.json();
    setRecomendeShows(data.events);

    const url2 = process.env.URL2;
    const responce2 = await fetch(url2);
    const data2 = await responce2.json();
    setEvents(data2.events);
    // console.log(data2);
    // console.log(data);
  };

  useEffect(() => {
    getRecomendedShows();
  }, []);
  //   console.log(recomendedShows);
  return (
    <div>
      <Navbar />
      <div className="home-bg">
        <h1>
          Discover Exciting events Happening Near You-stay Tuned for Updates !
        </h1>
        <p>
          Dorem ipsum dolor sit amet,consettur adipiscigelit Nanc vulputate
          libero at velit interdum,ac aliquet odio matis, class aptent taciti
          sociosqu ad litora torquent per conbia nonstra ,per.
        </p>

        <div>
          <h3 className="recomended-tag">Recomended shows -> </h3>
          <div className="reshow-container">
            {recomendedShows.map((item) => (
              <ShowCard data={item} />
            ))}
          </div>
          <h3 className="events-tag">Upcoming events -></h3>
          <div className="event-container">
            {events.map((item) => (
              <EventsCard data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
