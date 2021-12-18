import React from "react";
import Logo from "./images/Logo.svg";
import { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { links, socials } from "./data";
export const Navbar = ({ width }) => {
  const [showLinks, setShowLinks] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const showContRef = useRef(null);
  console.log(width);

  useEffect(() => {
    if (width >= 990) {
      setShowLinks(true);
    }
    return;
  }, [width]);

  return (
    <nav>
      <div className="nav-container">
        <header className="nav-header">
          <img src={Logo} alt="company-logo" className="nav-logo" />
          <button className="nav-toggle">
            <FaBars
              className="ham-icon ham-icon-active"
              onClick={() => {
                setShowLinks(!showLinks);
                setMenuActive(!menuActive);
              }}
            />
          </button>
        </header>
        {showLinks && (
          <div
            className={`${width < 990 ? "show-container" : "links-container"}`}
            ref={showContRef}
          >
            <ul className="nav-links">
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <ul className="social-links">
          {socials.map((social) => {
            const { id, url, icon } = social;
            return (
              <li key={id}>
                <a url={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

{
  /* <li>
            <a href="https://www.twitter.com">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <FaTwitter />
            </a>
          </li> */
}

{
  /* <li>
<a href="#">Home</a>
</li>

<li>
<a href="#">About</a>
</li>

<li>
<a href="#">Contact</a>
</li>
<li>
<a href="#">Products</a>
</li> */
}
