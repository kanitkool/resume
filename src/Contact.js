import React, { Component } from 'react';
import {
    Container,
    Topic,
    Info,
    InfoBox,
    TextCon,
} from '../src/Style-js/Contact.style';
class Contact extends Component {
    render() {
        return (
            <Container>
                <Topic>Contact Information</Topic>
                <InfoBox>
                    <Info>
                        <i className="material-icons">mood</i><TextCon>Telephone:</TextCon> 095-449-8052
                    </Info>
                    <Info>
                        <i className="material-icons">mood_bad</i><TextCon>E-mail:</TextCon> Kantikool.beer@gmail.com
                    </Info>
                    <Info>
                        <i className="material-icons">sentiment_satisfied</i><TextCon>Facebook:</TextCon> BeeRo Ly
                    </Info>
                    <Info>
                        <i className="material-icons">sentiment_very_satisfied</i><TextCon>Lind ID:</TextCon> beer240139
                    </Info>
                    <Info>
                        <i className="material-icons">sentiment_neutral</i><TextCon>Address:</TextCon> Mae Fah Luang University 333 M.1 Thasud, Muang, Chiang Rai 57100
                    </Info>
                </InfoBox>
            </Container>
        );
    }
}

Contact.defaultProps = {};

export default Contact;
