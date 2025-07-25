import {MapContainer,TileLayer,Marker,Popup,Polygon, useMapEvents} from 'react-leaflet'
import L from 'leaflet'
import { Link } from 'react-router';

import { boundaryStyle,campusBoundary } from "./boundary";

function Map() {
 
  const position = [29.865, 77.896];

  return (
<div className='bg-slate-950'>
  <Link to="/home" className='inline-block bg-blue-500 text-white px-3 py-2'>Go Back </Link>
    <div  className='h-screen w-screen '>
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
</div>
  )
}

export default Map
