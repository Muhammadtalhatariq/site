"use client";
import React, { useState, useEffect } from "react";
import { FaFacebookMessenger } from "react-icons/fa6";
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleButton = () => {
    setIsActive(!isActive);
  };

  const handleScroll = () => {
    setScrollY(window.scrollY); // Track vertical scroll
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.clear();
  console.log(scrollY);
  return (
    <header
      className="section rd-navbar-wrap rd-navbar-wrap-absolute"
      data-preset=""
    >
      <nav className="rd-navbar rd-navbar-original rd-navbar-fullwidth">
        <div className="navbar-container ">
          <div className="navbar-cell navbar-subpanel-contact">
            <div
              className={
                scrollY > 100 ? "contact-btn-fixed  " : " navbar-contact"
              }
            >
              <button
                className={`rd-navbar-fullwidth navbar-contact-btn ${
                  isActive ? "active" : ""
                }`}
                onClick={toggleButton}
              >
                <span></span>
              </button>
              <div
                className={
                  isActive ? "navbar-contact-active " : " navbar-contact-body "
                }
              >
                <div className="navbar-contact-title h4  ">
                  Join My Newsletter
                </div>
                <form
                  className="rd-form rd-form-inline rd-mailform"
                  data-form-output="newsletter-navbar"
                  data-form-type="subscribe"
                  method="post"
                  action="components/rd-mailform/rd-mailform.php"
                  noValidate="novalidate"
                >
                  <div className="form-group">
                    <input
                      className="form-control form-control-sm form-control-has-validation form-control-last-child"
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      data-constraints="@Email @Required"
                      id="regula-generated-984968"
                    />
                    <span className="form-validation"></span>
                  </div>
                  <button className="btn btn-sm btn-primary" type="submit">
                    Subscribe
                  </button>
                </form>
                <div
                  className="form-output snackbar snackbar-primary"
                  id="newsletter-navbar"
                ></div>
              </div>
            </div>
          </div>
          <div
            className={
              scrollY > 100
                ? "fixed navbar-cell navbar-cell-center z-10 right-0 bg-white h-20  transition duration-700 ease-in-out "
                : "navbar-cell navbar-cell-center "
            }
          >
            <div className="navbar-panel ">
              <button
                className="navbar-switch mdi-menu novi-icon"
                data-multi-switch=""
              ></button>
              <div className="navbar-logo">
                <a className="navbar-logo-link" href="index.html">
                  <img
                    className="navbar-logo-default"
                    src="https://ld-wt73.template-help.com/wt_prod-29297/images/logo-default-228x67.png"
                    alt="Booo"
                    width="114"
                    height="33"
                  />
                  <img
                    className="navbar-logo-inverse"
                    src="images/logo-inverse-228x67.png"
                    alt="Booo"
                    width="114"
                    height="33"
                  />
                </a>
              </div>
            </div>
            <div className="navbar-sidebar ">
              <ul className="navbar-navigation rd-navbar-nav">
                <li className="navbar-navigation-root-item">
                  <a className="navbar-navigation-root-link" href="#about-me">
                    About me
                  </a>
                </li>
                <li className="navbar-navigation-root-item">
                  <a className="navbar-navigation-root-link" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="navbar-navigation-root-item">
                  <a
                    className="navbar-navigation-root-link"
                    href="#testimonials"
                  >
                    Testimonials
                  </a>
                </li>
                <li className="navbar-navigation-root-item">
                  <a className="navbar-navigation-root-link" href="#contact">
                    Contact
                  </a>
                </li>
                <li className="navbar-navigation-root-item">
                  <a className="navbar-navigation-root-link" href="#blog">
                    Blog
                  </a>
                </li>
                <li className="navbar-navigation-root-item">
                  <div>
                    <div>
                      <div className="text-green-500 hover:text-pink-300 cursor-pointer">
                        <FaFacebookMessenger size={30} />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
