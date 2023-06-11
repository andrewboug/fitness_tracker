import React, { useState, useEffect } from "react";
import { fetchActivities } from "../api/helpers";

export default function Home() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    async function getActivities() {
      const activitiesList = await fetchActivities();
      setActivities(activitiesList.data.activities);
    }
    getActivities();
  }, []);

  return (
    <div>
      <h1>All Activities</h1>
      {activities.map((activity) => {
        return (
          <div className="parentElement">
            <div key={activity._id} className="gradient-border" id="box">
              <h3>{activity.name}</h3>
              {/* <p>User: {post.author.username}</p>
              <p>Description: {post.description}</p>
              <p>Price: {post.price}</p>
              <p>Created at: {post.createdAt}</p>
              <p>Updated at: {post.updatedAt}</p>
              <p>Location: {post.location}</p> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
