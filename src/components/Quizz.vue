<template>
    <div class="quizzC">
        <p class="question">{{data[0].question}}</p>
        <div class="answ">
            <button
             v-for='(answer, index) in data[0].answers'
             :key="index"
             class="answBtn">
              {{ answer }}
            </button>
        </div>
        <button class="submitBtn">
        Valider
        </button>
    </div>
</template>

<script>
export default {
    name: "Quizz",
    data: () => ({
    }),
    props: {
        data: {
            type: Array,
            default: []
        }
    }
}
</script>
