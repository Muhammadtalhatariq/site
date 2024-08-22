"use client";

import React, { useRef, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaArrowUp } from "react-icons/fa6";
import { IoArrowDown } from "react-icons/io5";

const Clients = () => {
  return (
    <section className="section section-md bg-left" id="testimonials">
      <div
        className="bg-item bg-image animated fadeInLeftBig"
        data-animate=""
      >
         <img src="images/bg-pattern-1.jpg" alt="" />
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-md-6 animated " data-animate="">
            <div className="swiper-separate-container  ">
              <div
                className="swiper-container swiper-container-initialized swiper-container-vertical swiper-container-autoheight"
                data-swiper=""
              >
                <div className="w-[27rem] h-[26rem] overflow-y-auto bg-white p-4">
                  <div
                    className="swiper-slide swiper-slide-duplicate swiper-slide-prev"
                    data-swiper-slide-index="2"
                  >
                    <blockquote className="">
                      <q className="quote-text h4 ">
                        James is one of the most talented designers we've had
                        the opportunity to work with. His elegant design
                        execution comes with great precision.
                      </q>
                      <div className="flex gap-4 pt-6 pb-12">
                        <img
                          className="rounded-full"
                          src="images/person-03-67x67.jpg"
                          alt=""
                          width="67"
                          height="67"
                        />
                        <div className="quote-author-body">
                          <div className="quote-author-name h4">
                            <cite className="text-red-500">Kate Peters</cite>
                          </div>
                          <div className="quote-author-meta h6">Client</div>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-active"
                    data-swiper-slide-index="0"
                  >
                    <blockquote className="quote quote-1">
                      <q className="quote-text h4">
                        James spends quite a bit of time getting to know his
                        clients and their projects to be able to add tremendous
                        value to them.
                      </q>
                      <div className="flex gap-4 pt-6 pb-12">
                        <img
                          className="rounded-full"
                          src="images/person-01-67x67.jpg"
                          alt=""
                          width="67"
                          height="67"
                        />
                        <div className="quote-author-body">
                          <div className="quote-author-name h4">
                            <cite className="text-red-500">Emma Wilson</cite>
                          </div>
                          <div className="quote-author-meta h6">Client</div>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-next"
                    data-swiper-slide-index="1"
                  >
                    <blockquote className="quote quote-1">
                      <q className="quote-text h4">
                        James is exceptionally talented and very well-versed in
                        both design and web technologies. I highly recommend
                        him.
                      </q>
                      <div className="flex gap-4 pt-6 pb-12">
                        <img
                          className="rounded-full"
                          src="images/person-02-67x67.jpg"
                          alt=""
                          width="67"
                          height="67"
                        />
                        <div className="quote-author-body">
                          <div className="quote-author-name h4">
                            <cite className="text-red-500">John McMillan</cite>
                          </div>
                          <div className="quote-author-meta h6">Client</div>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-duplicate-prev"
                    data-swiper-slide-index="2"
                  >
                    <blockquote className="quote quote-1">
                      <q className="quote-text h4">
                        James is one of the most talented designers we've had
                        the opportunity to work with. His elegant design
                        execution comes with great precision.
                      </q>
                      <div className="flex gap-4 pt-6 pb-12">
                        <img
                          className="rounded-full"
                          src="images/person-03-67x67.jpg"
                          alt=""
                          width="67"
                          height="67"
                        />
                        <div className="quote-author-body">
                          <div className="quote-author-name h4">
                            <cite className="text-red-500">Kate Peters</cite>
                          </div>
                          <div className="quote-author-meta h6">Client</div>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                    data-swiper-slide-index="0"
                  >
                    <blockquote className="quote quote-1">
                      <q className="quote-text h4">
                        James spends quite a bit of time getting to know his
                        clients and their projects to be able to add tremendous
                        value to them.
                      </q>
                      <div className="flex gap-4 pt-6 pb-12">
                        <img
                          className="rounded-full"
                          src="images/person-01-67x67.jpg"
                          alt=""
                          width="67"
                          height="67"
                        />
                        <div className="quote-author-body">
                          <div className="quote-author-name h4">
                            <cite className="text-red-500">Emma Wilson</cite>
                          </div>
                          <div className="quote-author-meta h6">Client</div>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                </div>
                <span
                  className="swiper-notification"
                  aria-live="assertive"
                  aria-atomic="true"
                ></span>
              </div>
              <div className="swiper-separate-navigation">
                <button
                  className="swiper-button swiper-button-next "
                  id="swiper-separate-next"
                  tabIndex="0"
                  role="button"
                  aria-label="Next slide"
                >
                  <FaArrowUp/>
                </button>
                <div className="swiper-pagination swiper-pagination-fraction">
                  <span className="swiper-pagination-current">01</span>/
                  <span className="swiper-pagination-total">03</span>
                </div>
                <button
                  className="swiper-button swiper-button-prev"
                  id="swiper-separate-prev"
                  tabIndex="0"
                  role="button"
                  aria-label="Previous slide"
                >
                  <IoArrowDown/>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center text-sm-left">
            <h2 className="text-decoration animated fadeIn" data-animate="">
              My Clients
            </h2>
            <h5 data-animate="" className="animated fadeIn">
              Read the testimonials submitted by my clients and partners. You
              can fully trust their opinions on my solutions.
            </h5>
            <div
              className="row row-30 row-xxl-50 row-content-2 align-items-center text-center"
              data-animate=""
            >
              <div className="col-xs-6 col-md-4">
                <img
                  src="images/logo-01-86x36.png"
                  alt=""
                  width="86"
                  height="36"
                />
              </div>
              <div className="col-xs-6 col-md-4">
                <img
                  src="images/logo-02-187x30.png"
                  alt=""
                  width="187"
                  height="30"
                />
              </div>
              <div className="col-xs-6 col-md-4">
                <img
                  src="images/logo-03-130x27.png"
                  alt=""
                  width="130"
                  height="27"
                />
              </div>
              <div className="col-xs-6 col-md-4">
                <img
                  src="images/logo-04-123x28.png"
                  alt=""
                  width="123"
                  height="28"
                />
              </div>
              <div className="col-xs-6 col-md-4">
                <img
                  src="images/logo-05-84x17.png"
                  alt=""
                  width="84"
                  height="17"
                />
              </div>
              <div className="col-xs-6 col-md-4">
                <img
                  src="images/logo-06-104x23.png"
                  alt=""
                  width="104"
                  height="23"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
