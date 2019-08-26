/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

import Styles from "../pages/index.module.scss" //CSS追加

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'; //fontawesome 


const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div>
        <div>
          <p className={Styles.bio}>
            Tatsushi's dialy powered by Gatsby
            {` `}
          </p>
        </div>
        <div>
          <ul>
            <a style={{color:`black`}} className={Styles.fontawesome} target="_blank" rel="noopener noreferrer" href={`https://github.com/Tatsushi-Kakeya`}><FontAwesomeIcon icon={faGithubSquare} /></a>
            <a style={{color:`navy`}} className={Styles.fontawesome} target="_blank" rel="noopener noreferrer" href={`https://www.facebook.com/tatsushi.kakeya`}><FontAwesomeIcon icon={faFacebookSquare} /></a>
            <a style={{color:`royalblue`}} className={Styles.fontawesome} target="_blank" rel="noopener noreferrer" href={`https://twitter.com/Tkake_32`}><FontAwesomeIcon icon={faTwitterSquare} /></a>
            <a style={{color:`mediumvioletred`}} className={Styles.fontawesome} target="_blank" rel="noopener noreferrer" href={`https://www.instagram.com/tatsushi32/`}><FontAwesomeIcon icon={faInstagram} /></a>
          </ul>  
        </div>
      </div>
    </div>
  )
}

export default Bio
