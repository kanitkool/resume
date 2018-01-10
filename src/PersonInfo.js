import React, { Component } from 'react';
import styled from 'styled-components'
import{
    Container,
    Topic,
    Info,
    InfoBox,
}from '../src/Style-js/PersonInfo.style'

class PersonInfo extends Component {
    render() {
        return (
            <Container>
                <Topic>Personal Information</Topic>
                <InfoBox>
                    <Info><b>Name :</b> Kanitkool Lukkaew (Beer)</Info>
                    <Info><b>Date of birth :</b> January 24, 1996</Info>
                    <Info><b>Nationality :</b> Thai</Info>
                    <Info><b>Religion :</b> Buddhism</Info>
                    <Info><b>Address :</b> Chiang Rai</Info>
                </InfoBox>
            </Container>
        );
    }
}

PersonInfo.defaultProps = {};

export default PersonInfo;
