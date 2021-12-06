import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';




function Map({ searchResults }) {

    const [selectedLocation, setSelectedlocation] = useState({});

    //Transform the search results objext into the 
    //{ latitude: 51.503333, longitude: -0.119722 } object


    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat,
    }));


    const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 13,
    });


    return (
        <ReactMapGL
            mapStyle="mapbox://styles/sanktrex99/ckw3m4s1118mf15o4f40auh4i"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >

            {searchResults.map(result => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetTop={-10}
                        offsetLeft={-20}
                    >
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/map-pin.png"
                            className="cursor-pointer h-10 animate-pulse hover:animate-bounce"
                            onClick={() => setSelectedlocation(result)} />
                    </Marker>

                    {/* The Popup that should show if we click on a Marker*/}
                    {selectedLocation.long === result.long ? (
                        <Popup
                            onClose={() => setSelectedlocation({})}
                            closeOnClick={true}
                            latitude={result.lat}
                            longitude={result.long}
                            className="flex-auto bg-transparent text-lg text-red-600 font-medium font-mono"
                        >
                            {result.title}

                        </Popup>
                    ) : (
                        false
                    )}

                </div>
            ))}

        </ReactMapGL>
    )
}

export default Map;
