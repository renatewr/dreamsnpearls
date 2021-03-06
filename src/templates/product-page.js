import React from 'react';
import graphql from 'graphql';
import Features from '../components/Features';
import HeaderGeneric from '../components/Header'
import Helmet from 'react-helmet'


export const ProductPageTemplate = ({
  image, title, heading, description, intro, main, fullImage,
}) => (
  <div>
  <Helmet title={title} />
  <HeaderGeneric />
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div
                className="full-width-image-container margin-top-0"
                style={{ backgroundImage: `url(${image})` }}
              >
                <h2
                  className="has-text-weight-bold is-size-1"
                  style={{
                    boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                    backgroundColor: '#f40',
                    color: 'white',
                    padding: '1rem',
                  }}
                >
                  {title}
                </h2>
              </div>
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
                  <p>{description}</p>
                </div>
              </div>
              <Features gridItems={intro.blurbs} />
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile is-parent">
                    <article className="tile is-child">
                      <span className="image main"><img
                        style={{ borderRadius: '5px' }}
                        src={main.image3.image}
                        alt={main.image3.alt}
                      />
                      </span>
                    </article>
                  </div>
                </div>
              </div>
              <div
                className="full-width-image-container"
                style={{ backgroundImage: `url(${fullImage})` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  

  return (
    <ProductPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      description={frontmatter.description}
      intro={frontmatter.intro}
      main={frontmatter.main}
      fullImage={frontmatter.full_image}
    />
  );
};

export const productPageQuery = graphql`
  query ProductPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        path
        image
        heading
        description
        intro {
          blurbs {
            image
            text
            price
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image
          }
          image2 {
            alt
            image
          }
          image3 {
            alt
            image
          }
        }
        full_image  
      }
    }
  }
`;
