import React, { useState, useEffect } from 'react';

import { graphql, Link } from 'gatsby';
import {useSpring, animated} from 'react-spring';

import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from "leaflet";

import Layout from "../components/layout"
import SEO from "../components/seo"
import EventMetaData from "../components/EventMetaData";

import styled from "styled-components";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


const MyMarker = styled(Marker)`
    background: lime;
    color: lime;
`;

const Wrapper = styled(animated.div)`
    display: flex;
    flex-direction: column;
    background: #fff;
    width: 100%;
    margin: 0;
    z-index: 3;
    position: fixed;
    top: 20vh;
    height: 150vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
}
    
    @media (${({ theme }) => theme.respondTo.desktop}) {
        display: none;
    }
`;

const Close = styled.button`
    font-size: 30px;
    text-decoration: none;
    color: #000;
    background: transparent;
    border: none;
    z-index: 99;
    position: absolute;
    top: 10px;
    right: 16px;
    transform: rotate(135deg);
    outline: ${({ theme }) => theme.blue};
    
    @media (${({ theme }) => theme.respondTo.tablet}) {
       display: none;
      }
`;

const IndexPage = ({ data }) => {
  
  const eventsTemporary = data.allPrismicEvent.nodes
  const [dataOpen, setDataOpen] = useState(true);
  const [renderEvents, setRenderEvents] = useState([]);
  const position = [52.3676, 4.9041];
  const hidden = useSpring({config:{duration: 200},
    top: dataOpen ? '100vh' : '20vh'});

    function closePopup(e){
      setDataOpen(true)
  }

    const venueLatLan = [
        {
            name: "de balie" ,
            lat: 52.36322732175271,
            lan: 4.883027269499302
        },
        {
            name: "pakhuis de zwijger",
            lat: 52.376889521895805,
            lan: 4.9221051406646055
        },
        {
            name: "vondelbunker",
            lat: 52.360949126608325,
            lan: 4.87700180018026
        },
        {
            name: "traphouse 🗿" ,
            lat: 52.3779926165163,
            lan: 4.8813344694998175
        },
    ]
    
    function sortEventvenues(event){
        for (let index = 0; index < venueLatLan.length; index++) {
          const element = venueLatLan[index];
          if(element.name == event.geo_location || event.name){

            return {
              ...event,
              lat: element.lat,  
              lan: element.lan
            }
          }
        }
    };

    const returnVenueWithEvents = (lat) => {
      const venue = venueLatLan.find(venueItem =>  venueItem.lat === lat);
      setRenderEvents([activeEvents.find(event => event.geo_location === venue.name)]);
      return venue
    };

    // render locations that have active events once double events wont render
    let activeEvents = []
    eventsTemporary.forEach(element => {
      activeEvents.push(sortEventvenues(element.data))
    });

    function handleEventClick(e){
      // filter based on latlang and return venue name and all active events >>> display events in modal with active links
      returnVenueWithEvents(e.target._latlng.lat)
      setDataOpen(!dataOpen)
    }

    const pointers = activeEvents.map((item, i)=>
        <MyMarker key={i} position={[item.lat, item.lan]} eventHandlers={{
          click: (e) => {
              handleEventClick(e)
            },
        }}>
        </MyMarker>
    );
   
  return(
    <>
    <Layout background={`#fff`} margins={`0`}>
        <SEO title="PoliticApp home" />
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} zoomControl={false} tap={false}>
            <TileLayer
                // TODO // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ZoomControl position="bottomright" />
            {pointers}
        </MapContainer>
        <Wrapper style={hidden} dataOpen={dataOpen}>
          <Close onClick={e=>closePopup(e)}>+</Close>

          {renderEvents.length > 0 &&
          renderEvents.map((event, i)=>
          <EventMetaData toRender={event} setDataOpen={setDataOpen} key={i}/>)
          }
        </Wrapper>
    </Layout>
    </>
  );
}

export default IndexPage

export const MAPPAGE_QUERY = graphql`{
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
    }
  }
  `
