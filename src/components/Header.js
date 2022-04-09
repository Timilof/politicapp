import React, { useState } from 'react';

import { useStaticQuery, graphql, Link } from "gatsby"

import styled from 'styled-components';

import ArrowBack from "../images/arrowBack.svg";
import LogoSrc from "../images/politicapp_logo.svg"
import MobileMenu from "../components/MobileMenu";
import MenuButton from "../components/MenuButton";
import DesktopMenu from "../components/DesktopMenu";

const StyledHeader = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 99;    
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (${({ theme }) => theme.respondTo.tablet}) {
      flex-direction: row;
      width: 100%;
      margin: 0;
      padding: 2px 20px 2px 20px;
      box-shadow: 0 2px 8px 0px rgba(0,0,0,0.1);
      background: #fff;
    }
`;

const LogoLink = styled(Link)`
    position: absolute;
    top: 18px;
    left: 20px;
    margin: 0;
    z-index: 99;
    overflow: hidden;
    padding: ${props => (props.backButton ? "0 10px" : "0")};
    border: none;
    height: ${props => (props.backButton ?? "40px")};
    background: none;
    display: ${props => (props.backButton ? "flex" : "initial")};
    justify-content: center;

    @media (${({ theme }) => theme.respondTo.tablet}) {
      align-items: baseline;
      display: flex;
      width: 100px;
      position: initial;
      margin: 0 auto 0 40px;

      &:hover{
        cursor: pointer;
      }
    }
`;

const Back = styled.img`
  position: fixed;
  top: 30px;
  width: 20px;
`;

const Logo = styled.img`
    height: 26px;
    margin: 0;
    object-fit: contain;
    & > *{
      fill: ${props => (props.menuOpen ? "#fff" : `#000`)};
    }
`;

const ToMap = styled(Link)`
  color: #fff;
  text-decoration: underline;
  padding: 2px 16px 7px;
  margin: 20px 94px 0px auto;
  font-size: 20px;
  border-radius: 16px;
  background-color: #000;
`;

const Header = ({ noHead, backButton }) => {

  const goBack = (e) => {
    {typeof window !== undefined &&
      e.preventDefault()
      window.history.back()
    }
  }

  const [menuOpen, setMenuOpen] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      prismicMenu{
        data{
          menu_item{
          where_to
          link_display{
            text
          }
          externe_link_adress{
            text
          }
          }
        }
      }
    }
  `);

      
  const cleanedData = data.prismicMenu.data.menu_item;

  return(
    <StyledHeader>
      {!noHead && 
        <LogoLink to="/">
          <Logo menuOpen={menuOpen} src={LogoSrc} alt="Go to politicapp home"/>
        </LogoLink>
      }
      {backButton && 
        <LogoLink backButton={backButton} as="button" onClick={goBack}>
          <Back src={ArrowBack} alt="arrow back" />
        </LogoLink>
      }
      {/* <ToMap to="/map">Map</ToMap> */}
      <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MobileMenu data={cleanedData} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <DesktopMenu data={cleanedData} />
    </StyledHeader>
)}

export default Header
