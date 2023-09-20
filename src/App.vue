<template>
  <nav></nav>
  <router-view/>
</template>
<script>

</script>
<style>
#app {
  font-family: Iosevka, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #19eb81;
  background-color: #232323;
}

nav {
  padding: 20px;
}

nav a {
  font-weight: bold;
  color: #f72f35;
}

nav a.router-link-exact-active {
  color: #19eb81;
}
</style>
