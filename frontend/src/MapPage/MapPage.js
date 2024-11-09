import React, {useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import osm from "./map-provider";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapPage = () => {
    const [markerPosition, setMarkerPosition] = useState(null);
    const [center, setCenter] = useState({latit: 46.822643, longit: 23.570073});
    const ZOOM_LEVEL = 9;
    const navigate = useNavigate();
    const mapRef = useRef();

    const MapClickHandler = () => {
        useMapEvents({
            click(e) {
                const { lat, lng } = e.latlng;
                setMarkerPosition([lat, lng]);

                // trimiterea coordonatelor la form-ul de adaugare
                navigate('/add-coordinates-form', { state: { lat, lng } });
            },
        });
        return null;
    };

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <h2>Click on the map below to select a location</h2>
            <MapContainer center={[center.latit, center.longit]} zoom={ZOOM_LEVEL} style={{ height: '80%', width: '80%', margin: 'auto' }} ref={mapRef}>
                <TileLayer
                    url={osm.maptiler.url}
                    attribution={osm.maptiler.attribution}
                />
                <MapClickHandler />
                {markerPosition && <Marker position={markerPosition}></Marker>}
            </MapContainer>
        </div>
    );
};

export default MapPage;
