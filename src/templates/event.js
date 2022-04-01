import React from "react"

import moment from "moment";
import { graphql, Link } from 'gatsby';

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
    // display: flex;
    // flex-direction: row;
    // wrap: nowrap;
    // justify-content: space-between;
    margin: 0 10px 20px;

    p {
      color: ${(({ theme }) => theme.blue)};
      font-weight: 600;
      letter-spacing: 1px;
      margin: 0;
    }
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

const ImageContainer = styled.div`
  min-height: 260px;
  display: flex;
  align-items: center;

  img {
    max-height: 380px;
    width: 100%;
    object-fit: cover;
    margin: 0;
  }
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
    <Layout background={`#fff`} margins={`0 0 60px`} backButton noHead={"no head :-("}>
      <SEO title={data.title.text} />
      <ImageContainer>
        <img src={data.cover.url ? data.cover.url : ""} alt={`cover for ${data.title.text}`}/>
      </ImageContainer>
      <StyledHeading2 text={data.title.text}/>
      <Location text={`@${(data.geo_location === null || data.geo_location === 'other' ? data.venue_location.text : data.geo_location)}`}/>
      <MetaWrapper>
        <MetaData
          text={moment(data.start_date).format("Do MMM") +
          (data.end_date !== null ? ` - ${moment(data.end_date).format("Do MMM")}`
          : '') + ` `+ data.time.text}
        />
        <TLBWrapper content={data.price} />
        <MetaData text={data.streaming_possible !== null || data.streaming_possible === true ? "Streaming possible" : ''} />
        <MetaData text={data.wheelchair_accessible !== null || data.wheelchair_accessible === true ? "wheelchair accessible" : ''} />
      </MetaWrapper>
      <MarginWrapper content={data.about_event}/>
      <LinkWrapper>
      {/* todo */}
        <ActionButton color={"#2CB04C"} href={data.payment_link.url} text={"Get tickets"} />
        {/* <ActionButton href={"#calendar"} text={"Add to calendar"} /> */}
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
          time {
            text
          }
          end_date
          geo_location
          is_date_range
          language
          start_date
          streaming_possible
          wheelchair_accessible
          cover {
            url
          }
          about_event {
            content {
              text
            }
            font_size
            link_adress {
              text
            }
            style
            text_hyperlink_or_space
            type_of_link
          }
          venue_location {
            text
          }
          price {
            content {
              text
            }
            font_size
            link_adress {
              text
            }
            style
            text_hyperlink_or_space
            type_of_link
          }
          payment_link {
            url
          }
            }
    }
}`