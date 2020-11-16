import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'

const Layout = ({ location, title, children }) => {

  return (
    <div className="global-wrapper">
      <header>
        <div className="left-menu">
          <ul>
            <li>Allister Antosik</li>
          </ul>

        </div>
        <div className="right-menu">
          <ul>
              <li classname="toggle-sun">
                <FontAwesomeIcon icon={faSun} size="lg" />
              </li>
            </ul>

        </div>
      </header>
      <main className="content">{children}</main>
    </div>
  )
}

export default Layout
