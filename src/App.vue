<template lang="pug">
  div.v-cloak
    TheHeader
    router-view
</template>

<script>
// ne pas oublier l'import des composants
import TheHeader from "@/components/layout/TheHeader"

export default {
  name: 'app',
  // ne pas oublier de déclarer les composants
  components: {
    TheHeader
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
