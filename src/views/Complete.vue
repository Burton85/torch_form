<template>
  <div class="complete">
    <div class="complete__container">
      <h2 class="complete__title">{{ congra.substring(0, textleng) }}</h2>
      <img :class="textleng >= leng ? ' show' : ''" :src="require('@/assets/pics/' + scrResult + '.jpg')" alt="" />
      <router-link :class="textleng >= leng ? ' show' : ''" class="complete__start" to="/">RESTART</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Complete',
  data() {
    return {
      textleng: 0,
      leng: 0,
      congra: 'CONGRATULATIONS! This gift is for you',
      scrResult: '1'
    }
  },
  mounted() {
    this.leng = this.congra.length
    for (let i = 0; i < this.leng; i++) {
      setTimeout(() => {
        this.textleng++
      }, i * 200)
    }
    let result = this.answersGetter.join('')
    switch (result) {
      case '000':
        this.scrResult = 1
        break
      case '001':
        this.scrResult = 2
        break
      case '010':
        this.scrResult = 3
        break
      case '011':
        this.scrResult = 4
        break
      case '100':
        this.scrResult = 5
        break
      case '101':
        this.scrResult = 6
        break
      case '110':
        this.scrResult = 7
        break
      case '111':
        this.scrResult = 8
        break
      default:
        this.scrResult = 1
        break
    }
  },
  computed: {
    ...mapGetters(['answersGetter'])
  },
  methods: {}
}
</script>
