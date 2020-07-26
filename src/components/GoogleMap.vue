<template>
    <div id="map"/>
</template>

<script>
    import gmapsInit from '../utils/gmaps';

    export default {
        name: 'GoogleMap',
        data() {
            return {
                mapPos: {lat: 0.0, lng: 0.0},
            }
        },
        async mounted() {
            try {
                const google = await gmapsInit()

                const map = new google.maps.Map(document.getElementById('map'), {
                    center: {lat: 0.0, lng: 0.0},
                    zoom: 10
                });

                const marker = new google.maps.Marker({
                    map: map,
                });
                map.addListener('click', (mapsMouseEvent) => {
                    marker.setPosition(mapsMouseEvent.latLng);
                    this.mapPos = {'lat': mapsMouseEvent.latLng.lat(), 'lng': mapsMouseEvent.latLng.lng()};
                });
            } catch (error) {
                console.error(error);
            }
        },
    };
</script>

<style>
    html,
    body {
        margin: 0;
        padding: 0;
    }

    #map {
        width: 100%;
        height: 100%;
    }
</style>
