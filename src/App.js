//TODO: STEP 1 - Import the useState hook.
import React, {useState}  from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
   const [lionvalue, setlionValue] = useState(6);
      const [tigervalue, settigervalue]= useState(13);
    const liontouchdown = e => {
      setlionValue(lionvalue + 7);
      
    }
    const tigertouchdown= e => {
      settigervalue(tigervalue + 7);
    }
    const lionfg= e => {
      setlionValue(lionvalue + 3);
    }
    const tigerfg= e => {
      settigervalue(tigervalue + 3);
    }
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionvalue}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigervalue}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={liontouchdown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={lionfg}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={tigertouchdown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={tigerfg}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
