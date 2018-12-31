<template>
    <v-stepper v-model="step" class="v-stepper" flat>
        <v-stepper-header class="v-stepper-header">
            <template v-for="(step, index) in steps">
                <v-divider :key="step.id + '_divider'"></v-divider>
                <v-stepper-step
                    :key="step.id"
                    :step="index + 1" 
                    color="accent"
                    editable>
                    {{ step.name }}
                </v-stepper-step>
            </template>
        </v-stepper-header>
        <v-stepper-items>
            <History />
            <Random />
        </v-stepper-items>
    </v-stepper>
</template>

<script>
import History from './History.vue'
import Random from './Random.vue'
export default {
    components: {
        History,
        Random
    },
    data: () => ({
        step: 1,
        steps: [
            {id: 'history', name: 'Histoire'},
            {id: 'random', name: 'Random'}
        ]
    }),
    mounted () {
        this.loadRoute()
    },
    watch: {
        '$route': function () {
            this.loadRoute()
        }
    },
    methods: {
        loadRoute: function () {
            this.step = this.steps.filter(step => step.id === this.$route.params.id)[0].id
        }
    }
}
</script>

<style>
.v-stepper-header {
  background-color: #0091EA;
}
</style>