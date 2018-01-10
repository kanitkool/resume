import React, { Component } from 'react';
import styled from 'styled-components'
import Header from './Header'
import PersonInfo from "./PersonInfo";
import Skill from "./Skill";
import {
    Container,
} from '../src/Style-js/App.style'
import Education from "./Education";
import Learn from "./Learn";
import Contact from "./Contact";
class App extends Component {

    render() {
    return (
      <Container>
          <Header/>
          <PersonInfo/>
          <Skill/>
          <Education/>
          <Learn/>
          <Contact/>
      </Container>
    );
  }
}

export default App;
