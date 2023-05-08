import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import styles from './Navbar2.css';

function NavbarNotice() {
  const [activeMenu, setActiveMenu] = useState("");
  const [selectedMenu, setSelectedMenu] = useState('myPage,myToDoList');
  const handleClick = (menuName) => {
    setActiveMenu(menuName);
  };
  
  return (
    <div className={styles.Navbar2}>
      <div className="title1">
        <div className="title2">
          <b>공지사항</b>
        </div>
        <div className="navbar2-wrapper">
          <NavLink to="/notice">
            <div className={`navbar2 ${activeMenu === "info" ? "active" : ""}`} onClick={() => handleClick("info")}>전체</div>
          </NavLink>
          <NavLink to="/notice/part">
            <div className={`navbar2 ${activeMenu === "todo" ? "active" : ""}`} onClick={() => handleClick("todo")}>부서별</div>
          </NavLink>
          <NavLink to="/notice/status">
            <div className={`navbar2 ${activeMenu === "todo" ? "active" : ""}`} onClick={() => handleClick("todo")}>상태별</div>
          </NavLink>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default NavbarNotice;
