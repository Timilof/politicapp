import React, { useState } from 'react';

import { graphql, Link } from 'gatsby';

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
`;

const IndexPage = ({ data }) => {

    console.log(data.allPrismicEvent.nodes)

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

    console.log(venueLatLan)
    const [dataOpen, setDataOpen] = useState(true);

    const position = [52.3676, 4.9041]
    function handleEventClick(e){
        console.log(e)
        setDataOpen(!dataOpen)
    }

    


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
            <MyMarker position={position} eventHandlers={{
                click: (e) => {
                    handleEventClick(e)
                },
            }}>
                    {/* <p>title</p>
                    <p>time</p>
                    <p>venue name</p>
                    <p>location</p>
                    <p>Route to location</p> */}
            </MyMarker>
        </MapContainer>
        <EventMetaData dataOpen={dataOpen} setDataOpen={setDataOpen} />
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
        }
      }
    }
  }
  `
