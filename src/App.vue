<template>
  <div id="app">
    <div>
      <!--
      <router-link to="/">Login</router-link>
      <router-link to="/table/">Table</router-link>
      <router-link to="/edit/">Edit</router-link>
      -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: `This is Ali's profile`
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
input {
  margin-bottom: 1em;
}
</style>
