import React from "react"

import moment from "moment";
import { graphql } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"

import EventLink from "../components/EventLink";

const IndexPage = ({ data }) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  
  today = yyyy + '/' + mm + '/' + dd;
  
  const filterPastDates = (event) => {
    const eventDay = new Date(event.node.data.start_date);
    const toDay = new Date(today);

    if (eventDay >= toDay)
      {return event}
  }

  const eventsInPresent = data.allPrismicEvent.edges.filter(filterPastDates);

  const eventList = eventsInPresent.map((event, i) =>
    <EventLink
          key={i}
          title={event.node.data.title.text}
          event_type={event.node.data.event_type}
          date={moment(event.node.data.start_date).format("Do MMM")}
          location={event.node.data.geo_location}
          secondLocation={event.node.data.venue_location.text}
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
  allPrismicEvent (sort: {fields: [data___start_date], order: ASC}) {
    edges {
      node {
        id
        uid
        data {
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
    }
  }
}
`