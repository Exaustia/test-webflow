/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=61714cedc7e731b700b6e733").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class StyleguideView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/StyleguideController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = StyleguideView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '61714ceec7e731518cb6e740'
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
    const proxies = StyleguideView.Controller !== StyleguideView ? transformProxies(this.props.children) : {

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
                    <a href="about.html" className="af-class-navigation-item w-nav-link">About</a>
                    <a href="styleguide.html" aria-current="page" className="af-class-navigation-item w-nav-link w--current">Styleguide</a>
                  </nav>
                  <div className="af-class-menu-button w-nav-button"><img src="images/menu-icon_1menu-icon.png" width={22} alt className="af-class-menu-icon" /></div>
                </div>
              </div>
            </div>
            <div className="af-class-section">
              <div className="af-class-styleguide-header-wrap">
                <div className="af-class-heading-jumbo">Styleguide</div>
                <div className="af-class-paragraph-bigger af-class-cc-bigger-light">Source of truth of this template.</div>
              </div>
              <div className="af-class-container">
                <div className="af-class-styleguide-content-wrap">
                  <div className="af-class-styleguide-block">
                    <div className="af-class-label af-class-cc-styleguide-label">Headings</div>
                    <div className="af-class-heading-jumbo">Heading Jumbo</div>
                    <div className="af-class-heading-jumbo-small">Heading Jumbo</div>
                    <div className="af-class-heading-jumbo-tiny">Heading Jumbo</div>
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <h4>Heading 4</h4>
                    <h5>Heading 5</h5>
                    <h6>Heading 6</h6>
                  </div>
                  <div className="af-class-divider" />
                  <div className="af-class-styleguide-block">
                    <div className="af-class-label af-class-cc-styleguide-label">Paragraphs &amp; Links</div>
                    <p className="af-class-paragraph-bigger">Paragraph-bigger</p>
                    <p>Paragraph</p>
                    <p className="af-class-paragraph-light">Paragraph-de-emphasized</p>
                    <p className="af-class-paragraph-small">Paragraph-smaller</p>
                    <p className="af-class-paragraph-tiny">Paragraph-tiny</p>
                    <div className="af-class-label">Label</div>
                    <a href="#">A text link</a>
                  </div>
                  <div className="af-class-divider" />
                  <div className="af-class-styleguide-block">
                    <div className="af-class-label af-class-cc-styleguide-label">Buttons &amp; Form&nbsp;Elements</div>
                    <div className="af-class-styleguide-button-wrap">
                      <a href="#" className="af-class-button w-inline-block">
                        <div>Explore</div>
                      </a>
                    </div>
                    <div className="af-class-styleguide-button-wrap">
                      <a href="#" className="af-class-button af-class-cc-jumbo-button w-inline-block">
                        <div>Explore</div>
                      </a>
                    </div>
                  </div>
                  <div className="af-class-divider" />
                  <div className="af-class-styleguide-block">
                    <div className="af-class-label af-class-cc-styleguide-label">Rich Text Element</div>
                    <div className="af-class-rich-text w-richtext">
                      <h2>What’s a Rich Text element?</h2>
                      <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content. </p>
                      <blockquote>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</blockquote>
                      <h4>Static and dynamic content editing</h4>
                      <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
                      <figure style={{maxWidth: 1306}} className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                        <div><img src="images/placeholder-1.svg" alt /></div>
                        <figcaption>Image caption</figcaption>
                      </figure>
                      <h4>How to customize formatting for each rich text</h4>
                      <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
                      <ul role="list">
                        <li>The rich text element allows you to create and format headings</li>
                        <li>Headings, paragraphs, blockquotes, figures, images, and figure captions</li>
                        <li>A rich text element can be used with static or dynamic content.</li>
                      </ul>
                    </div>
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

export default StyleguideView

/* eslint-enable */