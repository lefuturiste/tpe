<template>
	<v-container fluid color="primary" pa-0>
		<v-layout>
			<v-flex xs1 class="sideBtnC">
				<v-item-group v-model="window" class="mr-4">
					<v-item v-for='p in parts' :key="p.name">
						<div slot-scope="{ active, toggle }" >
						<v-tooltip right>
							<v-btn :input-value="active" @click="toggle" icon slot="activator">
								<div class="icn"></div>
							</v-btn>
							<span>{{p.name}}</span>
						</v-tooltip>
						</div>
					</v-item>
				</v-item-group>
			</v-flex>
			<v-flex xs11>
				<v-window v-model="window" class="win" vertical>
					<v-window-item key="1">
						<Welcome />
					</v-window-item>
					<v-window-item key="2">
						<Introduction />
					</v-window-item>
					<v-window-item key="3">
						<Partie1 />
					</v-window-item>
					<v-window-item key="4">
						<Partie2 />
					</v-window-item>
					<v-window-item key="5">
						<Partie3 />
					</v-window-item>
				</v-window>
			</v-flex>
		</v-layout>
	</v-container>

</template>

<script>
	import Welcome from '../components/Welcome.vue'
	import Introduction from '../components/Introduction/Index.vue'
	import Partie1 from '../components/Partie1/Index.vue'
	import Partie2 from '../components/Partie2/Index.vue'
	import Partie3 from '../components/Partie3/Index.vue'
	export default {
		data: () => ({
			window: 0,
			parts: [
				{ name: 'Bienvenue' },
				{ name: 'Introduction' },
				{ name: 'Partie 2' },
				{ name: 'Partie 3' },
				{ name: 'Partie 4' },
			]
		}),
		mounted() {
			this.changeCol()
		},
		components: {
			Welcome,
			Introduction,
			Partie1,
			Partie2,
			Partie3,
		},
		watch: {
			window: "changeCol"
		},
		methods: {
			changeCol () {
				switch (this.window) {
					case 0:
						document.getElementById("app").style.backgroundColor = '#009688'
						break;
					case 1:
						document.getElementById("app").style.backgroundColor = '#6d22c9'
						break;
					case 2:
						document.getElementById("app").style.backgroundColor = 'red'
						break;
					case 3:
						document.getElementById("app").style.backgroundColor = 'green'
						break;
					case 4:
						document.getElementById("app").style.backgroundColor = 'orange'
						break;
				}
			}
		}
	}
</script>

<style>
	#app {
		transition: 1s;
		user-select: none;
	}
	.sideBtnC {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #00968700;
		height: 100vh;
	}
	.icn {
		width: 20px;
		height: 20px;
		background-color: white;
		border-radius: 50%;
	}
</style>