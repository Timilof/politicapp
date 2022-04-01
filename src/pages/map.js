import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import {useSpring, animated} from 'react-spring';


// import { MapContainer, TileLayer, Marker, ZoomControl } from 'react-leaflet'
// import 'leaflet/dist/leaflet.css';
// import L from "leaflet";

import Layout from "../components/layout"
import SEO from "../components/seo"
import EventMetaData from "../components/EventMetaData";
import Maintext from '../components/Maintext';

import styled from "styled-components";

// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });

const key = "pk.eyJ1IjoidGltb3RoeWlzYXN0dWRlbnQiLCJhIjoiY2t6c2czNnFrNGJscTJ5bnJmZnNja2tzdiJ9.HIfP7O-M3q4fDUvFc49nag";

const CenterNotice = styled.div`
  margin: auto;
  height: 90vh;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNotice = styled(Maintext)`
  border: 1px solid #eee;
  background-color: ${(({ theme }) => theme.blue)};
  border-radius: 8px;
  padding: 4px 10px;
  color: ${(({ theme }) => theme.white)};
`;

// const MyMarker = styled(Marker)`
//     background: lime;
//     color: lime;
//     width: 20px;
//     height: 20px;
// `;

// const Wrapper = styled(animated.div)`
//     display: flex;
//     flex-direction: column;
//     background: #fff;
//     width: 100%;
//     margin: 0;
//     z-index: 3;
//     position: fixed;
//     top: 20vh;
//     height: 150vh;
//     overflow-y: scroll;
//     scroll-snap-type: y mandatory;
//     border-top-right-radius: 30px;
//     border-top-left-radius: 30px;
// }
    
// //     @media (${({ theme }) => theme.respondTo.desktop}) {
// //         display: none;
// //     }
// // `;

// const Close = styled.button`
//     font-size: 30px;
//     text-decoration: none;
//     color: #000;
//     background: transparent;
//     border: none;
//     z-index: 99;
//     position: absolute;
//     top: 10px;
//     right: 16px;
//     transform: rotate(135deg);
//     outline: ${({ theme }) => theme.blue};
    
//     @media (${({ theme }) => theme.respondTo.tablet}) {
//        display: none;
//       }
// `;

const mapPage = () => {
  
  // const eventsTemporary = data.allPrismicEvent.edges;
  // const [dataOpen, setDataOpen] = useState(true);
  // const [renderEvents, setRenderEvents] = useState([]);
  // const position = [52.3676, 4.9041];
  // let activeEvents = []

  // const hidden = useSpring({config:{duration: 200},
  //   top: dataOpen ? '100vh' : '20vh'});

  //   function closePopup(e){
  //     setDataOpen(true)
  // }

  //   const venueLatLan = [
  //       {
  //           name: "de balie" ,
  //           lat: 52.36322732175271,
  //           lan: 4.883027269499302
  //       },
  //       {
  //           name: "pakhuis de zwijger",
  //           lat: 52.376889521895805,
  //           lan: 4.9221051406646055
  //       },
  //       {
  //           name: "vondelbunker",
  //           lat: 52.360949126608325,
  //           lan: 4.87700180018026
  //       },
  //       {
  //           name: "?" ,
  //           lat: 52.3779926165163,
  //           lan: 4.8813344694998175
  //       },
  //       {   name: "spui 25",
  //           lat: 52.3686,
  //           lan: 4.8897
  //       },
  //       {   name: "UVA Roeterseiland",
  //           lat: 52.3638,
  //           lan: 4.9113
  //       },
  //       {   name: "New Metropolis Zuidoost",
  //           lat: 52.3139,
  //           lan: 4.9530
  //       },
  //       {   name: "New Metropolis Nieuw-West",
  //           lat: 52.3736,
  //           lan: 4.8266
  //       },
  //       {   name: "Aula - Oude Lutherse kerk",
  //           lat: 52.3683,
  //           lan: 4.8894
  //       },
  //   ];
    
    // function sortEventvenues(event){
    //   console.log(event)
    //     for (let index = 0; index < venueLatLan.length; index++) {
    //       const element = venueLatLan[index];
    //       if (element.name === (event.geo_location !== null ? event.geo_location.toLowerCase() : 'spui 25') || event.name){
    //         return {
    //           ...event,
    //           lat: element.lat,  
    //           lan: element.lan
    //         }
    //       }
    //       else {
    //           // return a default that doesnt have a location or custom lat/long
    //           return {
    //             ...event,
    //             lat: 52.3779926165163,
    //             lan: 4.8813344694998175,
    //           }
    //       }
    //     }
    // };

    // const returnVenueWithEvents = (lat) => {
    //     const venue = venueLatLan.find(venueItem =>  venueItem.lat === lat);
    //     setRenderEvents([activeEvents.find(event => event.geo_location === venue.name)]);
    //     return venue
    // };

    // // render locations that have active events once double events wont render
    // useEffect(()=>{
    //   if (eventsTemporary.length > 0) {
    //     eventsTemporary.forEach(element => {
    //       // console.log(element.data.geo_location, element.data.cover)
    //       activeEvents.push(sortEventvenues(element.node.data))
    //     })
    //   }
    // },[eventsTemporary])

    // function handleEventClick(e){
    //   // filter based on latlang and return venue name and all active events >>> display events in modal with active links
    //   returnVenueWithEvents(e.target._latlng.lat)
    //   setDataOpen(!dataOpen);
    // }

    // const pointers = activeEvents.map((item, i)=>
    //     <MyMarker key={i} position={[item.lat || 0, item.lan ?? item.lan]} eventHandlers={{
    //       click: (e) => {
    //           handleEventClick(e)
    //         }
    //     }}>
    //     </MyMarker>
    // );

  return (
        <Layout background={`#fff`} margins={`0`}>
          <SEO title="PoliticApp home" />
          <CenterNotice>
            <StyledNotice text="Coming very soon!!" />
          </CenterNotice>
        </Layout>
  );
   
  // return ( 
  //     <Layout background={`#fff`} margins={`0`}>
  //         <SEO title="PoliticApp home" />
  //         <MapContainer center={position} zoom={13} scrollWheelZoom={false} zoomControl={false} tap={false}>
  //             <TileLayer
  //                 // TODO // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  //                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //             />
  //             <ZoomControl position="bottomright" />
  //             {pointers}
  //         </MapContainer>
  //         {typeof window !== undefined &&
  //           <Wrapper style={hidden}>
  //             <Close onClick={e=>closePopup(e)}>+</Close>

  //             {renderEvents.length > 0 &&
  //             renderEvents.map((event, i)=>
  //             <EventMetaData toRender={event} key={i}/>)
  //             }
  //           </Wrapper>
  //         }
  //     </Layout>
  // );
}

export default mapPage;

// export const MAPPAGE_QUERY = graphql`{
//   allPrismicEvent {
//     edges {
//       node {
//         id
//         uid
//         data {
//           title{
//             text
//           }
//           time {
//             text
//           }
//           end_date
//           geo_location
//           is_date_range
//           language
//           start_date
//           streaming_possible
//           wheelchair_accessible
//           cover {
//             url
//           }
//           about_event {
//             content {
//               text
//             }
//             font_size
//             link_adress {
//               text
//             }
//             style
//             text_hyperlink_or_space
//             type_of_link
//           }
//           venue_location {
//             text
//           }
//           price {
//             content {
//               text
//             }
//             font_size
//             link_adress {
//               text
//             }
//             style
//             text_hyperlink_or_space
//             type_of_link
//           }
//           payment_link {
//             url
//           }
//         }
//       }
//     }
//   }
// }
//   `
