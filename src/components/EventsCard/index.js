import "./index.css";

const EventsCard = (props) => {
  const { data } = props;
  const { cityName, date, distanceKm, eventName, imgUrl, weather } = data;
  const id = imgUrl.slice(32, 65);
  const url = `https://drive.google.com/thumbnail?id=${id}`;

  return (
    <div className="event-bg">
      <img src={url} alt={cityName} />
      <p>{date}</p>
      <h2>{eventName}</h2>
      <div className="name-weathe-align">
        <p>{cityName}</p>
        <p>
          {weather} | {distanceKm}
        </p>
      </div>
    </div>
  );
};

export default EventsCard;
