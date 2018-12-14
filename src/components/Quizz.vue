<template>
    <div class="quizzC">
        <p class="question">{{data[0].question}}</p>
        <div class="answ">
            <button
                class="button answBtn"
                v-for='(answer, index) in data[0].answers'
                :key="index">
              {{ answer }}
            </button>
        </div>
        <button class="button">Valider
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
