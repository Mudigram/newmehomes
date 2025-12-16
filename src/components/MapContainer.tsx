"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { DefaultIcon } from "@/lib/leafletIcon";
import L from "leaflet";

L.Marker.prototype.options.icon = DefaultIcon;

const position: [number, number] = [36.1699, -97.34];

export default function MapComponent() {
    return (
        <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            className="w-full h-[500px] rounded-xl"
        >
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
                <Popup>
                    <strong>Location</strong>
                    <br />
                    A pretty CSS3 popup.
                </Popup>
            </Marker>
        </MapContainer>
    );
}
