import React from 'react';
import styled from 'styled-components';

const Styledtext = styled.p`
    font-size: 14px;
    text-decoration: none;
    color: #000;
    font-weight: 900;
    letter-spacing: 1px;
    @media (${({ theme }) => theme.respondTo.tablet}) {
        font-size: 20px;
    }
`;

const Maintext = ({text, className}) => {
    return (
        <Styledtext
        className={className}>
            {text}
        </Styledtext>
    );
};

export default Maintext;