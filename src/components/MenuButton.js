import React from 'react';
import styled from 'styled-components';

const Switch = styled.button`
    font-size: 22px;
    text-decoration: underline;
    color: #000;
    color: ${props => (props.menuOpen ? "#fff" : "#000")};
    background: transparent;
    border: none;
    z-index: 99;
    position: absolute;
    top: 20px;
    right: 20px;
    outline: #000;
    
    @media (${({ theme }) => theme.respondTo.tablet}) {
       display: none;
      }
`;

const MenuButton = ({setMenuOpen, menuOpen, className}) => {

    function switchMenu(){
        setMenuOpen(!menuOpen)
    }

    return (
        <Switch className={className} menuOpen={menuOpen} onClick={e => switchMenu()}>
            {menuOpen ? 'Close' : 'Menu'}
        </Switch>
    );
};

export default MenuButton;