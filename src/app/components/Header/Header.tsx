"use client";
import React, { useState, useEffect } from "react";
import { FaFacebookMessenger } from "react-icons/fa6";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
const nevItems = [
  {
    name: "About me",
    path: "#about-me",
  },
  {
    name: "Portfolio",
    path: "#portfolio",
  },
  {
    name: "Testimonials",
    path: "#testimonials",
  },
  {
    name: "Contact",
    path: "#contact",
  },
  {
    name: "Blog",
    path: "#blog",
  },
];

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleNav = () => {
    setOpenMenu(!openMenu);
  };

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
      className=" rd-navbar-wrap rd-navbar-wrap-absolute "
      data-preset=""
    >
      <nav className="rd-navbar rd-navbar-original rd-navbar-fullwidth">
        <div className="">

          {/* sub  */}
          {/* <div className="navbar-cell navbar-subpanel-contact">
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
          </div> */}


          {/* header  */}

          <div className="font-sans z-50 fixed lg:h-2 h-20 w-full bg-white  flex justify-between items-center ">
           <div className="w-full flex justify-between items-center pt-16 bg-white">
           <div >
              <div className=" navbar-panel hidden lg:flex pl-20 ">
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
            </div>
            <div>
              <ul className="hidden lg:flex list-none gap-5 ">
                {nevItems.map((item) => (
                  <li
                    className="text-black duration-1000 navbar-navigation-root-item"
                    key={item.path}
                  >
                    <Link
                      className="navbar-navigation-root-link"
                      href={item.path}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}

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
            {/* mbl view  */}
            <div
              onClick={handleNav}
              className="lg:hidden flex justify-between bg-white "
            >
              <div className="cursor-pointer absolute  left-5 text-black hover:text-green-500">
                <IoMdMenu size={30} />
              </div>
              <div>
                {openMenu && (
                  <div className="fixed h-full w-80 list-none gap-5 bg-white shadow-lg text-black top-20 translate-x-0 duration-700 ease-out left-0 animate-slide-down ">
                    <ul className="flex flex-col pl-3 gap-1">
                      {nevItems.map((item) => (
                        <li
                          className="py-3 text-black duration-1000 navbar-navigation-root-item"
                          key={item.path}
                        >
                          <Link
                            className="navbar-navigation-root-link"
                            href={item.path}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <li>
                <div className=" absolute left-36 md:left-[50%]">
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
              </li>
              <li className="">
                <div>
                  <div>
                    <div className="text-black hover:text-pink-300 cursor-pointer">
                      <HiOutlineDotsVertical />
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex items-center pr-2">
                <div>
                  <div>
                    <div className="text-green-500 hover:text-pink-300 cursor-pointer">
                      <FaFacebookMessenger size={15} />
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
