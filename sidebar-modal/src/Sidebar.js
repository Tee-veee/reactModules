import React from "react";
import Logo from "./Logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from "./context";

function Sidebar() {
  const { closeSideBar, isSidebarOpen } = useGlobalContext();
  console.log(closeSideBar, isSidebarOpen);
  return (
    <div className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        <img src={Logo} alt="logo" className="logo-img" />
        <button className="close-sidebar-btn btn" onClick={closeSideBar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id} className="link-list">
              <a href={url} className="link-icon">
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url} className="social-icon">
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
