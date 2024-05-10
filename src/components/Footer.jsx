import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const githubLink = "https://github.com/ykurt56";
  const linkedinLink = "https://github.com/ykurt56";

  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1 className="banner-title">ToDoMoLi ile Film Listeni Oluştur</h1>
        <p className="banner-description">
          Herhangi bir seçim veya kaldırma işlemi yapabilmek için seçtiğiniz
          Film'in üzerine gelin..
        </p>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="banner-button"
        >
          <FaGithub />
        </a>
        <a
          href={linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          className="banner-button"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Footer;
