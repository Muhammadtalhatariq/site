"use client";
import React from 'react'
import { FaFacebookMessenger } from "react-icons/fa6";

const Nav_center = () => {
   return (
      <>
         <div className="navbar-cell navbar-cell-center ">
            <div className="navbar-panel ">
               <button className="navbar-switch mdi-menu novi-icon" data-multi-switch=""></button>
               <div className="navbar-logo"><a className="navbar-logo-link" href="index.html"><img className="navbar-logo-default" src="https://ld-wt73.template-help.com/wt_prod-29297/images/logo-default-228x67.png" alt="Booo" width="114" height="33" /><img className="navbar-logo-inverse" src="images/logo-inverse-228x67.png" alt="Booo" width="114" height="33" /></a>
               </div>
            </div>
            <div className="navbar-sidebar ">
               <ul className="navbar-navigation rd-navbar-nav">
                  <li className="navbar-navigation-root-item"><a className="navbar-navigation-root-link" href="#about-me">About me</a>
                  </li>
                  <li className="navbar-navigation-root-item"><a className="navbar-navigation-root-link" href="#portfolio">Portfolio</a>
                  </li>
                  <li className="navbar-navigation-root-item"><a className="navbar-navigation-root-link" href="#testimonials">Testimonials</a>
                  </li>
                  <li className="navbar-navigation-root-item"><a className="navbar-navigation-root-link" href="#contact">Contact</a>
                  </li>
                  <li className="navbar-navigation-root-item"><a className="navbar-navigation-root-link" href="#blog">Blog</a>
                  </li>
               </ul>
            </div>
         </div>
         <div className="navbar-cell">
            <div className="navbar-subpanel">
               <div className='text-green-500 hover:text-pink-300 cursor-pointer'>
                  <FaFacebookMessenger size={30} />
               </div>
            </div>
         </div>
      </>
   )
}
export default Nav_center
