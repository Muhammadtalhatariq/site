import React from "react";
import { Package, Droplet, Rocket } from "lucide-react";

const Blog = () => {
  // style="background-image:url( images/bg-pattern-2.jpg )"

  return (
    <section className="section section-md bg-right" id="blog">
      <div className="bg-item-1 overflow-hidden hidden md:flex">
        <img className="h-[82rem]" src="images/bg-pattern-1.jpg" alt="" />
      </div>
      <div className="bg-item-2 bg-secondary"></div>
      <div className="container">
        <h2
          className="text-decoration text-center text-sm-left animated fadeIn"
          data-animate=""
        >
          My Blog
        </h2>
        <div className="post-container">
          <div
            className="post post-side animated fadeInRightBig"
            data-animate=""
          >
            <a className="post-media" href="#">
              <img
                className="post-img"
                src="images/image-08-287x239.jpg"
                alt=""
                width="287"
                height="239"
              />
            </a>
            <div className="post-body">
              <div className="post-meta">
                <div className="post-meta-item">
                  <div className="post-date h5">April 25, 2020</div>
                </div>
              </div>
              <div className="post-title h4">
                <a href="#">Why Are All Sites Optimizing For Smartphones?</a>
              </div>
              <div className="post-text">
                Sites were developed for desktop devices at first but as the
                worldwide smartphone usage rate increased so did the site
                developers look for...
              </div>
            </div>
          </div>

          <div className="post post-side " data-animate="">
            <a className="post-media" href="#">
              <img
                className="post-img"
                src="images/image-09-287x239.jpg"
                alt=""
                width="287"
                height="239"
              />
            </a>
            <div className="post-body">
              <div className="post-meta">
                <div className="post-meta-item">
                  <div className="post-date h5">April 25, 2020</div>
                </div>
              </div>
              <div className="post-title h4">
                <a href="#">How to Start Promoting Your Own Blog</a>
              </div>
              <div className="post-text">
                Promoting your blog is sometimes more difficult than creating it
                at all. But it is still wholly possible without paid
                advertisement or being a celebrity...
              </div>
            </div>
          </div>

          <div className="post post-side" data-animate="">
            <a className="post-media" href="#">
              <img
                className="post-img"
                src="images/image-10-287x239.jpg"
                alt=""
                width="287"
                height="239"
              />
            </a>
            <div className="post-body">
              <div className="post-meta">
                <div className="post-meta-item">
                  <div className="post-date h5">April 25, 2020</div>
                </div>
              </div>
              <div className="post-title h4">
                <a href="#">
                  25 Steps to Make Sure that Your Website is Pleasant to Use
                </a>
              </div>
              <div className="post-text">
                Using the internet means browsing various websites for important
                information. Or, if you’re one of those people who like to
                browse YouTube...
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
