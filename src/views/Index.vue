<template>
	<v-container fluid color="primary" pa-0>
		<v-layout>
			<v-flex xs1 id="sideBtnC">
				<v-item-group v-model="window" class="shrink mr-4 item" mandatory tag="v-flex">
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
					</v-window-item>
					<v-window-item key="3">
					</v-window-item>
					<v-window-item key="4">
					</v-window-item>
					<v-window-item key="5">
					</v-window-item>
				</v-window>
			</v-flex>
		</v-layout>
	</v-container>

</template>

<script>
	import Welcome from '../components/Welcome.vue'
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
		components: {
			Welcome
		},
		watch: {
			window: (val, oldVal) => {
				switch (val) {
					case 0:
						document.getElementById("sideBtnC").style.backgroundColor = '#009688'
						break;
					case 1:
						document.getElementById("sideBtnC").style.backgroundColor = 'purple'
						break;
				}
			}
		}
	}
</script>

<style>
	#sideBtnC {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #009688;
		height: 100vh;
		transition: 1s;
	}

	.icn {
		width: 20px;
		height: 20px;
		background-color: white;
		border-radius: 50%;
	}
</style>