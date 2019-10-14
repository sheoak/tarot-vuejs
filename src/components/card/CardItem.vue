<template lang="pug">
  // attention, si l'image n'existe pas vue va planter
  // on utilise des `` et non des '' autour de la chaine de caractère
  // pour interpoler la variable
  img(
    :class="{ rotate: !card.up }"
    :src="require(`@/assets/images/deck/cards/${card.name_short}.jpg`)"
    :alt="card.name")
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    card: Object
  }
}
</script>

<style scoped>
.rotate {
  transform: rotate(180deg);
}
</style>
