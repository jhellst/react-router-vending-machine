import React from "react";
import { Link } from 'react-router-dom';


function Pocky() {
  return (
    <div>
      <p>Pocky!</p>
      <img
        src="https://www.tofucute.com/images/781_winter_melty_pocky_large.jpg"
        alt="winter melt pocky"></img>
      <p><Link to="/">Go Back</Link></p>
    </div>
  );
}

export default Pocky;
