<template lang="pug">
  div.v-cloak
    TheHeader
    CardsPage
</template>

<script>
// ne pas oublier l'import des composants
import TheHeader from "@/components/layout/TheHeader"
import CardsPage from "@/pages/CardsPage"

export default {
  name: 'app',
  // ne pas oublier de déclarer les composants
  components: {
    TheHeader,
    CardsPage,
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
