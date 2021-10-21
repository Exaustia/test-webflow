/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6171e058e5c2c80d30427f21").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class SignUpView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/SignUpController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SignUpView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '6171e058e5c2c8ea46427f2e'
    htmlEl.dataset['wfSite'] = '6171e058e5c2c80d30427f21'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = SignUpView.Controller !== SignUpView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\webflow.css);
          @import url(C:\\css\\exaustias-stunning-site-a48347.webflow.css);
        ` }} />
        <span className="af-view">
          <div>
            <div data-collapse="medium" data-animation="default" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="af-class-navbar w-nav">
              <div className="w-container">
                <a href="index.html" className="af-class-brand-wrapper w-nav-brand">
                  <div className="af-class-logo-text">terminal</div>
                </a>
                <nav role="navigation" className="af-class-nav-menu w-clearfix w-nav-menu">
                  <a href="index.html" className="af-class-nav-link w-nav-link">HOME</a>
                  <a href="pricing.html" className="af-class-nav-link w-nav-link">pricing</a>
                  <a href="services.html" className="af-class-nav-link w-nav-link">services</a>
                  <a href="about.html" className="af-class-nav-link w-nav-link">About</a>
                  <a href="contact.html" className="af-class-nav-link w-nav-link">Contact</a>
                  <a href="#" className="af-class-nav-link af-class-right w-nav-link">SIGN UP</a>
                </nav>
                <div className="af-class-menu-button w-nav-button">
                  <div className="w-icon-nav-menu" />
                </div>
              </div>
            </div>
            <div className="af-class-section af-class-black af-class-wf-section">
              <div className="w-container">
                <div className="af-class-title">
                  <h1>start your free 14 day trail</h1>
                  <div className="af-class-subtitle">No credit cards. No commitments. Cancel anytime.</div>
                </div>
                <div className="w-row">
                  <div className="w-col w-col-7">
                    <div className="w-form">
                      <form name="email-form" data-name="Email Form" className="af-class-sign-up-form w-clearfix"><input type="text" name="first-name" data-name="First Name" placeholder="First Name" maxLength={256} required className="af-class-field af-class-left w-input" /><input type="text" name="last-name" data-name="Last Name" placeholder="Last Name" maxLength={256} className="af-class-field af-class-right w-input" /><input type="email" name="email" data-name="Email" placeholder="Email Address" maxLength={256} required className="af-class-field w-input" /><input type="email" name="email" data-name="Email" placeholder="Retype Email Address" maxLength={256} required className="af-class-field w-input" /><input type="submit" defaultValue="Sign Up" data-wait="Please wait..." className="af-class-button af-class-sign-up w-button" /></form>
                      <div className="af-class-success-message af-class-big w-form-done">
                        <h2>Thanks for signing up!</h2>
                        <p>We will send you an email very soon with next steps.&nbsp;</p>
                      </div>
                      <div className="w-form-fail">
                        <p>Oops! Something went wrong while submitting the form :(</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-col w-col-5">
                    <div className="af-class-testimonials-column">
                      <div className="af-class-testimonials-title">TESTIMONIALS</div>
                      <p className="af-class-testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.&nbsp;</p>
                      <div className="af-class-testimonials-author">Larry Page, Google</div>
                      <p className="af-class-testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse.&nbsp;</p>
                      <div className="af-class-testimonials-author">George, Pingdom</div>
                    </div>
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
                        <a href="#" className="af-class-footer-link">Home</a>
                      </li>
                      <li>
                        <a href="#" className="af-class-footer-link">About Terminal</a>
                      </li>
                      <li>
                        <a href="#" className="af-class-footer-link">Services</a>
                      </li>
                      <li>
                        <a href="#" className="af-class-footer-link">Plans &amp; Pricing</a>
                      </li>
                      <li>
                        <a href="#" className="af-class-footer-link">Blog</a>
                      </li>
                    </ul>
                  </div>
                  <div className="af-class-footer-column w-col w-col-3">
                    <h4>get help</h4>
                    <ul role="list" className="w-list-unstyled">
                      <li>
                        <a href="#" className="af-class-footer-link">Knowledge Base</a>
                      </li>
                      <li>
                        <a href="#" className="af-class-footer-link">Frequently Asked Questions</a>
                      </li>
                      <li>
                        <a href="#" className="af-class-footer-link">Forum</a>
                      </li>
                      <li>
                        <a href="#" className="af-class-footer-link">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                  <div className="af-class-footer-column w-col w-col-3">
                    <h4>Boring Stuff</h4>
                    <ul role="list" className="w-list-unstyled">
                      <li>
                        <a href="#" className="af-class-footer-link">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#" className="af-class-footer-link">Terms of Service</a>
                      </li>
                    </ul>
                  </div>
                  <div className="af-class-footer-column w-col w-col-3">
                    <div className="w-form">
                      <form name="email-form" data-name="Email Form" className="w-clearfix"><input type="text" name="email" data-name="Email" placeholder="Your email" maxLength={256} required className="af-class-field-left w-input" /><input type="submit" data-wait="Wait..." wait="Wait..." defaultValue="OK" className="af-class-button af-class-form w-button" />
                        <div className="af-class-no-spam">We send about 2 emails a month</div>
                      </form>
                      <div className="af-class-success-message w-form-done">
                        <p>Thank you! You'll be receiving some awesome emails!</p>
                      </div>
                      <div className="w-form-fail">
                        <p>Oops! Something went wrong while submitting the form :(</p>
                      </div>
                    </div>
                    <div>
                      <a href="http://www.facebook.com/webflow" className="af-class-social-link w-inline-block"><img src="images/twitter-icon.svg" alt /></a>
                      <a href="http://www.facebook.com/webflow" className="af-class-social-link w-inline-block"><img src="images/facebook-icon.svg" alt /></a>
                    </div>
                    <div className="af-class-logo-text af-class-footer">terminal</div>
                  </div>
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default SignUpView

/* eslint-enable */