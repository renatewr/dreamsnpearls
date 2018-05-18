import React from 'react';
import graphql from 'graphql';
import Content, { HTMLContent } from '../components/Content';

import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderGeneric from '../components/HeaderGeneric'

export const AboutPageTemplate = ({ title, content, contentComponent, image }) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
    <Helmet title={title} />
    <HeaderGeneric />
    <div id="main">
    <section id="content" className="main">
    <span className="image main"><img src={image} alt="" /></span>
          <h2 className="title is-size-3 has-text-weight-bold is-bold-light">{title}</h2>
              <PageContent className="content" content={content} />
          
      </section>
    </div>
    </div>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (<AboutPageTemplate
    contentComponent={HTMLContent}
    title={post.frontmatter.title}
    content={post.html}
    image={post.frontmatter.image}
  />);
};

export const aboutPageQuery = graphql`
  query AboutPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        image
      }
    }
  }
`;
