<template>
  <div>
    <h2 class="question__title">{{ questions[2].question[answersGetter[0]][answersGetter[1]].substring(0, textleng) }}</h2>
    <ul class="question__answers">
      <li @click="answerSubmit(0)" class="question__button" :class="textleng >= leng ? ' show' : ''">
        {{ questions[2].answers[answersGetter[0]][answersGetter[1]][0] }}
      </li>
      <li @click="answerSubmit(1)" class="question__button" :class="textleng >= leng ? ' show' : ''">
        {{ questions[2].answers[answersGetter[0]][answersGetter[1]][1] }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Q2',
  props: ['questions'],
  data() {
    return {
      textleng: 0,
      leng: 0
    }
  },
  mounted() {
    this.leng = this.questions[2].question[this.answersGetter[0]][this.answersGetter[1]].length
    for (let i = 0; i < this.leng; i++) {
      setTimeout(() => {
        this.textleng++
      }, i * 200)
    }
  },
  computed: {
    ...mapGetters(['answersGetter'])
  },
  methods: {
    ...mapActions(['setAnswers']),
    answerSubmit(ans) {
      this.setAnswers([2, ans])
      this.$router.push('/complete')
    }
  }
}
</script>
