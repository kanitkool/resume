import React, { Component } from 'react';

import{
    Container,
    Profile,
    Title,
    SubTitle,
}from '../src/Style-js/Profile.style'

class Header extends Component {
    render() {
        return (
            <Container>
                <center><Profile></Profile></center>
                <Title>Kanitkool Lukkaew</Title>
                <SubTitle>Web Developer Internship Application</SubTitle>
            </Container>
        );
    }
}

Header.defaultProps = {};

export default Header;
