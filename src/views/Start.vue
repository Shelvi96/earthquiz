<template>
    <div class="wrapper">
        <HeroImage />
        <StartButton />
    </div>
</template>

<script>
    import HeroImage from '../components/HeroImage.vue';
    import StartButton from '../components/StartButton.vue';

    export default {
        name: "Search",
        components: {
            HeroImage,
            StartButton,
        },
    }
</script>

<style scoped>
    .wrapper {
        position: relative;
        width: 100%;
        height: 100vh;
        margin: 0;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>