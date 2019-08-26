import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Styles from "./dialy.module.scss" //css追加




class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "Youtube(個人用)"
    const posts = data.allMarkdownRemark.edges


    return (
      <Layout location={this.props.location} title={siteTitle} className={Styles.body}>
        <SEO title="All posts" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
            <div key={node.fields.slug} className={Styles.blog}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                  fontSize: `40px`,
                  marginTop: `20px`,
                  color: `royalblue`,
                }}
              >
                  {title}
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
                </Link>
          )
        })}
        <Link to="/">←ホームへ</Link>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }
    filter: { fields: { collection : { eq: "youtube" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            collection
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
