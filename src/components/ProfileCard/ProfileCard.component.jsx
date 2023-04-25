const ProfileCard = (props) => {
  const value = props.state;
  const click = (event) => {
    if (event.target.id == "daily") {
      value.setInterval("daily");
    } else if (event.target.id == "weekly") {
      value.setInterval("weekly");
    } else if (event.target.id == "monthly") {
      value.setInterval("monthly");
    }
  };
  return (
    <main className="profile-card">
      <div className="profile-card__user">
        <img
          src="./images/image-jeremy.png"
          alt="profile-image"
          className="profile-card__user__image"
        />
        <div className="profile-card__user__content">
          <p>Report for</p>
          <h1 className="name">Jeremy Robson</h1>
        </div>
      </div>
      <div className="profile-card__nav">
        <button
          id="daily"
          className={`daily ${
            value.interval == "daily" ? "clicked" : "not-clicked"
          }`}
          onClick={click}
        >
          Daily
        </button>
        <button
          id="weekly"
          className={`weekly ${
            value.interval == "weekly" ? "clicked" : "not-clicked"
          }`}
          onClick={click}
        >
          Weekly
        </button>
        <button
          id="monthly"
          className={`monthly ${
            value.interval == "monthly" ? "clicked" : "not-clicked"
          }`}
          onClick={click}
        >
          Monthly
        </button>
      </div>
    </main>
  );
};

export default ProfileCard;
