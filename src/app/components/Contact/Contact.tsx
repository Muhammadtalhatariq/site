import React from 'react'
import { MessageCircleMore } from 'lucide-react'

const Contact = () => {
  return (
    <section className="section section-md bg-100 bg-overlay" id="contact">
      <div className="bg-overlay-item bg-secondary"></div>
      <div className="container">
        <div className="row row-20">
          <div className="col-sm-6 animated fadeIn" data-animate="">
            <h2 className="text-decoration">Get in Touch</h2>
          </div>
          <div className="col-sm-6 animated fadeIn" data-animate="">
            <h5 className="text-dark">Feel free to contact me to discuss your next design or branding project. I’m open to everything!</h5>
          </div>
        </div>
        <form className="rd-form rd-form-boxed rd-mailform" data-form-output="contact-form" data-form-type="contact" method="post" action="components/rd-mailform/rd-mailform.php" data-animate="" noValidate="novalidate">
          <div className="row row-gutters-20 row-20 row-xxl-40 align-items-center">
            <div className="col-md-4">
              <div className="form-group">
                <label className="form-label" htmlFor="form-name">Your name</label>
                <div className="form-control-wrap">
                  <input className="form-control form-control-has-validation form-control-last-child" id="form-name" type="text" name="name" placeholder="Your name" data-constraints="@Required" /><span className="form-validation"></span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label className="form-label" htmlFor="form-email">Your E-mail</label>
                <div className="form-control-wrap">
                  <input className="form-control form-control-has-validation form-control-last-child" id="form-email" type="email" name="email" placeholder="E-mail" data-constraints="@Email @Required" /><span className="form-validation"></span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label className="form-label" htmlFor="form-phone">Your Phone</label>
                <div className="form-control-wrap">
                  <input className="form-control form-control-has-validation form-control-last-child" id="form-phone" type="text" name="phone" placeholder="Phone" data-constraints="@Numeric @Required" /><span className="form-validation"></span>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label className="form-label" htmlFor="form-Message">Your Message</label>
                <div className="form-control-wrap">
                  <textarea className="form-control form-control-has-validation form-control-last-child" id="form-Message" name="textarea" placeholder="Message" data-constraints="@Required"></textarea><span className="form-validation"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="rd-form-btn text-left">
            <button className="btn" type="submit">Send Message</button>
          </div>
        </form>
        <div className="form-output snackbar snackbar-primary" id="contact-form"></div>
      </div>
    </section>
  )
}

export default Contact
