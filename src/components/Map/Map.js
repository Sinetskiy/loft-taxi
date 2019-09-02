import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl'
import MapsRoute from "./MapsRoute/MapsRoute";
import {connect} from "react-redux";
import {getCoordinates} from "../../modules/Routes";

class Map extends Component {
    map = null;
    mapContainer = React.createRef();

    componentDidMount() {
        mapboxgl.accessToken = "pk.eyJ1Ijoic2luZXRza2l5IiwiYSI6ImNqenN2ZTA4ODEwMmIzZG40d2l6d2JiZWoifQ.cKx1522qG4GIL5PXrHoDVg";
        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v9",
            center: [30.2656504, 59.8029126],
            zoom: 15
        });
    }

    componentWillUnmount() {
        this.map.remove();
    }

    addRoute = (coordinates) => {

        this.map.addLayer({
            "id": 'route',
            "type": "line",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "LineString",
                        "coordinates": coordinates
                    }
                }
            },
            "layout": {
                "line-join": "round",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#888",
                "line-width": 8
            }
        });

        this.map.setCenter(coordinates[7]);

    };

    removeRoute = () => {
        if (this.map && this.map.getLayer && this.map.getLayer('route')) {
            this.map.removeLayer('route');
            this.map.removeSource('route');
        }
    };

    render() {

        const {coordinates} = this.props;

        if (coordinates)
            this.addRoute(coordinates);

        if (!coordinates)
            this.removeRoute();

        return <div>
            <div style={{width: '100%', height: '800px'}} ref={this.mapContainer}/>
            <MapsRoute/>
        </div>;

    }
}

export default connect(state => ({coordinates: getCoordinates(state)}))(Map);
