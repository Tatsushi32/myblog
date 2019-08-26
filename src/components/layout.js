import React from "react"
// import { Link } from "gatsby"
import Bio from "../components/bio"
// import Logo from "../components/image/image"
import { rhythm, scale } from "../utils/typography"

import Styles from "./layout.module.scss" //css追加

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import Navbar from "./navbar"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    
    return (
      <div>
        <header className={Styles.header}>
            <div className={Styles.navbar}>
              <Navbar />
            </div>
            <div>
              <div>
                <h1
                  style={{
                    ...scale(1.5),
                    marginBottom: rhythm(1.5),
                    marginTop: 0,
                  }}
                >
                <p style={{
                  fontSize: `1em`,
                  marginTop: `1.5em`,
                  fontFamily: `Montserrats,ans-serif`,
                }}>
                  {title}
                </p>
                </h1>
                <h5 style={{
                  fontWeight: `400`,
                  fontSize: `16px`,
                  lineHeight: `1.3`,
                }}>
                <Bio/>
                </h5> 
              </div>
            </div>
        </header>
        <div>
        <main style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: `75rem`,
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}>{children}</main>
        </div>
        <div>
        <footer className={Styles.footer}>
        <Navbar />
          © {new Date().getFullYear()} Tatsushi Kakeya
        </footer>
        </div>
      </div>
    )
  }
}

export default Layout
