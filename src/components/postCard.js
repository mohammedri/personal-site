import React from "react"
import { Link } from "gatsby"

export default props => (
  <div>
    <Link to={props.node.fields.slug}>
      <h4>{props.node.frontmatter.title || props.node.fields.slug}</h4>
    </Link>
    <p>{props.node.frontmatter.description}</p>
    <br />
  </div>
)
