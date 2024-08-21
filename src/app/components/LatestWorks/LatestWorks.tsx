"use client";

import React, { useState } from "react";

import { ArrowRight, ArrowLeft } from "lucide-react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

const LatestWorks = () => {
  return (
    <section
      className="section section-md bg-100 overflow-hidden"
      id="portfolio"
    >
      <div className="container">
        <div className="row row-30 row-lg-50 justify-content-md-between align-items-center">
          <div className="col-sm-8 col-md-7 col-xxl-5">
            <h2 className="text-decoration animated fadeIn" data-animate="">
              Latest works
            </h2>
            <h5 data-animate="" className="animated fadeIn">
              Check out my recent and popular design &amp; branding projects I
              have worked on.
            </h5>
          </div>
          <div
            className="col-sm-4 col-md-5 col-xxl-3 text-sm-right text-lg-center animated fadeInRight"
            data-animate='{"class":"fadeInRight"}'
          >
            <div className="separate-owl-nav" id="separate-owl-nav">
              <button type="button" role="presentation" className="owl-prev">
                {" "}
                <ArrowLeft />{" "}
              </button>
              <button type="button" role="presentation" className="owl-next">
                <ArrowRight />
              </button>
            </div>
          </div>
          <div className="col-12" data-animate="">
            <div
              className="owl-carousel owl-carousel-separate owl-loaded owl-drag"
              data-owl=""
              data-items="1"
              data-sm-items="2"
              data-md-items="3"
              data-autoplay="false"
              data-loop="false"
              data-xxl-margin="54"
            >
              <div className="owl-stage-outer owl-height">
                <div className="flex gap-7 overflow-x-auto">
                  <div className="owl-item active">
                    <div className="w-96">
                      <div className="thumbnail-media">
                        <img
                          className=""
                          src="images/image-02-432x228.jpg"
                          alt=""
                     
                        />
                        <div className="thumbnail-tags">
                          <a className="bg-white text-black hover:bg-red-500 hover:text-white p-2" href="#">
                            Design
                          </a>
                          <a className="bg-white text-black hover:bg-red-500 hover:text-white p-2" href="#">
                            Branding
                          </a>
                        </div>
                      </div>
                      <div className="pl-8 pt-4">
                        <div className="thumbnail-title h4">
                          <a href="#">Donut Country</a>
                        </div>
                        <button
                          className="thumbnail-link h5"
                          data-toggle="modal"
                          data-target="#modal-project"
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item active">
                    <div className="w-96 ">
                      <div className="">
                        <img
                          className="h-[24rem]"
                          src="images/image-03-432x238.jpg"
                          alt=""
                       
                        />
                        <div className="thumbnail-tags">
                          <a className="bg-white text-black hover:bg-red-500 hover:text-white p-2" href="#">
                            Design
                          </a>
                        </div>
                      </div>
                      <div className="pl-8 pt-4">
                        <div className="thumbnail-title h4">
                          <a href="#">Furni</a>
                        </div>
                        <button
                          className="thumbnail-link h5"
                          data-toggle="modal"
                          data-target="#modal-project"
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item active">
                    <div className="w-[21rem]">
                      <div className="">
                        <img
                          className="h-60"
                          src="images/image-04-432x228.jpg"
                          alt=""
                       
                        />
                        <div className="thumbnail-tags">
                          <a className="bg-white text-black hover:bg-red-500 hover:text-white p-2" href="#">
                            Design
                          </a>
                          <a className="bg-white text-black hover:bg-red-500 hover:text-white p-2" href="#">
                            Branding
                          </a>
                          <a className="bg-white text-black hover:bg-red-500 hover:text-white p-2" href="#">
                            Logo
                          </a>
                        </div>
                      </div>
                      <div className="pl-8 pt-4">
                        <div className=" h4 duration-300">
                          <a href="#">uDesign</a>
                        </div>
                        <button
                          className="thumbnail-link h5"
                          data-toggle="modal"
                          data-target="#modal-project"
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="size-96">
                      <div className="">
                        <img
                          className=""
                          src="images/image-05-432x238.jpg"
                          alt=""
                       
                        />
                        <div className="thumbnail-tags">
                          <a className="bg-white text-black hover:bg-red-500 hover:text-white p-2" href="#">
                            Design
                          </a>
                          <a className="bg-white text-black hover:bg-red-500 hover:text-white p-2" href="#">
                            Branding
                          </a>
                        </div>
                      </div>
                      <div className="pl-8 pt-4">
                        <div className="thumbnail-title h4">
                          <a href="#">ProKnife</a>
                        </div>
                        <button
                          className="thumbnail-link h5"
                          data-toggle="modal"
                          data-target="#modal-project"
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="w-96">
                      <div className="">
                        <img
                          className="h-60"
                          src="images/image-06-432x228.jpg"
                          alt=""
                        
                        />
                        <div className="thumbnail-tags">
                          <a className="bg-white text-black hover:bg-red-500 hover:text-white p-2" href="#">
                            Design
                          </a>
                          <a className="bg-white text-black hover:bg-red-500 hover:text-white p-2" href="#">
                            Branding
                          </a>
                        </div>
                      </div>
                      <div className="pl-8 pt-4">
                        <div className="thumbnail-title h4">
                          <a href="#">Floral Paradise</a>
                        </div>
                        <button
                          className="thumbnail-link h5"
                          data-toggle="modal"
                          data-target="#modal-project"
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="size-96">
                      <div className="">
                        <img
                          className="thumbnail-img"
                          src="images/image-07-432x238.jpg"
                          alt=""
                          width="432"
                          height="238"
                        />
                        <div className="thumbnail-tags">
                          <a className="bg-white text-black hover:bg-red-500 hover:text-white p-2" href="#">
                            Design
                          </a>
                        </div>
                      </div>
                      <div className="pl-8 pt-4">
                        <div className="thumbnail-title h4">
                          <a href="#">Poultrix</a>
                        </div>
                        <button
                          className="thumbnail-link h5"
                          data-toggle="modal"
                          data-target="#modal-project"
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-dots disabled"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWorks;
