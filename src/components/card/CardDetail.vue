<template lang="pug">
  .card(v-if="card")
    .card-content.has-margin-top-20
      .media
        .media-content
          p.title.is-4 {{card.name}}
      .content
        h4.title.is-5(:class="{ 'has-text-success': card.up }") À l’endroit :
        p {{card.meaning_up}}
        h4.title.is-5(:class="{ 'has-text-success': !card.up }") À l’envers :
        p {{card.meaning_rev}}
</template>

<script>
export default {
  name: 'CardDetail',
  props: {
    card: Object
  }
}
</script>
