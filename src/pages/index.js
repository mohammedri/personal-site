import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

// import "../utils/global.scss"
import "../utils/normalize.css";
import "../utils/css/screen.css";
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Mohammed Ridwanul"
        keywords={[`blog`, `product manager`, `dessa`, `Mohammed Ridwanul`]}
      />
      {/* <Bio /> */}
      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <div className="row">
            <div className="col-3">
              <div>
                <figure>
                  <Img
                    fluid={data.smallPic.childImageSharp.fluid}
                    className="kg-image"
                  />
                </figure>
              </div>
            </div>
            <div className="col-9">
              <div>
                <p>
                  {" "}
                  Hi, I'm Mohammed - Product Manager at{" "}
                  <b>
                    <a href="www.cash.app">Cash App</a>
                  </b>{" "}
                  working within the{" "}
                  <b>
                    <a href="www.dessa.com">Dessa</a>
                  </b>{" "}
                  & Strategic Development sub-org. <br /> <br />
                  I've spent most of my career building deep technical products,
                  first as a Data Platform Engineer at{" "}
                  <a href="www.shopify.com">Shopify</a>, where I worked on a
                  Kafka based schematized event streaming library and then as a
                  Product Manager helping <a href="www.dessa.com">Dessa</a>{" "}
                  transform from a service oriented business to a product-led
                  company by launching{" "}
                  <a href="http://www.atlas.dessa.com">
                    Machine Learning infrastructure
                  </a>{" "}
                  related products for enterprises up until our{" "}
                  <a href="https://squareup.com/ca/en/press/dessa-joins-square">
                    acquisition by Square in 2019.
                  </a>
                  <br />
                  <br />
                  At Cash App, I have/am working on various projects, including:
                  <ul>
                    <li>
                      Open sourcing Dessa's ML infrastructure -{" "}
                      <a href="https://github.com/dessa-oss/atlas">Atlas</a>.
                    </li>
                    <li>
                      Using Deep Learning to automate various aspects of Cash
                      App's operations.
                    </li>
                    <li>
                      Testing out & working on various experimental and moonshot
                      projects.
                    </li>
                  </ul>
                </p>
                <p>
                  I've received my B.ASc from the Electrical & Computer
                  Engineering department at{" "}
                  <a href="https://uwaterloo.ca/">University of Waterloo</a>;
                  While I don't actively write code anymore as a Product
                  Manager, I still enjoy working on developing side projects
                  (mostly using React Native + Django / Rails) and teaching
                  programming<sup>[1]</sup>.
                  <br />
                  <br />
                  <sup>
                    [1] Most recently I have developed a curriculum to teach CS
                    to a few students including my{" "}
                    <a href="www.maisha-thasin.com">sister</a> - just enough for
                    them to learn how to navigate the vast world of software. I
                    am currently (very) slowly working on putting the multiple
                    google docs into a book.
                  </sup>
                </p>
                <p>
                  <hr
                    style={{
                      marginTop: 5,
                      marginBottom: 5,
                      backgroundColor: "#000",
                    }}
                  ></hr>
                  <b>A little about my personal mission:</b> <br />
                  Currently, I am driven by the mission of changing the world's
                  relationship with money & commerce. Specifically, I am
                  inspired by companies like{" "}
                  <a href="https://www.ifc.org/wps/wcm/connect/fe4a0bd4-5c58-4208-b5e4-e3a2d42c7d7a/bKash+Case.pdf?MOD=AJPERES&CVID=mGp39sL">
                    bKash
                  </a>
                  whose payment infrastructure has given power to the
                  underprivileged & underbanked in Bangladesh;{" "}
                  <a href="https://cash.app/">Cash App</a> who are helping the
                  underbanked get access to fantastic financial systems and also
                  my past employer - <a href="www.shopify.com">Shopify</a>, who
                  have empowered small merchants by giving them access to
                  capital and commerce infrastructure. <br />
                  <br />
                  Understandbly so, I'm also extremely bullish on Cryptocurrency
                  (specifically Bitcoin ₿) and the impact it will have on the
                  underbanked. <br />
                  <br /> TL;DR: I believe a combination of deep tech (like
                  advances in Machine Learning, Distributed & Cloud computing),
                  good product sense and with inclusive UX design we can really
                  shape and transform our relationship with money & business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    smallPic: file(relativePath: { eq: "mohammed2.JPG" }) {
      childImageSharp {
        fluid(maxHeight: 800, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default (props) => (
  <StaticQuery
    query={indexQuery}
    render={(data) => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
);
