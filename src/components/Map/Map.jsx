import {MapContainer,TileLayer,Marker,Popup,Polygon, useMapEvents} from 'react-leaflet'
import L from 'leaflet'


import { boundaryStyle,campusBoundary } from "./boundary";

function Map() {
 
  const position = [29.865, 77.896];

  return (
    <div  className='h-screen w-screen'>
                <MapContainer 
                    center={position} 
                    zoom={16} 
                    scrollWheelZoom={true} 
                    className='h-screen w-full'
                >
                    <TileLayer
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        maxNativeZoom={18}
                        maxZoom={20}
                    />

                  <Polygon pathOptions={boundaryStyle} positions={campusBoundary} />

                </MapContainer>
    </div>
  )
}

export default Map
