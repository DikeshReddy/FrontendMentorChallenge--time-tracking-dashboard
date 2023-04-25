import ProfileCard from "../ProfileCard/ProfileCard.component";
import Card from "../Card/Card.component";
import { useState } from "react";

const Dashboard = ({ data }) => {
  const [interval, setInterval] = useState("daily");
  const value = { interval, setInterval };

  return (
    <div className="Dashboard">
      <ProfileCard state={value} />
      {data.map((title, i) => {
        return (
          <Card
            className={`card-bg-primary-${i + 1}`}
            data={title}
            state={value}
          />
        );
      })}
    </div>
  );
};

export default Dashboard;
