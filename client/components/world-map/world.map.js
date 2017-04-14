import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { connect } from 'react-redux';
import _ from 'lodash';
import './world.map.sass';

const GoogleMapComponent = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: 30, lng: 0 }}
    onClick={props.onMapClick} >

    {props.markers.map((marker, index) => (
      <Marker onRightClick={() => props.onMarkerRightClick(index)}
        {...marker}
      />
    ))}
  </GoogleMap>
));

class WorldMap extends React.Component {
  render() {
    const markers = this.props.itinerary.map((x, i) => ({
      position: {
        lat: x.lat,
        lng: x.lng,
      },
      key: 'marker-' + i,
    }));

    return (
      <GoogleMapComponent
        containerElement={ <div className="map-container"/> }
        mapElement={ <div className="map-element"/> }
        markers={markers}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itinerary: state.map.get('itinerary').toArray(),
  };
};

const mapDispatchToProps = (dispatch) => {
  return { };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorldMap);
