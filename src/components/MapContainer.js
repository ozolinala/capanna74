import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = ({ location }) => {
  const mapStyles = {
    height: "50vh",
    width: "100%",
    height:"100%",
    borderRadius: "20px",
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAHuGRrU7OZF8MPMbN_tZpuF8XQ9Gub8J0"
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={14}
        center={location}
      >
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;