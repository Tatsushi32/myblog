import React from "react"
import { Link, graphql } from "gatsby"


import Layout from "../components/layout"
import Styles from "./contact.module.scss" //css追加

import { Formik, Field } from 'formik';


const initialValues = {
  'form-name': 'contact', // NetlifyFormで必要な値
  'bot-field': '', // NetlifyFormで必要な値
  name: '',
  sampleFile: null,
};

const handleValidate = (values) => {
  let errors = {}

  // sampleText
  if (!values.name) {
    errors.name = `テキストを記入してください`;
  }

  // sampleFile
  if (!values.sampleFile) {
    errors.sampleFile = `ファイルを添付してください`;
  } else if (values.sampleFile.size > 100000000) {
    errors.sampleFile = `100MB以下のファイルを添付してください`;
  }

  return errors;
}

const siteTitle = "お問い合わせ"
const renderForm = ({
  dirty,
  isSubmitting,
  setFieldValue,
}) => (


      <Layout title={siteTitle}>

        <form name="contact" 
              method="POST" 
              action="thanks" 
              data-netlify="true"  
              data-netlify-honeypot="bot-field" 
              className={Styles.body}
              >

            <Field type="hidden" name="bot-field" /> {/* NetlifyFormで必要な値 */}
            <Field type="hidden" name="form-name" /> {/* NetlifyFormで必要な値 */}

            <div>
              <label><p>名前</p>
                <Field type="text" id="name" name="name" laceholder="お名前" maxlength="20" minlength="2" />
              </label>
            </div>

            <div className="form-group">
              <label><p>メールアドレス</p>
                <input type="email" name="email" id="email" placeholder="" pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" required autocomplete="email" />
              </label>
            </div>

            <div className="form-group">
              <label><p>ファイルのアップロード</p>
                <input
                  id="file"
                  name="file"
                  type="file"
                  onChange={event => setFieldValue("file", event.currentTarget.files[0])}
                />
              </label>
            </div>

            <div className="form-group">
              <label><p>お問い合わせ内容</p>
                <textarea id="contsct" name="contact" rows="8" required></textarea>
              </label>
            </div>

            <div className="form-group">
                <button id="submit" type="submit">送信</button>
            </div>
          <Link to="/">戻る</Link>
        </form>

      </Layout>
    );

export default () =>  (
  <Formik
    initialValues={initialValues}
    validate={handleValidate}
    render={renderForm}
  />
);


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

