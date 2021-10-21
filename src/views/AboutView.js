/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=61714cedc7e731b700b6e733").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class AboutView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/AboutController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = AboutView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '61714ceec7e731ab3eb6e73a'
    htmlEl.dataset['wfSite'] = '61714cedc7e731b700b6e733'

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
    const proxies = AboutView.Controller !== AboutView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\webflow.css);
          @import url(C:\\css\\exaustias-amazing-site.webflow.css);
        ` }} />
        <span className="af-view">
          <div>
            <div data-collapse="medium" data-animation="default" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="af-class-navigation w-nav">
              <div className="af-class-navigation-items">
                <a href="index.html" className="af-class-logo-link w-nav-brand"><img src="images/portfolio-logo2x.png" width={104} alt className="af-class-logo-image" /></a>
                <div className="af-class-navigation-wrap">
                  <nav role="navigation" className="af-class-navigation-items w-nav-menu">
                    <a href="index.html" className="af-class-navigation-item w-nav-link">Home</a>
                    <a href="about.html" aria-current="page" className="af-class-navigation-item w-nav-link w--current">About</a>
                    <a href="styleguide.html" className="af-class-navigation-item w-nav-link">Styleguide</a>
                  </nav>
                  <div className="af-class-menu-button w-nav-button"><img src="images/menu-icon_1menu-icon.png" width={22} alt className="af-class-menu-icon" /></div>
                </div>
              </div>
            </div>
            <div className="af-class-section">
              <div className="af-class-container">
                <div className="w-layout-grid af-class-about-intro-grid">
                  <div id="w-node-_9b2922ad-09b1-aebb-0430-7dee623c62c1-3eb6e73a" className="af-class-about-head-text-wrap">
                    <div className="af-class-label af-class-cc-about-light">Hey there!</div>
                    <h2 className="af-class-hi-there-heading">I'm Jane Lo</h2>
                    <p className="af-class-paragraph-light">I’m a web and graphic designer based in San Francisco, CA. I’m originally from Brooklyn, NY and will forever talk about the superiority of New York pizza and bagels. I like to build for the web and make things pretty.</p>
                  </div><img src="images/about-pic.svg" id="w-node-_9b2922ad-09b1-aebb-0430-7dee623c62c8-3eb6e73a" alt />
                </div>
              </div>
            </div>
            <div className="af-class-section">
              <div className="af-class-container">
                <div className="w-layout-grid af-class-skills-grid">
                  <div id="w-node-dac044b7-be90-60f3-414d-4224828ffd8a-3eb6e73a" className="af-class-skillset-wrap">
                    <h3>My Career so far</h3>
                    <p className="af-class-paragraph-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                  </div>
                  <div id="w-node-dac044b7-be90-60f3-414d-4224828ffd8f-3eb6e73a" className="w-layout-grid af-class-services-items-grid">
                    <div id="w-node-dac044b7-be90-60f3-414d-4224828ffd90-3eb6e73a">
                      <div className="af-class-service-name-text">Graphic Design</div>
                      <div className="af-class-service-name-text">UX&nbsp;Design</div>
                      <div className="af-class-service-name-text">Prototyping</div>
                      <div className="af-class-service-name-text">Webflow</div>
                    </div>
                    <div id="w-node-dac044b7-be90-60f3-414d-4224828ffd99-3eb6e73a">
                      <div className="af-class-service-name-text">Branding</div>
                      <div className="af-class-service-name-text">Coding</div>
                      <div className="af-class-service-name-text">Back-End</div>
                    </div>
                  </div>
                </div>
                <div className="w-layout-grid af-class-personal-features-grid">
                  <div id="w-node-dac044b7-be90-60f3-414d-4224828ffda1-3eb6e73a">
                    <h3>Selected features</h3>
                    <div className="af-class-paragraph-light af-class-cc-position-name">Far far away, behind the word mountains, far from the.</div>
                  </div>
                  <ul id="w-node-dac044b7-be90-60f3-414d-4224828ffda6-3eb6e73a" role="list" className="w-list-unstyled">
                    <li className="af-class-featured-item-wrap">
                      <div className="af-class-speaking-text">Far far away, behind the word</div>
                      <div className="af-class-speaking-detail">(Video)</div>
                      <a href="#" className="af-class-reference-link">Suspendisse varius enim in eros elementum tristique</a>
                    </li>
                    <li className="af-class-featured-item-wrap">
                      <div className="af-class-speaking-text">Lorem ipsum dolor sit amet</div>
                      <div className="af-class-speaking-detail">(Podcast)</div>
                      <a href="#" className="af-class-reference-link">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus.</a>
                    </li>
                    <li className="af-class-featured-item-wrap">
                      <div className="af-class-speaking-text">Suspendisse varius enim</div>
                      <div className="af-class-speaking-detail">(Magazine)</div>
                      <a href="#" className="af-class-reference-link">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line.</a>
                    </li>
                    <li className="af-class-featured-item-wrap">
                      <div className="af-class-speaking-text">Duis cursus, mi quis viverra ornare</div>
                      <div className="af-class-speaking-detail">(Video)</div>
                      <a href="#" className="af-class-reference-link">Of blind text by the name of Lorem Ipsum decided to leave.</a>
                    </li>
                    <li className="af-class-featured-item-wrap">
                      <div className="af-class-speaking-text">Lorem ipsum dolor sit amet</div>
                      <div className="af-class-speaking-detail">(Podcast)</div>
                      <a href="#" className="af-class-reference-link">For the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas.</a>
                    </li>
                    <li className="af-class-featured-item-wrap">
                      <div className="af-class-speaking-text">Varius enim in eros elementum tristique</div>
                      <div className="af-class-speaking-detail">(Blog)</div>
                      <a href="#" className="af-class-reference-link">Wild Question Marks and devious Semikoli.</a>
                    </li>
                    <li className="af-class-featured-item-wrap">
                      <div className="af-class-speaking-text">Dolor interdum nulla</div>
                      <div className="af-class-speaking-detail">(Blog)</div>
                      <a href="#" className="af-class-reference-link">But the Little Blind Text didn’t listen.</a>
                    </li>
                  </ul>
                  <div id="w-node-dac044b7-be90-60f3-414d-4224828ffdd8-3eb6e73a">
                    <div className="af-class-upcoming-wrap">
                      <div className="af-class-label af-class-cc-speaking-label">Upcoming</div>
                      <ul role="list" className="w-list-unstyled">
                        <li>
                          <div className="af-class-speaking-text">Dolor interdum nulla</div>
                          <div className="af-class-speaking-detail">(Apr 2021)</div>
                        </li>
                        <li>
                          <div className="af-class-speaking-text">Varius enim in eros elementum tristique</div>
                          <div className="af-class-speaking-detail">(Dec 2020)</div>
                        </li>
                        <li>
                          <div className="af-class-speaking-text">Lorem ipsum dolor sit amet</div>
                          <div className="af-class-speaking-detail">(Mar 2020)</div>
                        </li>
                      </ul>
                    </div>
                    <div className="af-class-label">Past</div>
                    <ul role="list" className="w-list-unstyled">
                      <li>
                        <div className="af-class-speaking-text af-class-cc-past-speaking">Duis cursus, mi quis viverra ornare</div>
                        <div className="af-class-speaking-detail">(Dec 2018)</div>
                      </li>
                      <li>
                        <div className="af-class-speaking-text af-class-cc-past-speaking">Suspendisse varius enim</div>
                        <div className="af-class-speaking-detail">(Nov 2018)</div>
                      </li>
                      <li>
                        <div className="af-class-speaking-text af-class-cc-past-speaking">Lorem ipsum dolor sit amet</div>
                        <div className="af-class-speaking-detail">(Jun 2018)</div>
                      </li>
                      <li>
                        <div className="af-class-speaking-text af-class-cc-past-speaking">Far far away, behind the word</div>
                        <div className="af-class-speaking-detail">(Apr 2018)</div>
                      </li>
                      <li>
                        <div className="af-class-speaking-text af-class-cc-past-speaking">Dolor interdum nulla</div>
                        <div className="af-class-speaking-detail">(Nov 2017)</div>
                      </li>
                      <li>
                        <div className="af-class-speaking-text af-class-cc-past-speaking">Varius enim in eros elementum tristique</div>
                        <div className="af-class-speaking-detail">(Jan 2017)</div>
                      </li>
                      <li>
                        <div className="af-class-speaking-text af-class-cc-past-speaking">Lorem ipsum dolor sit amet</div>
                        <div className="af-class-speaking-detail">(Jul 2016)</div>
                      </li>
                    </ul>
                  </div>
                  <div id="w-node-dac044b7-be90-60f3-414d-4224828ffe12-3eb6e73a">
                    <h3>Speaking</h3>
                    <div className="af-class-paragraph-light af-class-cc-position-name">The countries Vokalia and Consonantia, there live the blind texts.</div>
                  </div>
                </div>
              </div>
              <div className="af-class-container">
                <div className="af-class-social-media-heading">
                  <h3>Social Media Spotlight</h3>
                  <div className="af-class-paragraph-light af-class-cc-position-name">Take a peek at what I’ve been up to on social.</div>
                </div>
              </div>
            </div>
            <div className="af-class-section">
              <div className="w-layout-grid af-class-social-media-grid"><img src="images/placeholder-3.svg" id="w-node-_76ba38e4-2715-c796-e82b-8239d41d1e9d-3eb6e73a" alt /><img src="images/placeholder-3.svg" id="w-node-_76ba38e4-2715-c796-e82b-8239d41d1e9e-3eb6e73a" alt /><img src="images/placeholder-1.svg" id="w-node-_76ba38e4-2715-c796-e82b-8239d41d1e9f-3eb6e73a" alt /><img src="images/placeholder-1.svg" id="w-node-_76ba38e4-2715-c796-e82b-8239d41d1ea0-3eb6e73a" alt /><img src="images/placeholder-3.svg" id="w-node-_76ba38e4-2715-c796-e82b-8239d41d1ea1-3eb6e73a" alt /><img src="images/placeholder-1.svg" id="w-node-_76ba38e4-2715-c796-e82b-8239d41d1ea2-3eb6e73a" alt /><img src="images/placeholder-1.svg" id="w-node-_76ba38e4-2715-c796-e82b-8239d41d1ea3-3eb6e73a" alt /><img src="images/placeholder-3.svg" id="w-node-_76ba38e4-2715-c796-e82b-8239d41d1ea4-3eb6e73a" alt /></div>
            </div>
            <div className="af-class-section af-class-cc-contact">
              <div className="af-class-container">
                <div className="af-class-contact">
                  <div className="af-class-contact-headline">
                    <h3>Want to get in touch?<br />Drop me a line!</h3>
                    <p className="af-class-paragraph-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                  </div>
                  <div className="af-class-contact-form-wrap">
                    <div className="w-form">
                      <form id="wf-form-Email-Form" name="wf-form-Email-Form" data-name="Email Form" className="af-class-contact-form">
                        <div className="w-layout-grid af-class-contact-form-grid">
                          <div id="w-node-d783a17e-0b35-a13a-0448-a852d0df4a32-d0df4a24"><label htmlFor="Name-3">Name</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="Name" data-name="Name" placeholder="Enter your name" id="Name" /></div>
                          <div id="w-node-d783a17e-0b35-a13a-0448-a852d0df4a36-d0df4a24"><label htmlFor="Email-3">Email Address</label><input type="email" className="af-class-text-field w-input" maxLength={256} name="Email" data-name="Email" placeholder="Enter your email" id="Email" required /></div>
                          <div id="w-node-d783a17e-0b35-a13a-0448-a852d0df4a3a-d0df4a24"><label htmlFor="Message">Form Label</label><textarea id="Message" name="Message" placeholder="Enter your message" maxLength={5000} data-name="Message" className="af-class-text-field af-class-cc-textarea w-input" defaultValue={""} /></div>
                        </div><input type="submit" defaultValue="Submit" data-wait="Please wait..." className="af-class-button w-button" />
                      </form>
                      <div className="af-class-status-message af-class-cc-success-message w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="af-class-status-message af-class-cc-error-message w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-footer-wrap">
              <div>
                <a href="https://webflow.com/" target="_blank" className="af-class-webflow-link w-inline-block"><img src="images/webflow-w-small2x_1webflow-w-small2x.png" width={15} alt className="af-class-webflow-logo-tiny" />
                  <div className="af-class-paragraph-tiny">Powered by Webflow</div>
                </a>
              </div>
              <div className="af-class-footer-links">
                <a href="https://www.facebook.com/webflow/" target="_blank" className="af-class-footer-item">Facebook</a>
                <a href="https://twitter.com/webflow" target="_blank" className="af-class-footer-item">Twitter</a>
                <a href="https://www.instagram.com/webflowapp/" target="_blank" className="af-class-footer-item">Instagram</a>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default AboutView

/* eslint-enable */