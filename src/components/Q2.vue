<template>
  <div>
    <h2 class="question__title">{{ questions[1].question[answersGetter[0]].substring(0, textleng) }}</h2>
    <ul class="question__answers">
      <li @click="answerSubmit(0)" class="question__button" :class="textleng >= leng ? ' show' : ''">
        {{ questions[1].answers[answersGetter[0]][0] }}
      </li>
      <li @click="answerSubmit(1)" class="question__button" :class="textleng >= leng ? ' show' : ''">
        {{ questions[1].answers[answersGetter[0]][1] }}
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
    this.leng = this.questions[1].question[this.answersGetter[0]].length
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
      this.setAnswers([1, ans])
      this.$router.push('/question/Q3')
    }
  }
}
</script>
