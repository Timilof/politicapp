import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../styling/theme';

import Header from "./Header"
import "./layout.css"


const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.background ? props.background : "#fff")};
  }
`;

const Wrapper = styled.main`

  margin: ;
  margin: ${props => (props.margins ? props.margins : "120px 0 0 ")};

  maxWidth: 960px;
  overflow: hidden;
  
  @media (${({ theme }) => theme.respondTo.tablet}) {
    max-width: ${({ theme }) => theme.maxContainerWidthTablet};
    margin: 200px 6vw 0;
    }
    @media (${({ theme }) => theme.respondTo.desktop}) {
      max-width: ${({ theme }) => theme.maxContainerWidth};
    }
`;

const Copyright = styled.p`
  color: #333;
  font-size: 15px;
  margin: 20px 0;
  text-align: center;
`;


const Layout = ({ children, background, margins, noHead }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle background={background}/>
      <Header noHead={noHead}/>
        <Wrapper margins={margins} >{children}</Wrapper>
        <Copyright>© {new Date().getFullYear()}, PoliticApp</Copyright>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
