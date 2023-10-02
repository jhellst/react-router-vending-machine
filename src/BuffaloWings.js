import React from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


function BuffaloWings() {
  return (
    <div>
      <p>Buffalo Wings!</p>
      <img
        src="https://allthehealthythings.com/wp-content/uploads/2020/04/Crispy-Baked-Buffalo-Chicken-Wings-5-scaled.jpg"
        alt='buffalo wings'></img>
      <p><Link to="/">Go Back</Link></p>
    </div>
  );
}

export default BuffaloWings;
