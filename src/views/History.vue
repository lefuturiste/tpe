<template>
  <div>
    <div>
      <Quizz src="quizz-example" />
    </div>
    <v-layout justify-space-between>
      <v-btn color="primary"><v-icon left>keyboard_arrow_left</v-icon> Previous</v-btn>
      <v-btn color="primary"
      >Next <v-icon right>keyboard_arrow_right</v-icon></v-btn>
    </v-layout>
  </div>
</template>
<script>
  import Quizz from "../components/Quizz"
  export default {
    components: {
      Quizz
    }
  }
</script>
