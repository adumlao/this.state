import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
     <nav>
      <Link to="/">Home</Link>
      <Link to="/Senate">Senate</Link>
      <Link to="/House">House of Representatives</Link>
      <Link to="/BillsArchive">Bills Archive</Link>
      <Link to="/PressRelease">Press Releases</Link>
     </nav>
    </div>
  )
}

export default Nav;
