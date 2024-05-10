import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger menü için iconlar

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="header">
      <div>
        <div className="logo-title ">
          <Link to={"/"}>ToDoMoLi</Link>
        </div>
      </div>
      {/* Masaüstü Görünüm */}
      <div className="desktop-menu">
        <div>
          <Link className="link" to={"/"}>
            GÖZAT
          </Link>
          <Link className="link" to={"/watch-later"}>
            İZLENECEKLER
          </Link>
          <Link className="link" to={"/fovorites"}>
            FAVORİLER
          </Link>
        </div>
      </div>
      {/* Mobil Görünüm */}
      <div className="mobile-menu">
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`links ${isMenuOpen ? "open" : ""}`}>
          <Link className="link" to={"/"} onClick={closeMenu}>
            GÖZAT
          </Link>
          <Link className="link" to={"/watch-later"} onClick={closeMenu}>
            İZLENECEKLER
          </Link>
          <Link className="link" to={"/fovorites"} onClick={closeMenu}>
            FAVORİLER
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
