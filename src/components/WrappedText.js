import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSpring, animated} from 'react-spring';

import Maintext from './Maintext';

const ExpandButton = styled.button`
    font-size: 14px;
    text-decoration: underline;
    background: transparent;
    border: none;
    margin: 0;
    padding: 0;
    width: fit-content;
    pointer-events: all;
    @media (${({ theme }) => theme.respondTo.tablet}) {
        display: none;
    }
`;

const TextWrapper = styled(animated.div)`
    overflow: hidden;
    max-height: initial;
`;


const WrappedText = ({expanded, setExpanded, text}) => {


    const expandText = useSpring({ config: { duration: 300 },
        maxHeight: expanded ? '300px' : '0px',
    })

    function expand(){
        setExpanded(!expanded);
    }

    useEffect(() =>{
        let isMobile = window.innerWidth < 550 ? true : false;
        if (!isMobile) {
        setExpanded(true)
        }else{
        setExpanded(false)
        }
    },[])

    return (
        <>
        <TextWrapper style={expandText}>
            <Maintext text={text}/>
        </TextWrapper>
        <ExpandButton onClick={e => expand()}>
            {expanded ? "Show less":"Show more"}
            </ExpandButton>
        </>
    );
};

export default WrappedText;