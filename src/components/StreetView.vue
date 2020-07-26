<template>
    <div id="pano" />
</template>

<script>
/* eslint-disable no-unused-vars */
    import gmapsInit from "../utils/gmaps";

    export default {
        name: "StreetView",
        data() {
            return {
                strPos: {lat: 0.0, lng: 0.0},
            }
        },
        async mounted() {
            try {
                const google = await gmapsInit()

                const warsaw = {lat: 52.229122, lng: 21.007973}
                const panorama = new google.maps.StreetViewPanorama(
                    document.getElementById('pano'), {
                        position: warsaw,
                        pov: {
                            heading: 34,
                            pitch: 10
                        },
                        disableDefaultUI: true
                });

                google.maps.event.addListener(panorama, 'position_changed', () => {
                    let newPosition = panorama.getPosition();
                    this.strPos = {'lat': newPosition.lat(), 'lng': newPosition.lng()};
                });
            } catch (error) {
                console.error(error);
            }
        },
    }
</script>

<style scoped>
    html,
    body {
        margin: 0;
        padding: 0;
    }

    #pano {
        width: 100%;
        height: 100%;
    }
</style>
