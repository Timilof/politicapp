import React from "react"

import { graphql } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"

import Heading2 from "../components/Heading2";
import Maintext from "../components/Maintext";
import TLBWrapper from "../components/TLBWrapper";
import ActionButton  from "../components/ActionButton";

import styled from "styled-components";

const Location = styled(Maintext)`
  margin: 0 10px 15px;
`;

const MetaData = styled(Maintext)`
    color: ${(({ theme }) => theme.blue)};
    font-weight: 600;
    letter-spacing: 1px;
    margin: 0;
`;

const MetaWrapper = styled.div`
    display: flex;
    flex-direction: row;
    wrap: nowrap;
    justify-content: space-between;
    margin: 0 10px;
`;

const LinkWrapper = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    padding: 20px 0;
`;

const MarginWrapper = styled(TLBWrapper)`
    margin: 0 14px;
    `;
    
const StyledHeading2 = styled(Heading2)`    
    margin: 10px;
`;

const event = ({ data }) => {
  data = data.prismicEvent.data

  return(
    <>
    <Layout background={`#fff`} margins={`0 0 60px`} noHead={"no head :-("}>
      <SEO title={data.title.text} />
      <img src={data.cover.url ? data.cover.url : "sadness"} alt={`cover for ${data.title.text}`}/>
      <StyledHeading2 text={data.title.text}/>
      <Location text={`@${data.geo_location}`}/>
      <MetaWrapper>
          <MetaData text={data.date+` `+data.time.text} />
      </MetaWrapper>
      <MarginWrapper content={data.brood_text}/>
      <LinkWrapper>
      {/* todo */}
        <ActionButton color={"#2CB04C"} href={"#get_ticket"} text={"Get tickets"} />
        <ActionButton href={"#calendar"} text={"Add to calendar"} />
      </LinkWrapper>
    </Layout>
    </>
  );
}

export default event

export const EVENT_QUERY = graphql`
query event($id: String!) {
    prismicEvent(id: { eq: $id }){
    uid
        data{
                title{
                    text
                }
                cover{
                    url
                }
                time{
                  text
                }
                date
                geo_location
                price{
                  text
                }
                event_type
                brood_text {
                  text_link_of_space
                  type_link
                  style
                  context {
                    text
                  }
                }
            }
    }
}`