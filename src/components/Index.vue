<template>
  <v-container fluid fill-height ma-0 pa-0>
    <v-layout>
      <v-flex xs12 height="100%">
      <v-stepper v-model="e1" class="v-stepper">
        <v-stepper-header class="v-stepper-header">
          <template v-for="step in steps">
          <v-divider></v-divider>
          <v-stepper-step :step="step.step" color="accent" editable>{{ step.name }}</v-stepper-step>
          </template>
        </v-stepper-header>
        <v-stepper-items>
            <Step1/>
            <Step2/>
            <Step3/>
        </v-stepper-items>
      </v-stepper>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Step1 from './steps/Step1.vue'
  import Step2 from './steps/Step2.vue'
  import Step3 from './steps/Step3.vue' 
  export default {
    components: {
      Step1,
      Step2,
      Step3
    },
    data: () => ({
      e1: 1,
      steps: []
    }),
    mounted () {
      this.steps = this.$store.state.steps
    }
  }
</script>

<style>
.v-stepper {
  height: 100%;
}
.v-stepper-header {
  background-color: #0091EA;
}
</style>