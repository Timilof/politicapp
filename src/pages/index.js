import React from "react"

import { graphql } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"

import EventLink from "../components/EventLink";

const IndexPage = ({ data }) => {
  const eventList = data.allPrismicEvent.edges.map((event, i)=>
    <EventLink  
          key={i}
          title={event.node.data.title.text}
          event_type={event.node.data.event_type}
          date={event.node.data.date}
          location={event.node.data.geo_location}
          price={event.node.data.price.text}
          time={event.node.data.time.text}
          cover={event.node.data.cover.url}
          to={event.node.uid}
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
    edges{
      node{
        id
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
      }
    }
  }
  }
}
`