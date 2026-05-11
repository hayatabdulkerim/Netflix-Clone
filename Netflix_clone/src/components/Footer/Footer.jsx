import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { text: "Audio Description", url: "#" },
    { text: "Help Centre", url: "#" },
    { text: "Gift Cards", url: "#" },
    { text: "Media Centre", url: "#" },
    { text: "Investor Relations", url: "#" },
    { text: "Jobs", url: "#" },
    { text: "Terms of Use", url: "#" },
    { text: "Privacy", url: "#" },
    { text: "Legal Notices", url: "#" },
    { text: "Cookie Preferences", url: "#" },
    { text: "Corporate Information", url: "#" },
    { text: "Contact Us", url: "#" },
  ];

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        {/* Social Icons */}
        <div className={styles.socialIcons}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Links Grid */}
        <ul className={styles.linksGrid}>
          {links.map((link, index) => (
            <li key={index} className={styles.linkItem}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <div className={styles.copyright}>
          © 1997-{currentYear} Netflix, Inc.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
