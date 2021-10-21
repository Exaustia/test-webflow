/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=61714cedc7e731b700b6e733").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '61714ceec7e731a6afb6e737'
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
    const proxies = IndexView.Controller !== IndexView ? transformProxies(this.props.children) : {

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
                <a href="index.html" aria-current="page" className="af-class-logo-link w-nav-brand w--current"><img src="images/portfolio-logo2x.png" width={104} alt className="af-class-logo-image" /></a>
                <div className="af-class-navigation-wrap">
                  <nav role="navigation" className="af-class-navigation-items w-nav-menu">
                    <a href="index.html" aria-current="page" className="af-class-navigation-item w-nav-link w--current">Home</a>
                    <a href="about.html" className="af-class-navigation-item w-nav-link">About</a>
                    <a href="styleguide.html" className="af-class-navigation-item w-nav-link">Styleguide</a>
                  </nav>
                  <div className="af-class-menu-button w-nav-button"><img src="images/menu-icon_1menu-icon.png" width={22} alt className="af-class-menu-icon" /></div>
                </div>
              </div>
            </div>
            <div className="af-class-section">
              <div className="af-class-container">
                <div className="af-class-intro-wrap">
                  <div className="af-class-name-text">Jane Lo</div>
                  <div className="af-class-paragraph-light">Product Designer</div>
                  <h1 className="af-class-heading-jumbo">Hey there! I’m a creative graphic and web designer based in sunny San Francisco, CA. </h1>
                </div>
              </div>
            </div>
            <div className="af-class-section">
              <div id="works-grid" className="w-layout-grid af-class-works-grid">
                <div id="w-node-dff26f68-5731-3efa-d3dd-8f65c72d8fa5-afb6e737">
                  <a href="work/project-1.html" className="af-class-work-image af-class-cc-work-1 w-inline-block" />
                  <div className="af-class-work-description">
                    <a href="work/project-1.html" className="af-class-project-name-link">Project 1<br /></a>
                    <div className="af-class-paragraph-light">Graphic Design</div>
                  </div>
                </div>
                <div id="w-node-dff26f68-5731-3efa-d3dd-8f65c72d8fad-afb6e737">
                  <a href="work/project-2.html" className="af-class-work-image af-class-cc-work-2 w-inline-block" />
                  <div className="af-class-work-description">
                    <a href="work/project-2.html" className="af-class-project-name-link">Project 2</a>
                    <div className="af-class-paragraph-light">Web Design</div>
                  </div>
                </div>
                <div id="w-node-dff26f68-5731-3efa-d3dd-8f65c72d8fb4-afb6e737">
                  <a href="work/project-3.html" className="af-class-work-image af-class-cc-work-3 w-inline-block" />
                  <div className="af-class-work-description">
                    <a href="work/project-3.html" className="af-class-project-name-link">Project 3</a>
                    <div className="af-class-paragraph-light">Web Design</div>
                  </div>
                </div>
                <div id="w-node-dff26f68-5731-3efa-d3dd-8f65c72d8fbb-afb6e737">
                  <a href="work/project-4.html" className="af-class-work-image af-class-cc-work-4 w-inline-block" />
                  <div className="af-class-work-description">
                    <a href="work/project-4.html" className="af-class-project-name-link">Project 4</a>
                    <div className="af-class-paragraph-light">Graphic Design</div>
                  </div>
                </div>
              </div>
              <div className="af-class-container">
                <div className="af-class-carrer-headline-wrap">
                  <h2>My experience</h2>
                  <p className="af-class-paragraph-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                </div>
                <div className="w-layout-grid af-class-work-experience-grid">
                  <div id="w-node-dff26f68-5731-3efa-d3dd-8f65c72d8fc9-afb6e737" className="af-class-work-position-wrap">
                    <div className="af-class-position-name-text">Webflow</div>
                    <div className="af-class-paragraph-light af-class-cc-position-name">Graphic Designer</div>
                    <div className="af-class-paragraph-tiny af-class-cc-paragraph-tiny-light">April 2014 — Mar 2015<br /></div>
                  </div>
                  <div id="w-node-dff26f68-5731-3efa-d3dd-8f65c72d8fd1-afb6e737" className="af-class-work-position-wrap">
                    <div className="af-class-position-name-text">Webflow</div>
                    <div className="af-class-paragraph-light af-class-cc-position-name">Web Designer</div>
                    <div className="af-class-paragraph-tiny af-class-cc-paragraph-tiny-light">Apr 2015 — Mar 2016<br /></div>
                  </div>
                  <div id="w-node-dff26f68-5731-3efa-d3dd-8f65c72d8fd9-afb6e737" className="af-class-work-position-wrap">
                    <div className="af-class-position-name-text">Webflow</div>
                    <div className="af-class-paragraph-light af-class-cc-position-name">Visual Developer</div>
                    <div className="af-class-paragraph-tiny af-class-cc-paragraph-tiny-light">Jun 2016 — Jul 2017<br /></div>
                  </div>
                  <div id="w-node-dff26f68-5731-3efa-d3dd-8f65c72d8fe1-afb6e737" className="af-class-work-position-wrap">
                    <div className="af-class-position-name-text">Webflow</div>
                    <div className="af-class-paragraph-light af-class-cc-position-name">Dictator</div>
                    <div className="af-class-paragraph-tiny af-class-cc-paragraph-tiny-light">Aug 2017 — forever<br /></div>
                  </div>
                </div>
              </div>
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

export default IndexView

/* eslint-enable */