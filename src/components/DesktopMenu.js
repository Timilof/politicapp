import React from 'react';
import styled from 'styled-components';

import MenuItem from './MenuItem'

const Wrapper = styled.div`
    display: none;
    
    @media (${({ theme }) => theme.respondTo.tablet}) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0 100px 0 40px;
        padding: 0;
    }
`;

const DesktopMenu = ({data}) => {

    const listItems = data.map((linkData, i)=>
    <MenuItem linkData={linkData} key={i}/>
    );
    return (
        <Wrapper>
            {listItems}
        </Wrapper>
    );
};

export default DesktopMenu;