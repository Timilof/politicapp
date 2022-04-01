import React from 'react';
import styled from "styled-components";

const StyledLink = styled.a`
    display: block;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 18px;
    background-color: ${props => (props.color ? props.color : "#1552F0")};
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    letter-spacing: 1px;
`;
const ActionButton = ({text, href, color, className}) => {
    return (
        <StyledLink target="_blank" href={href} color={color} className={className}>
            {text}
        </StyledLink>
    );
};

export default ActionButton;