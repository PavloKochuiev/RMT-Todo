import React, { Component } from 'react';
import Header from '../components/Header/Header';
import TitleBlock from '../components/TitleBlock/TitleBlock';

export default class Welcome extends Component {
  render() {
    return (
      <>
        <Header />
        <TitleBlock />
      </>
    );
  }
}
