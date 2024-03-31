import "./index.css";

const ShowCard = (props) => {
  const { data } = props;
  const { cityName, date, distanceKm, eventName, imgUrl, weather } = data;

  const id = imgUrl.slice(32, 65);
  const url = `https://drive.google.com/thumbnail?id=${id}`;

  return (
    <div className="show-bg">
      <div>
        <img className="show-img" src={url} alt={cityName} />
        <div className="img-text">
          <div className="name-date">
            <h3>{eventName}</h3>
            <p>{date}</p>
          </div>
          <div className="name-weather">
            <p>{cityName}</p>
            <p>
              {weather} | {distanceKm} KM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
