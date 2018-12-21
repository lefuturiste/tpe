<template>
    <v-layout align-center>
        <v-card color="indigo" dark width="100%" class="mb-2" v-if="questions.length !== 0">
            <v-card-title>
                <v-layout justify-space-between class="headline">
                    <div>{{ questions[current].text }}</div>
                    <div>{{ current + 1 }}/{{ questions.length }}</div>
                </v-layout>
            </v-card-title>
            <v-card-text class="py-0">
                <v-list class="questions-list">
                    <v-list-tile v-for="(answer, index) in questions[current].answers" :key="index">
                        <v-list-tile-action>
                            <v-checkbox color="white" v-model="answers" />
                        </v-list-tile-action>
                        <v-list-tile-content @click="toggle(index)" ripple>
                            <v-list-tile-title>
                                {{ answer.text }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-card-text>
            <v-card-actions>
                <v-spacer />
                <v-btn outline color="white" @click="validate"><v-icon left>check_circle</v-icon>Valider</v-btn>
            </v-card-actions>
        </v-card>
    </v-layout>
</template>

<script>
export default {
    name: "Quizz",
    data: () => ({
        questions: [],
        score: 0,
        scoreByQuestion: 0,
        current: 0,
        answers: []
    }),
    mounted () {
        let config = require('../assets/quizzs/' + this.src + '.json')
        this.questions = config.questions        
        this.scoreByQuestion = 20 / this.questions.length
        this.refresh()
    },
    props: {
        src: {
            type: String,
            default: ""
        }
    },
    methods: {
        toggle: function (index) {
            console.log( this.answers[index])
            this.answers[index] = !this.answers[index]
        },
        refresh: function () {
            this.answers = this.questions[this.current].answers.map(answer => {
                return false
            })
        },
        validate: function () {
            let maxValid = 0
            let correctAnswer = 0
            this.questions[this.current].answers.forEach((answer, index) => {
                if (answer.isValid) {
                    maxValid++
                }
                if (this.answers[index]) {
                    correctAnswer++
                }
            });

            if (correctAnswer === maxValid) {
                this.score += this.scoreByQuestion
            }
            this.refresh()
            this.current++
        }
    }
}
</script>

<style>
.questions-list {
    background-color: transparent !important;
}
</style>