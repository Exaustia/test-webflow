/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6171de626e35f7fbfd76f3e7").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class NotFoundView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/NotFoundController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = NotFoundView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '6171de626e35f7d0a376f400'
    htmlEl.dataset['wfSite'] = '6171de626e35f7fbfd76f3e7'

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
    const proxies = NotFoundView.Controller !== NotFoundView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\webflow.css);
          @import url(C:\\css\\exaustias-spectacular-site.webflow.css);
        ` }} />
        <span className="af-view">
          <div>
            <div className="af-class-utility-page-wrap">
              <div className="af-class-utility-page-content w-form">
                <a href="index.html" className="af-class-brand af-class-_404-brand w-nav-brand"><img src="images/Black.svg" alt className="af-class-brand-logo" /></a>
                <h2>Page Not Found</h2>
                <p className="af-class-big-paragraph af-class-max-350">The page you are looking for doesn't exist or has been moved.</p>
                <a href="#" className="af-class-button w-button">Go home</a>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
            <style dangerouslySetInnerHTML={{__html: "\n.af-view{\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n" }} />
          </div>
        </span>
      </span>
    )
  }
}

export default NotFoundView

/* eslint-enable */