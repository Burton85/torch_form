<template>
  <div>
    <h2 class="question__title">{{questions[0].question[0]}}</h2>
    <ul class="question__answers">
      <li class="question__button">{{questions[0].answers[0]}}</li>
      <li class="question__button">{{questions[0].answers[1]}}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Q1',
  props:['questions'],
  computed:{
    ...mapGetters(['answersGetter'])
  }
}
</script>
