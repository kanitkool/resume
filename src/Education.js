import React, { Component } from 'react';
import {
    Container,
    Topic,
    Info,
    SubInfo,
    InfoBox,
    YearBox,
    Year,
    Detail,
} from '../src/Style-js/Education.style';

class Education extends Component {
    render() {
        return (
            <Container>
                <Topic>Education</Topic>
                <InfoBox>

                    <YearBox>
                        <Year>2011</Year>
                    </YearBox>
                    <Detail>
                        <Info><b>Primary - Middle School</b></Info>
                        <SubInfo>Thung Yang Hua Fai Wit Tha Ya School</SubInfo>
                    </Detail>
                    <hr/>
                    <YearBox>
                        <Year>2014</Year>
                    </YearBox>
                    <Detail>
                        <Info><b>High School</b></Info>
                        <SubInfo>Triam Udom Saksa PatanaKran School <i>(Math-English-Computer)</i></SubInfo>
                    </Detail>
                    <hr/>
                    <YearBox>
                        <Year>2017</Year>
                    </YearBox>
                    <Detail>
                        <Info><b>(Present), Bachelor School</b></Info>
                        <SubInfo>Thung Yang Hua Fai Wit Tha Ya School</SubInfo>
                    </Detail>
                </InfoBox>
            </Container>
        );
    }
}

Education.defaultProps = {};

export default Education;
