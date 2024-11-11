import React, { useEffect } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
export const Map = () => {
  const libraries: any = ['places'];
  const mapContainerStyle = {
    width: '100vw',
    height: '100vh',
  };
  const center = {
    lat: 7.2905715,
    lng: 80.6337262,
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBtTLVYIMVS2GSqMGiYP5JWFba9mIZ23gs',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
    function success(position: any) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    }

    function error() {
      console.log("Unable to retrieve your location");
    }
    
  })
  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={20}
      // center={center}
      >
        <Marker position={center} />
      </GoogleMap>
      <button></button>
    </div>
  );
}
