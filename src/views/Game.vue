<template>
    <div class="wrapper">
        <div class="maps">
            <div class="pano">
                <StreetView ref="pano" />
            </div>
            <div class="map">
                <GoogleMap ref="map" />
            </div>
        </div>
        <div class="footer">
            <button v-on:click="calculateDistance">Oblicz</button>
            <p id="results"></p>
        </div>
    </div>
</template>

<script>
    import GoogleMap from '../components/GoogleMap'
    import StreetView from "../components/StreetView";

    export default {
        name: "Game",
        components: {
            GoogleMap,
            StreetView,
        },
        data() {
            return {
                capitals: null,
            }
        },
        methods: {
            calculateDistance() {
                const mapPos = this.$refs.map.mapPos
                const strPos = this.$refs.pano.strPos
                document.getElementById('results').innerHTML =
                    (Math.floor(this.getDistance(strPos, mapPos)/1000)).toString() + "km "
                    + (this.getDistance(strPos, mapPos)%1000).toString() + "m";
            },
            rad(x) {
                return x * Math.PI / 180;
            },
            getDistance(p1, p2) {
                const R = 6378137; // Earth’s mean radius in meter
                const dLat = this.rad(p2['lat'] - p1['lat']);
                const dLong = this.rad(p2['lng'] - p1['lng']);
                const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(this.rad(p1['lat'])) * Math.cos(this.rad(p2['lat'])) *
                    Math.sin(dLong / 2) * Math.sin(dLong / 2);
                const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                const d = R * c;
                return Math.round(d); // returns the distance in meter
            },
            readData() {
                const fs = require('fs')
                require('jquery-csv')
                const sample = '../assets/country-capitals.csv'
                fs.readFile(sample, 'UTF-8', (err, csv) => {
                    if (err) { console.log(err) }
                    csv.toArrays(csv, {}, function (err, data) {
                        if (err) { console.log(err) }
                        for (var i = 0, len = data.length; i < len; i++)
                            console.log(data[i])
                        this.capitals = data
                    });
                });
            }
        }
    }
</script>

<style scoped>
    .wrapper {
    }
    .maps {
        width: 100vw;
        height: 90vh;
    }
    .pano {
        width: 100%;
        height: 100%;
    }
    .map {
        position: absolute;
        width: 30vh;
        height: 30vh;
        z-index: 3;
        bottom: 10vh;
        right: 0;
    }
    .map:hover {
        width: 60vh;
        height: 60vh;
    }
    .footer {
        height: 10vh;
        bottom: 0;
        background-color: rgb(0,0,0);
        color: rgb(255,255,255);
        text-align: center;
    }
</style>
