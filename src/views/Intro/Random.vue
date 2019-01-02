<template>
  <v-stepper-content step="2" style="height: 100vh; width: 100%">
    <Electricity/>
  </v-stepper-content>
</template>

<script>
  import Electricity from "../../components/Electricity";
  export default {
    name: 'random',
    components: {
      Electricity
    }
  }
</script>
