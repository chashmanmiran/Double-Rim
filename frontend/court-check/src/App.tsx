import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import courts from './courts.json'
import L from 'leaflet'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

L.Marker.prototype.options.icon = defaultIcon

  const App = () => {
  return (
    <div>Court Check — NYC's courts, mapped honestly

    <MapContainer center={[40.68, -73.95]} zoom={12} scrollWheelZoom={true} style={{ height: '100vh'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
      />
    {courts.map((court) => (
      <Marker key={court.propId} position = {[court.lat, court.lon]}>
        <Popup>
          {court.parkName} | {court.courtCount ?? 'Unknown # of'} Courts | Source - {court.source} 
        </Popup>
        
      </Marker>
      )) }
    </MapContainer></div>

  )

  

}

export default App