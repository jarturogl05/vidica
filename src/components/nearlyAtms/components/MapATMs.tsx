import {GoogleMap, InfoWindow, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useState, useRef } from "react";
import { ATM } from "../../../models/ATM";
import { IoLocationSharp } from "react-icons/io5";
import { classNames } from "../../../uitls/classes";

export interface MapATMsPropsI {
    atms: ATM[];
    totalResults: number;
    currentLocation: {latitude: number, longitude: number};
}

const LATITUDE_CDMX = 19.42830985644588;
const LONGITUDE_CDMX = -99.09717858496306

export enum MAP_COLORS {
    RED,
    ORANGE,
    GREEN,
    GREY
}

const MAPS_COLOR_HEX_COLORS: Record<string, string> = {
    [MAP_COLORS.RED]: '#CA016C',
    [MAP_COLORS.ORANGE]: '#F7931D',
    [MAP_COLORS.GREEN]: '#7FC241',
    [MAP_COLORS.GREY]: '#f4cce24d'
}

type MarketType = {
    id: string;
    location: google.maps.LatLngLiteral;
    atm: ATM;
    color: MAP_COLORS;
}

export const MapATMs  = ({
    atms,
    totalResults,
    currentLocation
}: MapATMsPropsI) => {

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!
    });

    // save map in ref if we want access to map
    //@ts-ignore
    const mapRef = useRef<google.maps.Map<Element> | null>(null);

    //@ts-ignore
    const onLoad = (map: google.maps.Map<Element>): void => {
        mapRef.current = map;
    }

    const onUnMount = (): void => {
        mapRef.current = null;
    }

    const [selectedMarket, setSelectedMarket] = useState<MarketType | null>(null);


    const onSelectMarker = (atm: ATM) => {
        setSelectedMarket({
            id: atm.cr,
            atm: atm,
            color: MAP_COLORS.GREEN,
            location: {lng: Number(atm.longitud), lat: Number(atm.latitud)}
        })
    }

    // @ts-ignore
    return (
        <div className='h-[350px] w-full rounded-b-[30px] map-shadow'>
            {
                isLoaded
                    ? (
                        <GoogleMap mapContainerClassName='h-[350px] w-full rounded-b-[20px] map-shadow'
                                   zoom={15}
                                   center={{lng: currentLocation.longitude, lat: currentLocation.latitude}}
                                   onLoad={onLoad}
                                   onUnmount={onUnMount}
                                   options={Option as google.maps.MapOptions}>
                            <Marker position={{lng: currentLocation.longitude, lat: currentLocation.latitude}}/>
                            {atms.map(t => (<Marker position={{lat: Number(t.latitud), lng: Number(t.longitud)}}
                                                            key={t.cr}
                                                            onClick={() => {
                                                                onSelectMarker(t)
                                                            }}
                                                            icon={{
                                                                // @ts-ignore
                                                                url: IoLocationSharp,
                                                                origin: new window.google.maps.Point(0, 0),
                                                                anchor: new window.google.maps.Point(15, 15),
                                                                scaledSize: new window.google.maps.Size(30, 30),
                                                                fillColor: MAPS_COLOR_HEX_COLORS[MAP_COLORS.GREEN]
                                                            }}/>))}
                            {
                                selectedMarket && (
                                    <InfoWindow position={selectedMarket.location} onCloseClick={() => setSelectedMarket(null)}>
                                        <div>
                                            <h3
                                                className={classNames('text-xl my-1 text-primary')}>{selectedMarket.atm.sitio}</h3>
                                            <p className='text-grey mt-1'><span className='font-semibold'>{selectedMarket.atm.calle} {selectedMarket.atm.num_ext_}, {selectedMarket.atm.cp}</span></p>
                                        </div>
                                    </InfoWindow>
                                )
                            }
                        </GoogleMap>
                    )
                    : (
                        <div>Loading...</div>
                    )
            }
        </div>
    )
}