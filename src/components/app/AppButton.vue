<template lang="pug">
  button.button.is-large.is-fullwidth.is-primary(
    @click="$emit('buttonAction')"
  )
    slot
</template>

<script>
export default {
  name: 'AppButton'
}
</script>

<style scoped>
</style>
