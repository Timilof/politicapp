import React from "react"

import { graphql, Link } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components";
import EventLink from "../components/EventLink";

const OnlyMobile = styled(Link)`
    font-size: 16px;
    color: #000;
    @media (${({ theme }) => theme.respondTo.tablet}) {
      display: none;
    }
`;

const IndexPage = ({ data }) => {

  const events = data.allPrismicEvent.nodes
  console.log(events)

  const eventList = events.map((event, i)=>
    <EventLink  
          key={i}
          title={event.data.title.text}
          event_type={event.data.event_type}
          date={event.data.date}
          location={event.data.geo_location}
          price={event.data.price.text}
          time={event.data.time.text}
          cover={event.data.cover.url}
        />
    );

  return(
    <>
    <Layout background={`#fff`}>
      <SEO title="Discover political events in the city" />
     
      {eventList}
    </Layout>
    </>
  );
}

export default IndexPage

export const HOMEPAGE_QUERY = graphql`{
  allPrismicEvent{
    nodes{
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
      }
    }
  }
}
`