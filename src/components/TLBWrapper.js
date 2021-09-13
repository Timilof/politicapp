import React from 'react';

import styled from 'styled-components';

import TextLinkBlock from "./TextLinkBlock";

const Wrapper = styled.div`
    padding: 0;
    margin: 0;
`;

const TLBWrapper = ({content, className}) => {

    const elements = content.map((item, i)=>
        <TextLinkBlock item={item} key={i}/>
    );

    return (
        <Wrapper className={className}>
           {elements} 
        </Wrapper>
    );
};

export default TLBWrapper;