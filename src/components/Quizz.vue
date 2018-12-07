<template>
    <div class="quizzC">
        {{ data[0].question }}
    </div>
</template>

<script>
export default {
    name: "Quizz",
    data: () => ({
        key: 'valeur'
    }),
    props: {
        data: {
            type: Array,
            default: []
        }
    }
}
</script>

<style scoped>
.QuizzC {
    width: 100%;
    display: flex;
    background-color: #95a5a6;
    min-height: 10em;
}

</style>
