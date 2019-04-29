import React from 'react';
import './Navbar.css';

const Navbar = props => (
  <div className="navbar ">
    <div>Horror Clicky Game</div>
    <div className={props.navMsgColor}>{props.navMessage}</div>
    <div>
      Score: <span style={{ color: "yellow" }}>{props.score}</span> Top Score: {props.highScore}
    </div>
  </div>
);

export default Navbar;
