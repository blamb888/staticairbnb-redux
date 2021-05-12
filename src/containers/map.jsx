import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


// eslint-disable-next-line react/prefer-stateless-function
class Map extends Component {
  render() {
    const style = {
      height: "100vh"
    };

    let marker = null;
    let center = { lat: 48.856614, lng: 2.352222 };

    return (
      <div className="col-sm-5" style={style}>
        <GoogleMapReact
          center={center}
          defaultZoom={15}>
          {marker}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
