"use client";

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet-routing-machine";

// Fix default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const allMarkers = [
  { name: "Eco Park", lat: 28.6129, lng: 77.2295, type: "all" },
  { name: "Plastic Recycle Bin", lat: 28.6152, lng: 77.224, type: "recycle" },
  { name: "Green NGO Delhi", lat: 28.61, lng: 77.23, type: "ngo" },
  { name: "Nature NGO Noida", lat: 28.567, lng: 77.32, type: "ngo" },
  { name: "Eco-Green Gurugram", lat: 28.4595, lng: 77.0266, type: "all" },
  { name: "Clean Rewari", lat: 28.197, lng: 76.617, type: "recycle" },
  { name: "NGO Faridabad", lat: 28.4089, lng: 77.3178, type: "ngo" },
];

export default function MapComponent({ filter }) {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markerGroup = useRef(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    // Initialize map
    mapInstance.current = L.map(mapRef.current).setView([28.6129, 77.2090], 12);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(mapInstance.current);

    markerGroup.current = L.layerGroup().addTo(mapInstance.current);

    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      setUserLocation([latitude, longitude]);

      const userMarker = L.marker([latitude, longitude], {
        icon: L.icon({
          iconUrl: "https://cdn-icons-png.flaticon.com/512/64/64113.png",
          iconSize: [32, 32],
        }),
      }).bindTooltip("📍 You are here", { permanent: false, direction: "right" });

      userMarker.addTo(mapInstance.current);

      updateMarkers(filter, [latitude, longitude]);
    });

  }, []);

  useEffect(() => {
    if (mapInstance.current && userLocation) {
      updateMarkers(filter, userLocation);
    }
  }, [filter, userLocation]);

  const updateMarkers = (filterType, userLoc) => {
    markerGroup.current.clearLayers();

    const bounds = L.latLngBounds([]);

    allMarkers
      .filter((marker) => filterType === "all" || marker.type === filterType)
      .forEach((marker) => {
        const markerObj = L.marker([marker.lat, marker.lng]);

        const tooltipText = `
          <div>
            <strong>${marker.name}</strong><br/>
            Distance: ${calculateDistance(userLoc, [marker.lat, marker.lng])} km
          </div>
        `;

        markerObj.bindTooltip(tooltipText, {
          direction: "top",
          sticky: true,
          opacity: 0.9
        });

        markerGroup.current.addLayer(markerObj);
        bounds.extend([marker.lat, marker.lng]);
      });

    bounds.extend(userLoc); // Include user location
    mapInstance.current.fitBounds(bounds, { padding: [50, 50] });
  };

  // Haversine formula to calculate distance in km
  const calculateDistance = (from, to) => {
    if (!from || !to) return 0;
    const R = 6371; // km
    const dLat = ((to[0] - from[0]) * Math.PI) / 180;
    const dLon = ((to[1] - from[1]) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((from[0] * Math.PI) / 180) *
        Math.cos((to[0] * Math.PI) / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return (R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))).toFixed(2);
  };

  return <div ref={mapRef} style={{ height: "500px", width: "100%" }} />;
}
