import Notes from "./Notes";

/* import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"; */

export const Home = () => {
  return (
    <div>
      <div className="container my-3">
       
        <div className="my-3">
          <h2>Your Notes</h2>
          <Notes />
        </div>
      </div>
    </div>
  );
};
