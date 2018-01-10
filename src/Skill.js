import React, { Component } from 'react';
import {
    Container,
    Topic,
    Info,
    InfoBox,
    InfoHead,
    Circle1,
    Circle2,
    Circle3,
    Row,
    TextIn,
} from '../src/Style-js/Skill.style'
class Skill extends Component {
    render() {
        return (
            <Container>
                <Topic> Skill & Experience </Topic>
                <InfoBox>
                    <InfoHead>
                        <ul>
                            <li>
                                <b>School Record : 2.77</b>
                            </li>
                            <li>
                                <b>Work Experience</b>
                                <Info>TA (Teaching Assistance) at Mae Fah Luang University</Info>
                            </li>
                            <li>
                                <b>Technical Skill</b>
                                <center>

                                    <Info>programming Language</Info>
                                    <Row>
                                        <Circle1><TextIn>PHP</TextIn></Circle1>
                                        <Circle1><TextIn>HTML</TextIn></Circle1>
                                        <Circle1><TextIn>CSS</TextIn></Circle1>
                                        <Circle1><TextIn>JS</TextIn></Circle1>
                                    </Row>

                                    <Info>programming Language</Info>
                                    <Row>
                                        <Circle2><TextIn>Word</TextIn></Circle2>
                                        <Circle2><TextIn>PPT</TextIn></Circle2>
                                        <Circle2><TextIn>Excel</TextIn></Circle2>
                                        <Circle2><TextIn>Photo</TextIn></Circle2>
                                    </Row>

                                </center>
                            </li>
                            <li>
                                <b>Language Skill</b>
                                <center>
                                    <Row>
                                        <Circle3><TextIn>Thai</TextIn></Circle3>
                                        <Circle3><TextIn>Eng</TextIn></Circle3>
                                        <Circle3><TextIn>Chines</TextIn></Circle3>
                                    </Row>
                                </center>
                            </li>
                        </ul>
                    </InfoHead>
                </InfoBox>
            </Container>
        );
    }
}

Skill.defaultProps = {};

export default Skill;
