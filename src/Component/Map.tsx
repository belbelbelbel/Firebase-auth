import React from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
export const Map = () => {
    const libraries:any = ['places'];
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
    
      return (
        <div>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={20}
            // center={center}
          >
            <Marker position={center} />
          </GoogleMap>
        </div>
      );
}
