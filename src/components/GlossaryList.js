import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class GlossaryItem extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-12" key={post.id}>
              <article className="tile is-child">
                <h2>
                    {post.frontmatter.title}
                </h2>
                <p>
                  {post.excerpt}
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

GlossaryItem.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query GlossaryItemQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___title] }
          filter: { frontmatter: { templateKey: { eq: "glossary-item" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <GlossaryItem data={data} count={count} />}
  />
)
