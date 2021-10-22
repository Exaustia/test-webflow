/* eslint-disable */

import React from "react";
import { createScope, map, transformProxies } from "./helpers";

const scripts = [
  {
    loading: fetch(
      "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6171e058e5c2c80d30427f21"
    ).then((body) => body.text()),
    isAsync: false,
  },
  {
    loading: fetch("js/webflow.js").then((body) => body.text()),
    isAsync: false,
  },
];

let Controller;

class ServicesView extends React.Component {
  static get Controller() {
    if (Controller) return Controller;

    try {
      Controller = require("..controllers/ServicesController");
      Controller = Controller.default || Controller;

      return Controller;
    } catch (e) {
      if (e.code == "MODULE_NOT_FOUND") {
        Controller = ServicesView;

        return Controller;
      }

      throw e;
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector("html");
    htmlEl.dataset["wfPage"] = "6171e058e5c2c8c95e427f2f";
    htmlEl.dataset["wfSite"] = "6171e058e5c2c80d30427f21";

    scripts.concat(null).reduce((active, next) =>
      Promise.resolve(active).then((active) => {
        const loading = active.loading.then((script) => {
          new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script);

          return next;
        });

        return active.isAsync ? next : loading;
      })
    );
  }

  render() {
    const proxies =
      ServicesView.Controller !== ServicesView
        ? transformProxies(this.props.children)
        : {};

    return (
      <span>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\webflow.css);
          @import url(C:\\css\\exaustias-stunning-site-a48347.webflow.css);
        `,
          }}
        />
        <span className="af-view">
          <div>
            <div
              data-collapse="medium"
              data-animation="default"
              data-duration={400}
              data-easing="ease"
              data-easing2="ease"
              role="banner"
              className="af-class-navbar w-nav"
            >
              <div className="w-container">
                <a href="/" className="af-class-brand-wrapper w-nav-brand">
                  <div className="af-class-logo-text">terminal</div>
                </a>
                <nav
                  role="navigation"
                  className="af-class-nav-menu w-clearfix w-nav-menu"
                >
                  <a href="/" className="af-class-nav-link w-nav-link">
                    HOME
                  </a>
                  <a
                    href="pricing.html"
                    className="af-class-nav-link w-nav-link"
                  >
                    pricing
                  </a>
                  <a
                    href="services.html"
                    aria-current="page"
                    className="af-class-nav-link w-nav-link w--current"
                  >
                    services
                  </a>
                  <a href="about.html" className="af-class-nav-link w-nav-link">
                    About
                  </a>
                  <a
                    href="contact.html"
                    className="af-class-nav-link w-nav-link"
                  >
                    Contact
                  </a>
                  <a
                    href="contact.html"
                    className="af-class-nav-link af-class-right w-nav-link"
                  >
                    SIGN UP
                  </a>
                </nav>
                <div className="af-class-menu-button w-nav-button">
                  <div className="w-icon-nav-menu" />
                </div>
              </div>
            </div>
            <div className="af-class-section af-class-black af-class-wf-section">
              <div className="w-container">
                <div className="af-class-title">
                  <h1>OUR SERVICES</h1>
                  <div className="af-class-subtitle">
                    What started as a dorm room project exploded into an
                    internet sensation!
                  </div>
                </div>
                <div className="w-row">
                  <div className="w-col w-col-4">
                    <div className="af-class-service-block">
                      <h1 className="af-class-number">1.</h1>
                      <h3 className="af-class-service-title">Time tracking</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum
                        tristique.&nbsp;
                      </p>
                    </div>
                  </div>
                  <div className="w-col w-col-4">
                    <div className="af-class-service-block">
                      <h1 className="af-class-number">2.</h1>
                      <h3 className="af-class-service-title">cloud hosting</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum
                        tristique.&nbsp;
                      </p>
                    </div>
                  </div>
                  <div className="w-col w-col-4">
                    <div className="af-class-service-block">
                      <h1 className="af-class-number">3.</h1>
                      <h3 className="af-class-service-title">booking</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum
                        tristique.&nbsp;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-section af-class-darkgrey af-class-wf-section">
              <div className="w-container">
                <div className="w-row">
                  <div className="w-col w-col-8">
                    <h2>Time Tracking</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </p>
                    <a href="#" className="af-class-get-started-link">
                      Get started now&nbsp;&nbsp;&nbsp;❯&nbsp;
                    </a>
                  </div>
                  <div className="af-class-center w-col w-col-4">
                    <img
                      src="images/All-devices.png"
                      srcSet="images/All-devices-p-500x288.png 500w, images/All-devices.png 1131w"
                      sizes="(max-width: 479px) 64vw, (max-width: 767px) 46vw, (max-width: 991px) 229.328125px, 299.984375px"
                      alt
                      className="af-class-all-devices-image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-section af-class-darkestgrey af-class-wf-section">
              <div className="w-container">
                <div className="w-row">
                  <div className="w-col w-col-6">
                    <ul
                      role="list"
                      className="af-class-feature-list af-class-no-padding w-list-unstyled"
                    >
                      <li className="af-class-feature-item w-clearfix">
                        <div className="af-class-feature-icon-wrapper">
                          <img
                            src="images/icon_56icon_55.png"
                            width={30}
                            alt
                            className="af-class-feature-icon"
                          />
                        </div>
                        <div className="af-class-feature-text af-class-title">
                          Record your work.
                        </div>
                        <div className="af-class-feature-text">
                          Vivamus sollicitudin, felis vitae facilisis.
                        </div>
                      </li>
                      <li className="af-class-feature-item w-clearfix">
                        <div className="af-class-feature-icon-wrapper">
                          <img
                            src="images/icon_52icon_51.png"
                            width={30}
                            alt
                            className="af-class-feature-icon"
                          />
                        </div>
                        <div className="af-class-feature-text af-class-title">
                          Play it back.
                        </div>
                        <div className="af-class-feature-text">
                          Vivamus sollicitudin, felis vitae facilisis mollis,
                          diam.
                        </div>
                      </li>
                      <li className="af-class-feature-item w-clearfix">
                        <div className="af-class-feature-icon-wrapper">
                          <img
                            src="images/icon_54icon_53.png"
                            width={30}
                            alt
                            className="af-class-feature-icon"
                          />
                        </div>
                        <div className="af-class-feature-text af-class-title">
                          Pause at any moment.
                        </div>
                        <div className="af-class-feature-text">
                          Vivamus sollicitudin, felis vitae facilisis mollis.
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="w-col w-col-6">
                    <h2>Cloud Hosting</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-section af-class-darkgrey af-class-wf-section">
              <div className="w-container">
                <div className="w-row">
                  <div className="w-col w-col-6">
                    <h2>Booking</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare.
                    </p>
                  </div>
                  <div className="w-col w-col-6">
                    <ul
                      role="list"
                      className="af-class-feature-list af-class-no-padding w-list-unstyled"
                    >
                      <li className="af-class-feature-item w-clearfix">
                        <div className="af-class-feature-icon-wrapper">
                          <img
                            src="images/icon_26icon_25.png"
                            width={30}
                            alt
                            className="af-class-feature-icon"
                          />
                        </div>
                        <div className="af-class-feature-text af-class-title">
                          Track your time on your phone.
                        </div>
                        <div className="af-class-feature-text">
                          Vivamus sollicitudin, felis vitae facilisis.
                        </div>
                      </li>
                      <li className="af-class-feature-item w-clearfix">
                        <div className="af-class-feature-icon-wrapper">
                          <img
                            src="images/icon_4icon_03.png"
                            width={30}
                            alt
                            className="af-class-feature-icon"
                          />
                        </div>
                        <div className="af-class-feature-text af-class-title">
                          Create and edit all your projects.
                        </div>
                        <div className="af-class-feature-text">
                          Vivamus sollicitudin, felis vitae facilisis mollis,
                          diam.
                        </div>
                      </li>
                      <li className="af-class-feature-item w-clearfix">
                        <div className="af-class-feature-icon-wrapper">
                          <img
                            src="images/icon_9icon_08.png"
                            width={30}
                            alt
                            className="af-class-feature-icon"
                          />
                        </div>
                        <div className="af-class-feature-text af-class-title">
                          Send it and get paid.
                        </div>
                        <div className="af-class-feature-text">
                          Vivamus sollicitudin, felis vitae facilisis mollis.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-no-pad-section af-class-wf-section">
              <div className="w-row">
                <div className="af-class-padded-column af-class-picture w-col w-col-6" />
                <div className="af-class-padded-column w-col w-col-6">
                  <div className="af-class-width-limiter">
                    <h2>Also: Rockin' Support</h2>
                    <p>
                      Our support is pretty cool. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Suspendisse varius enim in
                      eros elementum tristique. Duis cursus, mi quis viverra
                      ornare, eros dolor interdum nulla, ut commodo diam libero
                      vitae erat. Aenean faucibus nibh et justo cursus id rutrum
                      lorem imperdiet. Nunc ut sem vitae risus tristique
                      posuere.
                    </p>
                  </div>
                  <a
                    href="contact.html"
                    className="af-class-get-started-link af-class-simple"
                  >
                    get support now
                  </a>
                </div>
              </div>
            </div>
            <div className="af-class-section af-class-sign-up af-class-wf-section">
              <div className="w-container">
                <div className="w-row">
                  <div className="w-col w-col-8">
                    <h2 className="af-class-sign-up-title">
                      Start tracking your time Today!
                    </h2>
                    <div className="af-class-subtitle af-class-pricing">
                      Clocks are so 2000. Get the time tracking of the future.
                    </div>
                  </div>
                  <div className="af-class-sign-up-column w-col w-col-4">
                    <a href="#" className="af-class-button">
                      SIGN UP TODAY&nbsp;&nbsp;&nbsp;❯
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-section af-class-footer af-class-wf-section">
              <div className="w-container">
                <div className="w-row">
                  <div className="af-class-footer-column w-col w-col-3">
                    <h4>COMPANY</h4>
                    <ul role="list" className="w-list-unstyled">
                      <li>
                        <a href="#" className="af-class-footer-link">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="#" className="af-class-footer-link">
                          About Terminal
                        </a>
                      </li>
                      <li>
                        <a href="#" className="af-class-footer-link">
                          Services
                        </a>
                      </li>
                      <li>
                        <a href="#" className="af-class-footer-link">
                          Plans &amp; Pricing
                        </a>
                      </li>
                      <li>
                        <a href="#" className="af-class-footer-link">
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="af-class-footer-column w-col w-col-3">
                    <h4>get help</h4>
                    <ul role="list" className="w-list-unstyled">
                      <li>
                        <a href="#" className="af-class-footer-link">
                          Knowledge Base
                        </a>
                      </li>
                      <li>
                        <a href="#" className="af-class-footer-link">
                          Frequently Asked Questions
                        </a>
                      </li>
                      <li>
                        <a href="#" className="af-class-footer-link">
                          Forum
                        </a>
                      </li>
                      <li>
                        <a href="#" className="af-class-footer-link">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="af-class-footer-column w-col w-col-3">
                    <h4>Boring Stuff</h4>
                    <ul role="list" className="w-list-unstyled">
                      <li>
                        <a href="#" className="af-class-footer-link">
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href="#" className="af-class-footer-link">
                          Terms of Service
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="af-class-footer-column w-col w-col-3">
                    <div className="w-form">
                      <form
                        name="email-form"
                        data-name="Email Form"
                        className="w-clearfix"
                      >
                        <input
                          type="text"
                          name="email"
                          data-name="Email"
                          placeholder="Your email"
                          maxLength={256}
                          required
                          className="af-class-field-left w-input"
                        />
                        <input
                          type="submit"
                          data-wait="Wait..."
                          wait="Wait..."
                          defaultValue="OK"
                          className="af-class-button af-class-form w-button"
                        />
                        <div className="af-class-no-spam">
                          We send about 2 emails a month
                        </div>
                      </form>
                      <div className="af-class-success-message w-form-done">
                        <p>
                          Thank you! You'll be receiving some awesome emails!
                        </p>
                      </div>
                      <div className="w-form-fail">
                        <p>
                          Oops! Something went wrong while submitting the form
                          :(
                        </p>
                      </div>
                    </div>
                    <div>
                      <a
                        href="http://www.facebook.com/webflow"
                        className="af-class-social-link w-inline-block"
                      >
                        <img src="images/twitter-icon.svg" alt />
                      </a>
                      <a
                        href="http://www.facebook.com/webflow"
                        className="af-class-social-link w-inline-block"
                      >
                        <img src="images/facebook-icon.svg" alt />
                      </a>
                    </div>
                    <div className="af-class-logo-text af-class-footer">
                      terminal
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    );
  }
}

export default ServicesView;

/* eslint-enable */
