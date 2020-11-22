<template>
  <component v-bind:is="currentTabComponent"></component>
</template>

<script>
import Anon from '~/components/Anon'
import Wallet from '~/components/Wallet'
export default {
  name: 'HomePage',
  computed: {
    currentTabComponent () {
      if (this.$store.getters.user.auth)
        return Wallet
      return Anon
    }
  },
  data: () => ({
  }),
  methods: {
  },
}
</script>

<style lang="stylus">
</style>
