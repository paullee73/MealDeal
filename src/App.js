import React, { Component } from 'react';
import GoogleMap from './google_map';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{height: '100%'}}>
        Map me!
        <GoogleMap lat={38.0347} lng={-78.5002} />
      </div>
    )
  }
}
