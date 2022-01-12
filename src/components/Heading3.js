import React from 'react';

import styled from 'styled-components';

const Head = styled.h2`
    margin: 26px 0 20px 0;
    padding: 0;
    font-size: 22px;
    font-weight: bold;
    text-decoration: none;
    @media (${({ theme }) => theme.respondTo.tablet}) {
        font-size: 28px;
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