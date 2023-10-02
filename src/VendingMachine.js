import React from "react";
import { Link, useLocation } from 'react-router-dom';
import './VendingMachine.css';

function VendingMachine() {
  const location = useLocation();

  return (
    <div className="VendingMachine">
      <h1>Hello I am a vending machine what would you like to eat?</h1>
      {location.pathname === '/' && <>
        <p><Link to="/pocky">POCKY</Link></p>
        <p><Link to="/chips">CHIPS</Link></p>
        <p><Link to="/buffalo-wings">BUFFALO WINGS</Link></p>
      </>}
    </div>
  );
}

export default VendingMachine;
