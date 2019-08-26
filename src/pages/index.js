import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Styles from "./index.module.scss" //css追加

import Gatsby from "../images/logo-gatsby.jpg"
import Youtube from "../images/youtube.png"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
        })}

      <div className={Styles.blog}>
        <Link to="/dialy/">
          <div className={Styles.article}>
            <article>
              <img src={Gatsby} alt="Gatsby-logo" className={Styles.img} />
              <h2 style={{
                marginTop: `0`,
              }}>日記</h2>
              <p>インターン中のGatsby.jsの勉強記録を日報として残しています。</p>
            </article>
          </div>
         </Link>

         <Link to="/movie/">
          <div className={Styles.article}>
            <article>
            <img src={Youtube} alt="Youtube-logo" className={Styles.img} />
              <h2 style={{
                marginTop: `0`,
              }}>個人用</h2>
              <p>いろいろ</p>
            </article>
          </div>
         </Link>

         <Link to="/dialy/">
          <div className={Styles.article}>
            <article>
            <img src={Gatsby} alt="Gatsby-logo" className={Styles.img} />
              <h2 style={{
                marginTop: `0`,
              }}>日記</h2>
              <p>インターン中のGatsby.jsの勉強記録を日報として残しています。</p>
            </article>
          </div>
         </Link>

         <Link to="/dialy/">
          <div className={Styles.article}>
            <article>
            <img src={Gatsby} alt="Gatsby-logo" className={Styles.img} />
              <h2 style={{
                marginTop: `0`,
              }}>日記</h2>
              <p>インターン中のGatsby.jsの勉強記録を日報として残しています。</p>
            </article>
          </div>
         </Link>


      </div>


      </Layout>
    )
  }
  
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
