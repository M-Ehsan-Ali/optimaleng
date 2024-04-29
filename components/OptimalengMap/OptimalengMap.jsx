import GoogleMapReact from "google-map-react";

export default function SimpleMap() {
  const defaultProps = {
    center: { lat: 43.814611, lng: -79.35025 },
    zoom: 11,
  };

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyBXssvmbG9jd3EEOsyYnuJHHadIwa-OsTI" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    ></GoogleMapReact>
  );
}
