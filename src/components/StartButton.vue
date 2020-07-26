<template>
  <div class="start">
    <div class="startText">
      <p class="title">EarthQuiz</p>
      <p class="subtitle">Are you lost, babygirl?</p>
    </div>
    <div class="startButton">
      <router-link class="gamelink" to="/game">Start your journey</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    methods: {
      start: function () {
        console.log("start");
      }
    }
  }
</script>

<style scoped>
  .start {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    width: 100vh;
  }

  .startText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title {
    margin: 0;
    padding: 0;
    font-size: 100px;
    color: white;
  }

  .subtitle {
    margin: 0;
    padding: 0;
    font-size: 40px;
    color: white;
  }

  .startButton {
    margin: 0;
    padding: 0;
  }

  .gamelink {
    padding: 15px;
    text-decoration: none;
    color: white;
    font-weight: 600;
    font-size: 30px;
    text-align: center;
    background: rgba(0,0,0, .5);
    border: none;
    border-radius: 25px;
    outline: 0;
    flex-basis: 50%;
  }

  .gamelink:hover {
    background: rgba(50, 50, 50, .4);
  }

  @media only screen and (max-width: 768px) {
    .title {
      font-size: 50px;
    }
    .subtitle {
      font-size: 20px;
    }
    .gamelink {
      font-size: 15px;
    }
  }

</style>
