import React from "react";
import {BrowserRouter, Route, Routes, Link } from 'react-router-dom';


function Pocky() {
  return (
    <div>
      <p>Pocky!</p>
      {/* <img src="https://www.utzsnacks.com/cdn/shop/products/0-83791-01005-2Zapps1.5ozVoodooKettleChipsBag_front.jpg?v=1680017457"></img> */}
      <p><Link to="/">Go Back</Link></p>
    </div>
  );
}

export default Pocky;
