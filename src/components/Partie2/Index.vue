<template>
	<v-card flat dark class="transparent main">
		<div>
		<v-card-text class='display-3 ma-0 pt-4 pa-0'>Partie2</v-card-text>
		<v-card-text class='headline ml-4 pa-0 ma-0'>{{ subParts[part]}}</v-card-text>
		</div>
		<v-window v-model="part" flat>
			<v-window-item key='1'>
			<SubPart1/>
			</v-window-item>
			<v-window-item key='2'>
			<SubPart2/>
			</v-window-item>
			<v-window-item key='3'>
			<SubPart3/>
			</v-window-item>
		</v-window>
		<v-card-actions class="justify-center pb-5 botBtn" flat>
			<v-item-group v-model="part" class="text-xs-center" mandatory>
				<v-item v-for="p in subParts" :key="p">
					<v-btn slot-scope="{ active, toggle }" :input-value="active" @click="toggle" icon>
								<div class="icn"></div>
					</v-btn>
				</v-item>
			</v-item-group>
		</v-card-actions>
	</v-card>
</template>

<script>
	import SubPart1 from './SubPart1.vue'
	import SubPart2 from './SubPart2.vue'
	import SubPart3 from './SubPart3.vue'
	export default {
		data: () => ({
			part: 0,
			subParts: []
		}),
		mounted () {
			this.subParts = this.$store.state.parts.partie1.subParts
		},
		components: {
			SubPart1,
			SubPart2,
			SubPart3,
		}
	}
</script>

<style>
.main {
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow: hidden;
}
.botBtn {
	position: absolute;
	bottom: 0px;
	right: 50%;
}
</style>