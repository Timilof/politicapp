import React from 'react';

import styled from 'styled-components';

const Head = styled.h1`
    margin: 26px 0 20px 0;
    padding: 0;
    font-size: 36px;
    font-weight: 400;
    text-decoration: none;
    @media (${({ theme }) => theme.respondTo.tablet}) {
        font-size: 40px;
    }
`;

const Heading1 = ({ text, className }) => {
    return (
        <Head className={className}>
            {text}
        </Head>
    );
};

export default Heading1;