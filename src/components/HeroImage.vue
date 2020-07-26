<template>
    <div class="heroImage" />
</template>

<script>
    export default {
        name: "HeroImage"
    }
</script>

<style scoped>
    .heroImage {
        content: "";
        display: block;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        z-index: -10;
        background-image: url('../assets/bkg.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 80% 0;
    }

    .heroImage::after {
        content: '';
        background: rgba(0,0,0, .2);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100vh;
    }

    @media only screen and (max-width: 768px) {
        .heroImage {
            background-position: 60% 0;
        }
    }
</style>