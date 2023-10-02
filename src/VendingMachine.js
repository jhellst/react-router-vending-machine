import React from "react";
import {BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function VendingMachine() {
  return (
    <div className="VendingMachine">
      {/* {if ()} */}
      <p>Go To: <Link to="/pocky">Pocky</Link></p>
      <p>Go To: <Link to="/chips">Chips</Link></p>
      <p>Go To: <Link to="/buffalo-wings">Buffalo Wings</Link></p>
    </div>
  );
}

export default VendingMachine;
