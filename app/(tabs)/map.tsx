import React, { useRef, useState, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE, MAP_TYPES, Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

const CAMERA_START = {
    center: {
        latitude: 37.62976867594795,
        longitude: -122.46756161476384,
    },
    heading: 327.3,
    pitch: 0,
    zoom: 18,
}

const CAMERA_ZOOM_RANGE = {
    maxCenterCoordinateDistance: 5,
}


const POINTS_OF_INTEREST = [
    {
        title:'The Skyline College Quad',
        description: 'The central events area of Skyline College. 🥳',
        coordinates: {
            latitude: 37.62976867594795,
            longitude: -122.46756161476384,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }
    },
    {
        title:'Building 6 - "The Fireside Dining Room"',
        description: 'Food Services area for Sky Café, World Cup Coffee & Tea. ☕',
        coordinates: {
            latitude: 37.62996827033055,
            longitude: -122.46771287637672,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }
    },
    {
        title:'The STEM Center (Building 7, Third Floor)',
        description: 'An open tutoring and study area for STEM Classes',
        coordinates: {
            latitude: 37.62980505771402,
            longitude: -122.46830272425905,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }
    }
    
]

export default function Map() {
    const mapRef = useRef<MapView>();

    const [currentMargin, setCurrentMargin] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setCurrentMargin(0);
        }, 1000);
    }, []);

    return (
        <View className='flex-1'>
            <MapView
                style={{ marginBottom: currentMargin, ...StyleSheet.absoluteFillObject }}
                provider={PROVIDER_GOOGLE}
                mapType={MAP_TYPES.HYBRID}
                initialCamera={CAMERA_START}
                cameraZoomRange={CAMERA_ZOOM_RANGE}

                showsIndoors
                showsIndoorLevelPicker
                showsBuildings
                showsUserLocation
                showsMyLocationButton
                followsUserLocation
                showsCompass={false}

                loadingEnabled

                // liteMode
                ref={mapRef}
            >
                {POINTS_OF_INTEREST.map((marker, index) => (
                    <Marker title={marker.title} description={marker.description} key={index} coordinate={marker.coordinates}></Marker>
                ))}
                
            </MapView>
        </View>
    );
}
