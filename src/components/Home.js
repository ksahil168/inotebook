import Notes from "./Notes";

/* import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"; */

export const Home = (props) => {
  const{showAlert}= props
  return (
    <div>
      <div className="container my-3">
       
        <div className="my-3">
        
          <Notes showAlert={showAlert} />
        </div>
      </div>
    </div>
  );
};
