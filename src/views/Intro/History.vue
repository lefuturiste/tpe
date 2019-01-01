<template>
  <v-stepper-content step="1">
    <v-container>
      <v-layout>
      <Timeline/>
      </v-layout>
    </v-container>
  </v-stepper-content>
</template>
<script>
 import Timeline from "../../components/timeline/Timeline"
  export default {
    name: 'History',
    components: {
      Timeline
    }
  }
</script>

<style>
</style>
