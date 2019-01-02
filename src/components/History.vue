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
 import Timeline from "./timeline/Timeline.vue"
  export default {
    name: 'History',
    components: {
      Timeline
    }
  }
</script>

<style>
</style>
