import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const StyleWrapper = styled.div`
    width: 100%;
    background-color: ${props => props.theme.primary};
    margin-bottom: 30px;

`
    
const NavLinkStyled = styled(NavLink)`
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.primaryColor};
    text-decoration: none;
    transition: background-color 0.25s;
    padding: 10px 8px;
    display: inline-block;

    &:hover {
        background-color: ${props => props.theme.primaryDarkMedium};
        color: ${props => props.theme.primaryDarkMediumColor};
    }

    &.${(props) => props.activeClassName } {
        background-color: ${props => props.theme.primaryDark};
    }

`
NavLinkStyled.defaultProps = {
    activeClassName: 'active'
};

function Navigation () {
    return (
        <StyleWrapper>
            <div className="navigation-wrapper">
                <NavLinkStyled to="/learn">Learn</NavLinkStyled>
                <NavLinkStyled to="/build">Build</NavLinkStyled>
                <NavLinkStyled to="/about">About</NavLinkStyled>
            </div>
        </StyleWrapper>
    )
}

export default Navigation