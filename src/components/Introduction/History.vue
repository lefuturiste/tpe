<template>
	<v-container>
		<Timeline/>
	</v-container>
</template>

<script>
	import Timeline from "./components/timeline/Timeline.vue";
	export default {
		components: {
			Timeline
		},
		mounted () {
			this.$store.state.parts.introduction.subParts[0] = "Un peu d'histoire"
		}
	}
</script>