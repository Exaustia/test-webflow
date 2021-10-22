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

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller;

    try {
      Controller = require("..controllers/IndexController");
      Controller = Controller.default || Controller;

      return Controller;
    } catch (e) {
      if (e.code == "MODULE_NOT_FOUND") {
        Controller = IndexView;

        return Controller;
      }

      throw e;
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector("html");
    htmlEl.dataset["wfPage"] = "6171e058e5c2c82cfb427f2a";
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
      IndexView.Controller !== IndexView
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
                <a
                  href="index.html"
                  aria-current="page"
                  className="af-class-brand-wrapper w-nav-brand w--current"
                >
                  <div className="af-class-logo-text">terminal</div>
                </a>
                <nav
                  role="navigation"
                  className="af-class-nav-menu w-clearfix w-nav-menu"
                >
                  <a
                    href="index.html"
                    aria-current="page"
                    className="af-class-nav-link w-nav-link w--current"
                  >
                    HOME
                  </a>
                  <a
                    href="pricing.html"
                    className="af-class-nav-link w-nav-link"
                  >
                    pricing
                  </a>
                  <a href="services" className="af-class-nav-link w-nav-link">
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
                    href="sign-up.html"
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
            <div className="af-class-section af-class-hero af-class-wf-section">
              <div className="w-container">
                <h1 className="af-class-small-heading">Time tracking IS NOW</h1>
                <h1 className="af-class-huge-heading">
                  beautiful &amp; POWERFUL
                </h1>
                <p className="af-class-subtitle">
                  Terminal is a time tracking web app and iPhone app that will
                  change your life.&nbsp;
                </p>
                <a href="sign-up.html" className="af-class-button">
                  GET STARTED NOW
                </a>
                <a href="#learn-more" className="af-class-outline-button">
                  LEARN MORE
                </a>
                <div className="af-class-image-crop af-class-hero">
                  <img
                    src="images/black-ipad.png"
                    width={480}
                    sizes="(max-width: 767px) 92vw, 480px"
                    srcSet="images/black-ipad-p-500x650.png 500w, images/black-ipad-p-800x1039.png 800w, images/black-ipad-p-1080x1403.png 1080w, images/black-ipad.png 1938w"
                    alt
                  />
                </div>
              </div>
            </div>
            <div className="af-class-section af-class-press af-class-wf-section">
              <div className="w-container">
                <div className="af-class-press-image-wrapper af-class-title">
                  <div className="af-class-press-title">In the press</div>
                </div>
                <div className="af-class-press-image-wrapper">
                  <img
                    src="images/logo_Forbes.svg"
                    alt
                    className="af-class-press-logo"
                  />
                </div>
                <div className="af-class-press-image-wrapper">
                  <img
                    src="images/logo_Fastcompany.svg"
                    alt
                    className="af-class-press-logo"
                  />
                </div>
                <div className="af-class-press-image-wrapper">
                  <img
                    src="images/logo_Wired.svg"
                    alt
                    className="af-class-press-logo"
                  />
                </div>
                <div className="af-class-press-image-wrapper">
                  <img
                    src="images/logo_zdnet.svg"
                    alt
                    className="af-class-press-logo"
                  />
                </div>
                <div className="af-class-press-image-wrapper">
                  <a href="#" className="w-inline-block">
                    <img
                      src="images/logo_techcrunch.svg"
                      alt
                      className="af-class-press-logo"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              id="learn-more"
              className="af-class-section af-class-darkgrey af-class-wf-section"
            >
              <div className="w-container">
                <div className="w-row">
                  <div className="w-col w-col-8">
                    <h2>Time Tracking... everywhere</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </p>
                    <a
                      href="sign-up.html"
                      className="af-class-get-started-link"
                    >
                      Get started now&nbsp;&nbsp;&nbsp;❯&nbsp;
                    </a>
                  </div>
                  <div className="af-class-center w-col w-col-4">
                    <img
                      src="images/All-devices.png"
                      sizes="(max-width: 479px) 64vw, (max-width: 767px) 46vw, (max-width: 991px) 229.328125px, 299.984375px"
                      srcSet="images/All-devices-p-500x288.png 500w, images/All-devices.png 1131w"
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
                  <div className="w-col w-col-7">
                    <div className="af-class-image-crop">
                      <img
                        src="images/black-ipad.png"
                        width={490}
                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 88vw, (max-width: 991px) 416.328125px, 490px"
                        srcSet="images/black-ipad-p-500x650.png 500w, images/black-ipad-p-800x1039.png 800w, images/black-ipad-p-1080x1403.png 1080w, images/black-ipad.png 1938w"
                        alt
                        className="af-class-ipad-image"
                      />
                    </div>
                  </div>
                  <div className="w-col w-col-5">
                    <h2>Easy to use</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </p>
                    <ul
                      role="list"
                      className="af-class-feature-list w-list-unstyled"
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
                </div>
              </div>
            </div>
            <div className="af-class-section af-class-darkgrey af-class-wf-section">
              <div className="w-container">
                <div className="w-row">
                  <div className="w-col w-col-5">
                    <h2>you can take it anywhere</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare.
                    </p>
                    <ul
                      role="list"
                      className="af-class-feature-list w-list-unstyled"
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
                  <div className="af-class-image-column w-col w-col-7">
                    <div className="af-class-image-crop af-class-iphone">
                      <img
                        src="images/iPhone-flat2x.png"
                        width={281}
                        alt
                        className="af-class-iphone-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-section af-class-black af-class-wf-section">
              <div className="w-container">
                <div className="af-class-title">
                  <h2>Our Pricing is simple</h2>
                  <p>
                    No commitments. No credit cards required. Start your 14-day
                    trial today!
                  </p>
                </div>
                <div className="af-class-pricing-row w-row">
                  <div className="w-col w-col-4">
                    <div className="af-class-pricing-column">
                      <h3 className="af-class-plan-title">solo</h3>
                      <div className="af-class-price">$10</div>
                      <div className="af-class-per-month">PER MONTH</div>
                      <div className="af-class-price-feature-list">
                        <div className="af-class-price-feature">1 Project</div>
                        <div className="af-class-price-feature">
                          100 Hours of Tracked Time
                        </div>
                        <div className="af-class-price-feature af-class-deactivate">
                          No Team Collaborators
                        </div>
                        <div className="af-class-price-feature">
                          Email Support
                        </div>
                      </div>
                      <a
                        href="sign-up.html"
                        className="af-class-get-started-link af-class-pricing"
                      >
                        Get Started now&nbsp;&nbsp;&nbsp;❯
                      </a>
                    </div>
                  </div>
                  <div className="w-col w-col-4">
                    <div className="af-class-pricing-column">
                      <h3 className="af-class-plan-title af-class-pro">pro</h3>
                      <div className="af-class-price">$20</div>
                      <div className="af-class-per-month">PER MONTH</div>
                      <div className="af-class-price-feature-list">
                        <div className="af-class-price-feature">
                          10 Projects
                        </div>
                        <div className="af-class-price-feature">
                          Unlimited Hours
                        </div>
                        <div className="af-class-price-feature af-class-deactivate">
                          No Team Collaborators
                        </div>
                        <div className="af-class-price-feature">
                          Email Support
                        </div>
                      </div>
                      <a
                        href="sign-up.html"
                        className="af-class-get-started-link af-class-pricing"
                      >
                        Get Started now&nbsp;&nbsp;&nbsp;❯
                      </a>
                    </div>
                  </div>
                  <div className="w-col w-col-4">
                    <div className="af-class-pricing-column">
                      <h3 className="af-class-plan-title">team</h3>
                      <div className="af-class-price">$30</div>
                      <div className="af-class-per-month">PER MONTH</div>
                      <div className="af-class-price-feature-list">
                        <div className="af-class-price-feature">
                          Unlimited Projects
                        </div>
                        <div className="af-class-price-feature">
                          Unlimited Hours
                        </div>
                        <div className="af-class-price-feature">
                          5 Team Collaborators
                        </div>
                        <div className="af-class-price-feature">
                          Priority Email Support
                        </div>
                      </div>
                      <a
                        href="sign-up.html"
                        className="af-class-get-started-link af-class-pricing"
                      >
                        Get Started now&nbsp;&nbsp;&nbsp;❯
                      </a>
                    </div>
                  </div>
                </div>
                <p className="af-class-support">
                  Need Help? Reach us at contact@terminal.com
                </p>
              </div>
            </div>
            <div className="af-class-no-pad-section af-class-wf-section">
              <div className="w-row">
                <div className="af-class-padded-column af-class-picture w-col w-col-6" />
                <div className="af-class-padded-column w-col w-col-6">
                  <div className="af-class-width-limiter">
                    <h2>24/7 Email Support</h2>
                    <p>
                      Our support is pretty cool. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Suspendisse varius enim in
                      eros elementum tristique. Duis cursus, mi quis viverra
                      ornare, eros dolor interdum nulla, ut commodo diam libero
                      vitae erat. Aenean faucibus nibh et justo cursus id rutrum
                      lorem imperdiet. Nunc ut sem vitae risus tristique
                      posuere.
                    </p>
                    <a
                      href="contact.html"
                      className="af-class-get-started-link af-class-simple"
                    >
                      get support now
                    </a>
                  </div>
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
                    <a href="sign-up.html" className="af-class-button">
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

export default IndexView;

/* eslint-enable */
