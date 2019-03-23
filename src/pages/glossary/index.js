import React from 'react'

import Layout from '../../components/Layout'
import GlossaryItem from '../../components/GlossaryList'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            {/* <div className="content">
              <div
                className="full-width-image-container margin-top-0"
                style={{
                  backgroundImage: `url('/img/blog-index.jpg')`,
                }}
              >
                <h1
                  className="has-text-weight-bold is-size-1"
                  style={{
                    boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                    backgroundColor: '#f40',
                    color: 'white',
                    padding: '1rem',
                  }}
                >
                  A-Z
                </h1>
              </div>
            </div> */}
            <div className="content">
              <h1>A-Z</h1>
              <p>
                You can search the style guide by:
                <ol>
                  {/* <li>Selecting ‘open all’.</li> */}
                  <li>Pressing Ctrl+f on your keyboard if you’re using a PC or ⌘+f if you’re using a Mac.</li>
                  <li>Typing the word or search term that you’re looking for.</li>
                </ol>
              </p>
            </div>
            <GlossaryItem />
          </div>
        </section>
      </Layout>
    )
  }
}
