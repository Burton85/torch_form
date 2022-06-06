<template>
  <div class="home">
    <div class="home__container">
        <canvas id="canvas">
          TORCH
        </canvas>
        <router-link class="home__title" to='/question'>開始測驗</router-link>
    </div>
  </div>
</template>

<script>
import textAnimate from '@/helper/textAnimate'
export default {
  name:'Home',
  mounted(){
    textAnimate(()=>{console.log('ok')})
  }
}
</script>
