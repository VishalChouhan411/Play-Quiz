import React from "react";
import illus1 from "../images/quiz.png";
import illus2 from "../images/3.jpg";
import illus3 from "../images/2.jpg";
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
        image={illus1}
        size ={"500px"}
      />
      <HomeCard
        color="grey"
        heading="My Quizzes"
        path="my-quizzes"
        delay={0.25}
        image={illus3}
        size ={"500px"}
      />
      <HomeCard
        
        color="grey"
        heading="Play Quiz"
        path="play-quiz"
        delay={0.35}
        image={illus2}
        size ={"500px"}
        
      />
    </div>
  );
};
