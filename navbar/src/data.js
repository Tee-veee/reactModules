import React from "react";
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

export const links = [
  {
    id: 0,
    url: "/",
    text: "Home",
  },
  {
    id: 1,
    url: "/about",
    text: "About",
  },
  {
    id: 2,
    url: "/contact",
    text: "Contact",
  },
  {
    id: 3,
    url: "/products",
    text: "Products",
  },
];

export const socials = [
  {
    id: 0,
    url: "https://www.facebook.com",
    icon: <FaFacebook className="facebook-icon" />,
  },
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaTwitter className="twitter-icon" />,
  },
  {
    id: 2,
    url: "https://www.github.com",
    icon: <FaGithub className="github-icon" />,
  },
];
