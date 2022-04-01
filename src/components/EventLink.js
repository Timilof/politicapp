import React from 'react';
import { Link } from 'gatsby';
import Heading1 from "../components/Heading1";
import Maintext from "../components/Maintext";

import styled from "styled-components";

const StyledHead = styled(Heading1)`
  color: ${(({ theme }) => theme.black)};
      max-width: 90%;
      font-style: italic;
      margin: 10px;
  `;

const StyledImg = styled.img`
  max-height: 300px;
  object-fit: cover;
  width: 100%
`;
  
  const MetaData = styled(Maintext)`
  // color: ${(({ theme }) => theme.blue)};
  // font-weight: 100;
  margin: 0;
  `;
  
  const MetaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  wrap: nowrap;
  justify-content: space-between;
  margin: 0 10px;
  `;
  
  const StyledLink = styled(Link)`
  text-decoration: none;
  border: none;
  border-bottom: 1px solid #eee;
  display: block;
  color: ${(({ theme }) => theme.blue)};
  `;

  const EventType = styled(Maintext)`
      margin: 0 10px 20px;
      text-transform: capitalize;
  `;

const EventLink = ({ title, event_type, date, location, secondLocation, price, time, cover, to }) => {

    return (
        <StyledLink to={to}>
            <StyledHead text={title}/>
            <StyledImg src={cover} alt={`cover of ${title}`}/>
            <MetaWrapper>
                <MetaData text={date+` `+time} />
                <MetaData text={`@${(location === null || location === 'other' ? secondLocation : location)}`}/>
            </MetaWrapper>
            <EventType text={event_type} />
        </StyledLink>
    );
};

export default EventLink;