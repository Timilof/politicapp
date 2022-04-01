import React from 'react';

import styled from 'styled-components';

import ticket from "../images/ticket.svg";

import Heading3 from "../components/Heading3";
import Maintext from "../components/Maintext";
import TLBWrapper from "../components/TLBWrapper";

const Slider = styled.div`
    scroll-snap-align: start;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    height: 78vh;
    background-color: ${(({ theme }) => theme.white)};
    padding: 20px;
    overflow: hidden;
`;

const ImgWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`;

const Thumbnail = styled.img`
    max-width: 100px;
    max-height: 100px;
    object-fit: cover;
    margin: 30px 10px 0 0;
`;

const ExternalLink = styled.a`
      display: block;
      padding: 10px 30px;
      background-color: ${({ theme }) => theme.blue};
      position: relative;
      max-width: 50%;
      margin: 30px auto 0;
      border-radius: 100px;
      color: #fff;


      &::before{
        content: '';
        width: 44px;
        height: 34px;
        position: absolute;
        right: 5px;
        bottom: 4px;
        font-size: 20px;
        border: none;
        background-image: url(${ticket});
        background-repeat: no-repeat;
        background-size: contain;
        transition: .2s ease;
}
    }
`;

const EventMetaData = ({ toRender }) => {
    if (!toRender) return null;

    return (
        <Slider>
            <ImgWrapper>
                <Thumbnail src={toRender.cover.url && toRender.cover.url} alt={toRender.title.text && toRender.title.text}/>
                <Heading3 text={toRender.title.text} />
            </ImgWrapper>
            <Maintext text={`${toRender.date && toRender.date} ${toRender.time.text && toRender.time.text}`} />
            <Maintext text={toRender.geo_location && toRender.geo_location} />
            <TLBWrapper content={toRender.brood_text} />
            {/* TODO add live link to ticket site here... possibly also the detail page */}
            <ExternalLink>Get tickets</ExternalLink>
        </Slider>
    );
};

export default EventMetaData;