"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { DefaultIcon } from "@/lib/leafletIcon";

L.Marker.prototype.options.icon = DefaultIcon;

const position: [number, number] = [36.1699, -97.34];

export default function LeafletMap() {
    return (
        <MapContainer
            center={position}
            zoom={13}
            className="w-full h-[500px] rounded-xl"
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
                <Popup>Location</Popup>
            </Marker>
        </MapContainer>
    );
}
