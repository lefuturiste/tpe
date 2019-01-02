<template>
  <v-stepper-content step="2">
	<v-container class="schemaC">
		<v-layout>
			<v-flex xs9 class='circuitC'>
					<span style="font-weight:1000; font-size: 1.5em">Intensité: {{ intensity }}A</span>
				<div class="circuit"></div>
				<div class="circuitContent">
					<div class='cable'>
						<div class="electronC">
							<template v-for="i in 5" :key="i">
								<v-tooltip top>
									<div class="electron" slot="activator">
										<div class="moin">
										</div>
									</div>
									<span>electron (charge négative)</span>
								</v-tooltip>
							</template>
						</div>
					</div>
				</div>
				<div class="circuit"></div>
			</v-flex>
			<v-flex xs3 class='sideMenu'>
				<div>
					<span style="font-size: 1.2em; color: white">Intensité:</span>
					<v-tooltip top>
						<v-icon slot="activator" color="primary" dark>info</v-icon>
						<span>L'intensité du courant électrique peut être assimilée au débit d'eau dans un tuyau. Elle rend compte
							du nombre de charges qui passent à chaque seconde dans un point du circuit; elle est souvent notée « I », et
							mesurée
							en ampères (A)</span>
					</v-tooltip>
					<v-slider v-model="intensity" step="1" thumb-label ticks max="10" min="1"></v-slider>
					</v-slider>
				</div>
			</v-flex>
		</v-layout>
	</v-container>
	</v-stepper-content>
</template>

<script>
	export default {
		name: 'electicity',
		data: () => ({
			intensity: 2
		}),
		methods: {
			changeI() {
				var s = document.getElementsByClassName("electron")
				for (let i = 0; i < s.length; i++) {
					const el = s[i]
					el.style.animationDuration = (1 / this.intensity) + "s"
				}
			}
		},
		watch:{
			intensity: "changeI"		
		}
	}
</script>

<style>
	.moin {
		width: 50%;
		margin: auto;
		background-color: #181818;
		height: 10%;
		transform: translateY(15px)
	}

	.circuitC {
		width: 100%;
		height: 60vh;
		display: flex;
		background-color: #e2e2e2;
		border-radius: 30px 0px 0px 30px;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		overflow: hidden;
		border-color: #4d4d4d;
		border-style: solid;
		border-width: 1em;
	}

	.electronC {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
	}

	.electron {
		border-radius: 50%;
		background-color: #0183fc;
		width: 35px;
		height: 35px;
		position: relative;
		animation: elecMove 1s infinite linear;
		margin-right: 165px;
	}

	.cable {
		background-color: #dfa40070;
		height: 70px;
		display: flex;
		margin-left: -50px;
		flex-direction: column;
		justify-content: center;
	}

	.circuit {
		width: 100%;
		height: 20px;
		background-color: #181818;
	}

	.circuitContent {
		width: 100%;
		height: 100px;
		background-color: #333333;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.sideMenu {
		width: 100%;
		height: 60vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
		background-color: #4d4d4d;
		border-radius: 0px 30px 30px 0px;
		z-index: 2;
	}

	.schemaC {
		width: 700em;
		height: 400em;
	}

	@keyframes elecMove {
		from {
			left: 0px;
		}

		to {
			left: 200px;
		}
	}
</style>