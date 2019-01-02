<template>
	<v-container>
	</v-container>
</template>

<script>
	export default {
		mounted () {
			this.$store.state.parts.partie1.subParts[1] = "SubPart2"
		}
	}
</script>