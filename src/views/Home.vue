<template>
  <div class="home">
    <Quizz :data="data"/>
  </div>
</template>

<script>

import Quizz from "../components/Quizz.vue"
export default {
  name: 'home',
  components: {
    Quizz
  },
  data: () => ({
    data: [
      {
        question: "qestion1",
        answers: [
          "answer1",
          "answer2",
          "answer3"
        ],
        
      }
    ]
  })
}
</script>
