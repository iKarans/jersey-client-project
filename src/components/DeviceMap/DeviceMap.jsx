import React, { useState } from "react";
import "./DeviceMap.scss"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

const DeviceMap = () => {
  const [details, setDetails] = useState(null);

  const getUserGeolocationDetails = () => {
      fetch(
          "https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708"
      )
          .then(response => response.json())
          .then(data => setDetails(data));
  };
  console.log(details);
  return (
    <>
    {/* <button onClick={getUserGeolocationDetails}>Click</button> */}
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className="map">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
    </>
  );
};

export default DeviceMap;
