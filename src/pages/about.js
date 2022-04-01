import React from 'react';

import { graphql } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"

import TLBWrapper from "../components/TLBWrapper";
import styled from 'styled-components';

const StyledWrapper = styled(TLBWrapper)`
  margin: 0 10px;
`;

const about = ({ data }) => {
  const aboutData = data.prismicAbout.data

  return (
    <>
      <Layout background={`#E84D43`}>
        <SEO title="About Politicapp" />
        <StyledWrapper content={aboutData.banner_text} />
      </Layout>
    </>
  );
};

export default about;

export const ABOUT_QUERY = graphql`{
prismicAbout{
    data{
      banner_text{
        content{
          text
        }
        style
        type_link
        font_grootte
        text_hyperlink_or_space
      }
    }
  }
}
`