import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import affectedDistrictsData from '../data/affectedDistrictsData.json';

function AffectedDistricts() {
  const onEachDistrict = (district, layer) => {
    const districtName = district.properties.name;
    layer.bindPopup(`<h3>${districtName}</h3>`);
    layer.setStyle({
      color: '#ff7800',
      weight: 2,
      fillColor: districtName === "Wayanad" ? '#ff0000' : (districtName === "Chennai" ? '#00ff00' : '#ff5733'), // Highlight Wayanad in red and Chennai in green
      fillOpacity: 0.5
    });
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center' }}>Affected Districts During Disaster</h2>
      <br></br>
      <MapContainer style={{ height: '500px', width: '100%' }} center={[13.0827, 80.2707]} zoom={9}>

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <GeoJSON data={affectedDistrictsData} onEachFeature={onEachDistrict} />
      </MapContainer>
    </div>
  );
}

export default AffectedDistricts;
