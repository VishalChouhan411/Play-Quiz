import React from "react";
import { HomeCard } from "./UI/HomeCard";


// this is our homepage which will route us to the necessary pages //

export const Home = () => {
  return (
    <div className="home-container">
      <HomeCard
        color="grey"
        heading="Create New Quiz"
        path="create-new"
        delay={0.15}
    
      />
      <HomeCard
        color="grey"
        heading="My Quizzes"
        path="my-quizzes"
        delay={0.25}
       
      />
      <HomeCard
        color="grey"
        heading="Play Quiz"
        path="play-quiz"
        delay={0.35}
        
      />
    </div>
  );
};
