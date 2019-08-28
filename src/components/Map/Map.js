import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl'

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

    render() {
        return <div style={{width: '100%', height: '800px'}} ref={this.mapContainer}/>;
    }
}

export default Map;
