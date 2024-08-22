import React from "react";
import { FaFacebookMessenger } from "react-icons/fa6";
const Header = () => {
  return (
    <header
      className="section rd-navbar-wrap rd-navbar-wrap-absolute"
      data-preset=""
    >
      <nav className="rd-navbar rd-navbar-original rd-navbar-fullwidth">
        <div className="navbar-container">
          <div className="navbar-cell navbar-subpanel-contact">
            <div className="navbar-contact">
              <button
                className="navbar-button navbar-contact-btn"
                data-multi-switch=""
              >
                <span></span>
              </button>
              <div className="navbar-contact-body">
                <div className="navbar-contact-title h4">
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
          <div className="navbar-cell navbar-cell-center ">
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
                    // src="images/logo-inverse-228x67.png"
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
              </ul>
            </div>
          </div>
          <div className="navbar-cell">
            <div className="navbar-subpanel">
              <div className="text-green-500 hover:text-pink-300 cursor-pointer">
                <FaFacebookMessenger size={30} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
