import React from 'react';
import { Link } from 'gatsby';
import Heading1 from "../components/Heading1";
import Maintext from "../components/Maintext";

import styled from "styled-components";

const StyledHead = styled(Heading1)`
    color: ${(({ theme }) => theme.red)};
    max-width: 90%;
    font-style: italic;
    `;
    
    const MetaData = styled(Maintext)`
    color: ${(({ theme }) => theme.blue)};
    font-weight: 100;
    margin: 0;
    `;
    
    const MetaWrapper = styled.div`
    display: flex;
    flex-direction: row;
    wrap: nowrap;
    justify-content: space-between;
    margin: 0 6px 0 0;
    `;
    
    const StyledLink = styled(Link)`
    text-decoration: none;
    border: none;
    border-bottom: 1px solid #eee;
    display: block;
    color: ${(({ theme }) => theme.blue)};
`;

const EventLink = ({ title, event_type, date, location, price, time, cover }) => {

    return (
        <StyledLink to="/">
            <StyledHead text={title}/>
            <img src={cover} alt={`cover of ${title}`}/>
            <MetaWrapper>
                <MetaData text={date+` `+time} />
                <MetaData text={`@`+location}/>
            </MetaWrapper>
            <Maintext text={event_type} />
        </StyledLink>
    );
};

export default EventLink;