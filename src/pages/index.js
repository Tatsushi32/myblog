import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Styles from "./index.module.scss" //css追加


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
        <article>
          <Link to="/dialy/" className={Styles.link}>
          <img className={Styles.img} src="https://user-images.githubusercontent.com/21834/34442516-fb1a1a3c-ecc2-11e7-8fe8-530435f22336.jpg " />
            <h2 style={{
              marginTop: `0`,
            }}>メモ</h2>
            <p>Gatsby.jsの勉強。</p>
          </Link>
        </article>
        <article>
          <Link to="/movie/" className={Styles.link}>
          <img className={Styles.img} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAh1BMVEX/////AAD/ycn//Pz/9/f/OTn/9PT/FBT/+fn/t7f/s7P/3d3/8PD/0dH/bW3/IiL/jo7/UVH/MTH+oKD+u7v/QkL+6en/w8P+5OT/CQn+paX+hIT/Li7+fHz+YGD+aWn+lJT/Skr/dHT+3t7+1tb/WFj+Hh7/nZ3+Y2P/SUn/g4P/rKz/UFCDETJ+AAADwklEQVR4nO3ce3OaQBQF8AWUgIohEQFf+G4e+v0/X9EkbVJty9277J015/dPJzOpk3NGl2XZVSkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgO8uCKJOOMjL/i5J/KLIsjiOeyf1v1lWFH6S7LZlPgg7URBI/7HWdfpJ0Rulm+GyWnfvPZLJfHyslsNFOs38pIyko7Rp25tVd7R2/mM+TLNSOlYL8hnxXdTY46gjHc6w15aaejOVjmfS1uyn79LD7by5di1XVZuH0iENydvvqh65pFMaMrdRlreQjmnE1EpXnreTDmpAMLFU1l46qQGxpa487wamp5W1skbSUfl+WCurko7K1rfWledJZ2XLLJaVS4flSi2WVUiH5VpaLMv5+2l747vnbaTDclnsyvlpacdmWWPptEw2Zw7exPFVeZ+Qlb9C6PiiFmWalfS4ZTk+0aKsz/iqM+OV5fgqDWVO6te/X+45ZTk+K90Qy6pHOcbCak84LdMzuSylRtplOT6Fp3yqPspS4UKzrCfJqHxaZdXTswetslZSMc1Y65VVD106T/tnUjHN6OqWpQKNocvtO+mAcmnz//jPIeVSevYsEtKUiHIL82dZ9KHL7WWHiBL1sqz6dok0dL1YD2gSaYXmWlkqeCK8gttrNPyylBo0H7q6dtMZFhooS6nduOEruL2VxkxZSsXNLhQo66zZUg/KqvmPzV4BZamy8d4Stwd4A1fDiLDR+buXdaDshXN7nhVRol4pK6HciHve0X5CgwLK3cpFWSVlnfXE8R1aDS9j18rq0DfgDGVCmtJ07n1ZVk/jmavj27spayyfyyIOVu9SsZxG6K3B59TB6t1KLKcRlL3KH2UFK72qnN+vPKSXFeufMjjIhuWibF44l9V4OeaaTDouD2Wd0yct9F2TSMfloewiSkjVXuP4gRTK/qyUfYp6IB2XJ+HmJ3H88K+VU6wf5q5/S4bNsh6kw3LZLMvtp/eKto2Gy/FbQ6V096XpiKXDcunveaRzfE5qd+4gnZVtYK+re+msfJSFZZ5X6ah89o6yOn5k4GRrq6s71+fvJ7a+2MHxTfBvSjtd3cQby9ZUy/ETYb/wlj+bcXz5/ZP227qdrlr/Dq2J8zc6XzCfRPy7qtVtjO2fDA6tfHnI3SJz/Mz934RJMX1dVmP+Ofv79fNwdih2N1rUF0EU5n0/iw+H6dNqttgsq/1x/TI+6f52/vllfdxXy80iXY2mh15cJP08jG7ucwcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0MxPs8w8DZzEiJUAAAAASUVORK5CYII=" />
          <h2 style={{
            marginTop: `0`,
          }}>個人用</h2>
          <p>いろいろ</p>
          </Link>
        </article>
      </div>


      </Layout>
    )
  }
  
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    gatsby: file(relativePath: { eq: "logo-gatsby.jpg" }) {
      ...fluidImage
    }
    profile: file(relativePath: { eq: "profile-pic.jpg" }) {
      ...fluidImage
    }
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
