<template>
	<v-container>
	</v-container>
</template>

<script>
	export default {
		mounted () {
			this.$store.state.parts.partie3.subParts[2] = "SubPart3"
		}
	}
</script>