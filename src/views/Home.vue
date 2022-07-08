<template>
  <div class="home">
    <div class="home__container">
      <canvas id="canvas">TORCH</canvas>
      <a @click="goQuestion()" class="home__start">START</a>
    </div>
  </div>
</template>

<script>
import textAnimate from '@/helper/textAnimate'
export default {
  name: 'Home',
  mounted() {
    textAnimate(() => {
      console.log('ok')
    })
  },
  methods: {
    goQuestion() {
      window.location.assign(window.location.href.split('#')[0] + '#/question')
      window.location.reload()
    }
  }
}
</script>
