"use client";

import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaArrowUp } from "react-icons/fa6";
import { IoArrowDown } from "react-icons/io5";

const Clients = () => {
  const testimonials = [
    {
      quote: "James spends quite a bit of time getting to know his clients and their projects to be able to add tremendous value to them.",
      author: "Emma Wilson",
      role: "Client",
      img: "images/person-01-67x67.jpg",
    },
    {
      quote: "James is exceptionally talented and very well-versed in both design and web technologies. I highly recommend him.",
      author: "John McMillan",
      role: "Client",
      img: "images/person-02-67x67.jpg",
    },
    {
      quote: "James is one of the most talented designers we've had the opportunity to work with. His elegant design execution comes with great precision.",
      author: "Kate Peters",
      role: "Client",
      img: "images/person-03-67x67.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="section section-md bg-left" id="testimonials">
      <div className="bg-item hidden sm:flex bg-image animated fadeInLeftBig">
        <img src="images/bg-pattern-1.jpg" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 animated ">
            <div className="swiper-separate-container">
              <div className="w-[27rem] h-[26rem] overflow-hidden bg-white p-4">
                {/* Card Slide */}
                <div className="swiper-slide">
                  <blockquote className="quote">
                    <q className="quote-text h4">
                      {testimonials[currentSlide].quote}
                    </q>
                    <div className="flex gap-4 pt-6 pb-12">
                      <img
                        className="rounded-full"
                        src={testimonials[currentSlide].img}
                        alt={testimonials[currentSlide].author}
                        width="67"
                        height="67"
                      />
                      <div className="quote-author-body">
                        <div className="quote-author-name h4">
                          <cite className="text-red-500">
                            {testimonials[currentSlide].author}
                          </cite>
                        </div>
                        <div className="quote-author-meta h6">
                          {testimonials[currentSlide].role}
                        </div>
                      </div>
                    </div>
                  </blockquote>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="swiper-separate-navigation">
                <button
                  className="swiper-button swiper-button-prev"
                  onClick={handlePrev}
                >
                  <IoArrowDown />
                </button>
                <div className="swiper-pagination swiper-pagination-fraction">
                  <span className="swiper-pagination-current">
                    {String(currentSlide + 1).padStart(2, "0")}
                  </span>
                  /
                  <span className="swiper-pagination-total">
                    {String(testimonials.length).padStart(2, "0")}
                  </span>
                </div>
                <button
                  className="swiper-button swiper-button-next"
                  onClick={handleNext}
                >
                  <FaArrowUp />
                </button>
              </div>
            </div>
          </div>

          {/* Right-side section for logos */}
          <div className="col-md-6 text-center text-sm-left">
            <h2 className="text-decoration animated fadeIn">My Clients</h2>
            <h5 className="animated fadeIn">
              Read the testimonials submitted by my clients and partners. You
              can fully trust their opinions on my solutions.
            </h5>
            <div className="row row-30 row-xxl-50 row-content-2 align-items-center text-center">
              {/* Client logos */}
              <div className="col-xs-6 col-md-4">
                <img
                  src="images/logo-01-86x36.png"
                  alt="logo1"
                  width="86"
                  height="36"
                />
              </div>
              <div className="col-xs-6 col-md-4">
                <img
                  src="images/logo-02-187x30.png"
                  alt="logo2"
                  width="187"
                  height="30"
                />
              </div>
              <div className="col-xs-6 col-md-4">
                <img
                  src="images/logo-03-130x27.png"
                  alt="logo3"
                  width="130"
                  height="27"
                />
              </div>
              <div className="col-xs-6 col-md-4">
                <img
                  src="images/logo-04-123x28.png"
                  alt="logo4"
                  width="123"
                  height="28"
                />
              </div>
              <div className="col-xs-6 col-md-4">
                <img
                  src="images/logo-05-84x17.png"
                  alt="logo5"
                  width="84"
                  height="17"
                />
              </div>
              <div className="col-xs-6 col-md-4">
                <img
                  src="images/logo-06-104x23.png"
                  alt="logo6"
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
