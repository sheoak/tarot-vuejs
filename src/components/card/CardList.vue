<template lang="pug">
  .content(v-if="cards.length")
    .columns
      a.column(
        v-for="card in cards"
        @click="selectCard(card)")
          CardItem(
            :card="card"
          )
    // todo: CardDetail
</template>

<script>
import CardItem from "@/components/card/CardItem"
export default {
  name: 'CardList',
  components: {
    CardItem
  },
  props: {
    cards: Array
  },
  methods: {
    selectCard(card) {
      this.$emit('select', card)
    }
  }
}
</script>
