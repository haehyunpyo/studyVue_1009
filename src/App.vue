<template>
  <menuPage></menuPage>
  <router-view></router-view>
</template>

<script>
import menuPage from "./components/MenuPage.vue";

export default {
  name: "App",
  components: {
    menuPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
