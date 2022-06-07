<template>
  <div class="question">
    <div class="question__container">
      <router-view :questions="questions"></router-view>
    </div>
  </div>
</template>

<script>
import questions from '@/json/questions.json'

export default {
  name:'Question',
  data(){
    return{
      questions: questions.data
    }
  }
}
</script>
