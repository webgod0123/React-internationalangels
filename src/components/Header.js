import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const menus = [
    { name: "Explore", path: "/explore" },
    { name: "Contact us", path: "/contact" },
    { name: "Roadmap", path: "/roadmap" },
  ];

  let history = useHistory();

  return (
    <div className="header">
      <div>
        <Link
          className={
            history.location.pathname === "/home"
              ? "header-menu active"
              : "header-menu"
          }
          to="/"
        >
          HOME
        </Link>
      </div>
      <div className="header-menus">
        {menus.map((route, index) => (
          <Link
            className={
              history.location.pathname === route.path
                ? "header-menu active"
                : "header-menu"
            }
            key={index}
            to={route.path}
          >
            {route.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
