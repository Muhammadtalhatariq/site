import React from "react";

const AboutUs = () => {
  //  style = "background-image:url( images/bg-pattern-3.jpg )"

  return (
    <section
      className="section section-md bg-left-1 text-center text-sm-left"
      id="about-me"
    >
      <div className="bg-item bg-image overflow-hidden" data-animate="">
        {" "}
        <img src="images/bg-pattern-1.jpg" alt="" />
      </div>
      <div className="container">
        <div className="row row-30">
          <div className="col-sm-6">
            <div className="image-container" data-animate="">
              <img
                className="image"
                src="images/image-01-424x491.jpg"
                alt=""
                width="424"
                height="491"
              />
            </div>
          </div>
          <div className="col-sm-6" data-animate="">
            <h2 className="text-decoration">About me</h2>
            <h5>
              My name is James Adams. I’m a UI/UX &amp; graphic designer. I
              believe that a well-designed product leads a business to success.
            </h5>
            <h5>
              I love learning how people think and behave, and I leverage
              research to design user-centered products and experiences which
              solve both user and business problems.
            </h5>
            <div className="btn-group-1">
              <a className="btn" href="#">
                Send message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
