<template>
  <v-container fluid fill-height ma-0 pa-0>
    <v-layout>
      <v-flex xs12 height="100%">
      <v-stepper v-model="e1" class="v-stepper">
        <v-stepper-header class="v-stepper-header">
          <template v-for="step in steps">
            <v-divider :key="step.name + '_divider'"></v-divider>
            <v-stepper-step 
                :key="step.name"
                :step="step.step"
                color="accent"
                editable>
                {{ step.name }}
            </v-stepper-step>
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
export default {
    data: {}
}
</script>
