import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
    gatsby: file(relativePath: { eq: "logo-gatsby.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
    }
    }
  }
`)

  return <Img fluid={data.gatsby.childImageSharp.fluid} />
}

const Profile = () => {
  const data = useStaticQuery(graphql`
    query {
    profile: file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
    }
    }
  }
`)

  return <Img fluid={data.profile.childImageSharp.fluid} />
}

export default Image

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;


// ------------------

// const Image = (props) => (
// 	<StaticQuery
// 		query={graphql`
// 			query{
// 				images: allFile{
// 					edges {
// 						node {
// 							relativePath
// 							name
// 							childImageSharp{
// 								sizes(maxWidth: 600) {
// 									...GatsbyImageSharpSizes
// 								}
// 							}
// 						}
// 					}
// 				}
// 			}
// 		`}

// 		render={(data) => {
// 			const image = data.images.edges.find(n => {
// 				return n.node.relativePath.includes(props.filename);
// 			});
// 			if(!image) {return null; }

// 			const imageSizes = image.node.childImageSharp.sizes;
// 			return (
// 				<img
// 					alt={props.alt}
// 					sizes={imageSizes}
// 				/>
// 			);
// 		}}

// 	/>
// 	) 

// export default Image
// --------------------------------------------------------------

// export default ({ data }) => (
// 		<div>
// 			<h1>Hello gatsby-image</h1>
// 			<Img fixed={data.file.childImageSharp.fixed}>
// 		</div>
// 	)

//  export const query = graphql`
//  	query {
//  		file(relativePath: { eq: "src/images/gatsby.jpg" }) {
//  			childImageSharp {
//  				fixed(width: 125, height: 125) {
//  					...GatsbyImageSharpFixed
//  				}
//  			}
//  		}
//  	}
//  `







