import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavLinkStyled = styled(NavLink)`
    &.${(props) => props.activeClassName } {
        color: green;
    }
`
NavLinkStyled.defaultProps = {
    activeClassName: 'active'
};

class Navigation extends Component {
    render() {
        return (
            <div>
                <NavLinkStyled exact to="/">Home</NavLinkStyled>
                <NavLinkStyled to="/learn">Learn</NavLinkStyled>
                <NavLinkStyled to="/about">About</NavLinkStyled>
            </div>
        )
    }
}

export default Navigation