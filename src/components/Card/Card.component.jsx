const Card = (props) => {
  const data = props.data;
  const state = props.state;
  let interval;
  let previous;

  if (state.interval == "daily") {
    interval = "daily";
    previous = "Yesterday";
  } else if (state.interval == "weekly") {
    interval = "weekly";
    previous = "Last Week";
  } else {
    interval = "monthly";
    previous = "Last month";
  }

  return (
    <div className={`card ${props.className}`}>
      <img src={data["icon"]} alt="" className="icon" />
      <div className="card__content">
        <div className="card__content__heading">
          <div className="card__content__heading__title">{data.title}</div>
          <img className="ellipsis" src="./images/icon-ellipsis.svg" alt="" />
        </div>
        <div className="card__hours">
          <div className="card__hours__current">
            {data.timeframes[`${interval}`]["current"]}hrs
          </div>
          <div className="card__hours__previous">
            {previous} - {data.timeframes[`${interval}`]["previous"]}hrs
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
