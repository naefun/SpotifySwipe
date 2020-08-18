import React, { useState } from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes, faTimesCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cover from "./imgs/album1.jpg";

library.add(faBars, faTimes, faTimesCircle, faCheckCircle);

const NavList = (props) => {
  const navItems = (
    <ul className="navItems">
      <li>
        <a href="/#">link 1</a>
      </li>
      <li>
        <a href="/#">link 1</a>
      </li>
      <li>
        <a href="/#">link 1</a>
      </li>
    </ul>
  );
  return props.show ? navItems : "";
};

const HistoryItem = (props) => {
  var cName = "historyIcon"+[props.icon];
  var listIcon = props.icon === "like" ? faCheckCircle : faTimesCircle;

  return(
    <li>
      {props.artist} - {props.song} <span className={cName}><FontAwesomeIcon icon={listIcon} /></span>
    </li>
  )
}

function App() {
  const [navShow, setNavShow] = useState(false);
  const [navIcon, setNavIcon] = useState(faBars);
  const defaultNavClass = "navigationBar";
  const [navBarClass, setNavClass] = useState(defaultNavClass);

  function navOnClick() {
    setNavShow(!navShow);

    !navShow ? setNavIcon(faTimes) : setNavIcon(faBars);

    if(navIcon !== faTimes){
      setNavClass(defaultNavClass+" fullHeightNavClass");
      document.body.className="noScroll";
    }else{
      setNavClass(defaultNavClass);
      document.body.className="";
    }
  }

  return (
    <div>
      <nav className={navBarClass}>
        <div className="hamburgerContainer">
          <button className="hamburgerBtn" onClick={navOnClick}>
            <FontAwesomeIcon icon={navIcon} />
          </button>
        </div>
        <NavList show={navShow} />
      </nav>
      <div className="albumCoverContainer">
        <img alt="album cover" src={cover}></img>
      </div>
      <div className="btnGroup">
        <button className="noBtn">NOPE</button>
        <button className="yesBtn">YEP</button>
      </div>
      <ul className="historyList containerPadding">
        <HistoryItem artist="Kendrick Lamar" song="HUMBLE" icon="like" />
        <HistoryItem artist="6ix9ine" song="GOOBA" icon="" />
        <HistoryItem artist="Kodak Black" song="Roll In Peace" icon="like" />
        <HistoryItem artist="XXXTENTACION" song="SAD!" icon="like" />
      </ul>
      <div className="containerPadding btnContainer">
        <button className="historyBtn">HISTORY</button>
      </div>
    </div>
  );
}

export default App;
