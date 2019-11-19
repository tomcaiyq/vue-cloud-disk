<template>
  <div id="app">
    <TopBar />
    <router-view/>
  </div>
</template>

<script>
import TopBar from "./components/TopBar";

export default {
  name: "App",
  components: {
    TopBar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
}
</style>
