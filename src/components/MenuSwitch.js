import React from 'react';
import styled from 'styled-components';


const Switch = styled.button`
    font-size: 18px;
    text-decoration: underline;
    color: #000;
    background: transparent;
    border: none;
    z-index: 99;
    position: absolute;
    top: 30px;
    right: 20px;
    
    @media (${({ theme }) => theme.respondTo.desktop}) {
       display: none;
      }
`;

const MenuSwitch = ({setMenuOpen, menuOpen}) => {

    function switchMenu(){
        setMenuOpen(!menuOpen)
    }

    return (
        <Switch onClick={e => switchMenu()}>
            {menuOpen ? 'Close' : 'Menu'}
        </Switch>
    );
};

export default MenuSwitch;