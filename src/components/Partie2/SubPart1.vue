<template>
	<v-container>
	</v-container>
</template>

<script>
	export default {
		mounted () {
			this.$store.state.parts.partie2.subParts[0] = "SubPart1"
		}
	}
</script>