import React from 'react'
import { db } from '../../fire';
import { compose } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, TrafficLayer } from 'react-google-maps'

const MyMap = compose(
  withScriptjs,
  withGoogleMap
)(props => {
  if(props.markerLat != null && props.markerLng != null){
     return (<GoogleMap
      zoom={11}
      center={{lat: props.markerLat, lng: props.markerLng}}
      >
        <TrafficLayer autoUpdate />
        <Marker
          position={{lat: props.markerLat, lng: props.markerLng}}
          icon='http://maps.google.com/mapfiles/ms/icons/bus.png'
          //position={{lat: 10, lng: 20}}
        />
      </GoogleMap>)
    } else {
      return(
        <GoogleMap
         defaultZoom={1}
         ///efaultCenter={{lat: props.markerLat, lng: props.markerLng}}
         defaultCenter={{lat: 0, lng: 0}}
       />
      )
    }
  }
);

class IdtcMapWidget extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lastPosition: {},
    };

  }

  componentWillMount() {
    let gpsRef = db.ref('gps');

    gpsRef.on('child_added', snapshot => {
      console.log("child_added");
      let gps = { lat: snapshot.val().lat, lng: snapshot.val().lng, id: snapshot.key};
      this.setState({ lastPosition: gps});
    });

  }

  render() {
    return(
      <div className="row">
        <div className="col-lg-12">
          <div className="white-box">
            <MyMap
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCujXXHh95WEtYr-6ua1Xjy5oCEgPiWGik&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              markerLat = {this.state.lastPosition.lat}
              markerLng = {this.state.lastPosition.lng}
            />
          </div>
        </div>
      </div>
    );
  }

}

export default IdtcMapWidget
