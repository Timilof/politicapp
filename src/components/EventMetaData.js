import React, { useState } from 'react';

import styled from 'styled-components';
import {useSpring, animated} from 'react-spring';

import ticket from "../images/ticket.svg";

import Heading3 from "../components/Heading3";
const Wrapper = styled(animated.div)`
    display: flex;
    flex-direction: column;
    background: transparent;
    width: 100%;
    margin: 0;
    z-index: 3;
    position: fixed;
    top: 28vh;
    height: 150vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
}
    
    @media (${({ theme }) => theme.respondTo.desktop}) {
        display: none;
    }
`;

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

    // &::before{
    //     content: '+';
    //     width: 34px;
    //     height: 34px;
    //     position: absolute;
    //     right: -18px;
    //     bottom: -5px;
    //     font-size: 20px;
    //     border: none;
    //     background-repeat: no-repeat;
    //     background-size: contain;
    //     transform: rotate(135deg);
    //     transition: .2s ease;
    // }

    
    @media (${({ theme }) => theme.respondTo.tablet}) {
       display: none;
      }
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
      margin: 50px auto 0;
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

const EventMetaData = ({dataOpen, setDataOpen}) => {


    const hidden = useSpring({config:{duration: 200},
        top: dataOpen ? '28vh' : '100vh'})


    function closePopup(e){
        setDataOpen(false)
    }

    // const listItems = data.map((linkData, i)=>
    //     <MenuItem linkData={linkData} key={i}/>
    // );
    
    return (
        <Wrapper style={hidden}>
            <Slider>
                <Close onClick={e=>closePopup(e)}>+</Close>
                <ImgWrapper>
                    <Thumbnail src="https://images.prismic.io/politicapp1/bded7514-0c20-4f83-9a03-738209c08dfa_Header_Floriade-Aerial_RGB.jpeg?auto=format%2Ccompress&fit=max&q=50" alt=""/>
                    <Heading3 text={"WeMakeThe.City Green kick-off"} />
                </ImgWrapper>
                <p>2021-09-02 14:00</p>
                <p>Pakhuis De Zwijger</p>
                <p>The day before the official presentation of the Dutch Holocaust Memorial of Names, the Polish-Jewish architect Daniel Libeskind gives a presentation about the development of his architectural design.</p>
                <ExternalLink>Get tickets</ExternalLink>
            </Slider>
        </Wrapper>
    );
};

export default EventMetaData;