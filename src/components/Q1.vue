<template>
  <div>
    <h2 class="question__title">{{ questions[0].question[0].substring(0, textleng) }}</h2>
    <ul class="question__answers">
      <li @click="answerSubmit(0)" class="question__button" :class="textleng >= leng ? ' show' : ''">
        {{ questions[0].answers[0] }}
      </li>
      <li @click="answerSubmit(1)" class="question__button" :class="textleng >= leng ? ' show' : ''">
        {{ questions[0].answers[1] }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Q1',
  props: ['questions'],
  data() {
    return {
      textleng: 0,
      leng: 0
    }
  },
  mounted() {
    this.leng = this.questions[0].question[0].length
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
      this.setAnswers([0, ans])
      this.$router.push('/question/Q2')
    }
  }
}
</script>
