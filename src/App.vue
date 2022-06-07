<template>
  <div class="wrapper" id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <div class="footer">Powered by Art & Media Department</div>
  </div>
</template>

<script>
export default {
  name: 'App'
  // mounted() {
  //   window.addEventListener('resize', () => {
  //     this.$router.go({ path: this.$route.path, query: this.$route.query })
  //   })
  // },
  // beforeDestroy() {
  //   window.removeEventListener('resize', () => {
  //     this.$router.go({ path: this.$route.path, query: this.$route.query })
  //   })
  // }
}
</script>

<style lang="scss">
@import './style/main.scss';
</style>
