import React from 'react';
import styled from 'styled-components';
import {useSpring, animated} from 'react-spring';

import MenuItem from './MenuItem'

const Wrapper = styled(animated.div)`
    display: flex;
    justify-content: center;
    align-items; center;
    flex-direction: column;
    position: absolute;
    background-color: ${(({ theme }) => theme.blue)};
    height: 100vh;
    width: 100%;
    margin: 0;
    
    @media (${({ theme }) => theme.respondTo.desktop}) {
        display: none;
    }
`;


const MobileMenu = ({menuOpen, setMenuOpen, data}) => {

    const hidden = useSpring({config:{duration: 200},
        transform: menuOpen ? 'translatex(0)' : 'translatex(120vw)'})

        const listItems = data.map((linkData, i)=>
            <MenuItem linkData={linkData} key={i}/>
        );
    return (
        <Wrapper style={hidden}>
            {listItems}
        </Wrapper>
    );
};



export default MobileMenu;