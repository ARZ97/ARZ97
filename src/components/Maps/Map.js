import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = () => {
  return (
    <GoogleMap
      apiKey={"AIzaSyB3MydkVbi1Qecct75ePtDqVerNDszGJuQ"}
      defaultZoom={14}
      center={{ lat: 20.72367301111884, lng: -103.39318875275175 }}
      markers={{ lat: 20.72367301111884, lng: -103.39318875275175 }}
    ></GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(Map));
