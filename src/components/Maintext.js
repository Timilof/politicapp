import React from 'react';
import styled from 'styled-components';

const Styledtext = styled.p`
    font-size: 16px;
    text-decoration: none;
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