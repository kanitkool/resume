import React, { Component } from 'react';
import {
    Container,
    Topic,
    InfoBox,
    Info,
    SubInfo,
} from '../src/Style-js/Learn.style';
class Learn extends Component {
    render() {
        return (
            <Container>
                <Topic> Skill & Experience </Topic>
                <InfoBox>
                    <ul>
                        <li>
                            <Info>Job description for learning</Info>
                            <SubInfo>
                                I want to internship in web developer position
                                which including both of front-end and back-end
                                developer and I want to develop the website to
                                be the good website for users.
                            </SubInfo>
                        </li>

                        <li>
                            <Info>Internship duration</Info>
                            <SubInfo>
                                (4 months) January 2018 - April 2018
                            </SubInfo>
                        </li>

                        <li>
                            <Info>Learning Objective</Info>
                            <SubInfo>
                                To develop myself by the real work and on the
                                real place and practice myself to solve the
                                problem when it occurs with the real work.
                            </SubInfo>
                        </li>
                    </ul>
                </InfoBox>
            </Container>
        );
    }
}

Learn.defaultProps = {};

export default Learn;
