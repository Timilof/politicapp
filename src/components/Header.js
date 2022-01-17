import React, { useState } from 'react';

import { useStaticQuery, graphql, Link } from "gatsby"

import styled from 'styled-components';

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
    padding: 0;

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

const Logo = styled.img`
    height: 26px;
    margin: 0;
    object-fit: contain;
    & > *{
      fill: ${props => (props.menuOpen ? "#fff" : `#000`)};
    }
`;

const ToMap = styled(Link)`
    color: #000;
    text-decoration: underline;
    padding: 20px;
    margin: 0 80px 0 auto;
`;

const Header = ({ noHead }) => {

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
      {noHead === undefined && 
        <>
            <LogoLink to="/">
                <Logo menuOpen={menuOpen} src={LogoSrc} alt="Go to politicapp home"/>
            </LogoLink>
            <ToMap to="/map">Map</ToMap>
        </>
      }
      <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MobileMenu data={cleanedData} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <DesktopMenu data={cleanedData} />
    </StyledHeader>
)}

export default Header
