<template>
	<v-container class="schemaC">
		<v-card light class="ma-5 pa-5 justify-space-between align-content-space-" v-show="!isVisible">
			<v-card-title class='headline'>Définition</v-card-title>
			<v-card-text class='subheading'>
				L’électricité est l'effet du déplacement de particules chargées, à l’intérieur d'un « conducteur », sous l'effet d'une
				différence de potentiel aux extrémités de ce conducteur. Ce phénomène physique est présent dans de nombreux contextes :
				l'électricité constitue aussi bien l'influx nerveux des êtres vivants que les éclairs d'un orage. Les découvertes des
				lois naturelles d'électricité ont conduit à l'électrotechnique, et les inventions de l'électrotechnique sont largement
				utilisées dans les sociétés développées pour par exemple transporter de grandes quantités d'énergie facilement
				utilisables.
				
				Les propriétés de l'électricité ont été découvertes au cours du XVIIIe siècle. La maîtrise du courant électrique a
				permis l'avènement de la seconde révolution industrielle. Aujourd'hui, l'énergie électrique est omniprésente dans les
				pays industrialisés : à partir de différentes sources d'énergie, principalement hydraulique, thermique et nucléaire,
				l'électricité est un vecteur énergétique employé pour de très nombreux usages domestiques ou industriels.
			</v-card-text>
			<v-card-actions>
				<v-btn large block color="success" @click="isVisible = true">Schéma interactif</v-btn>
			</v-card-actions>
		</v-card>
		<v-layout v-show="isVisible" wrap>
			<v-flex xs12>
				<v-system-bar window class="bar">
					<v-spacer></v-spacer>
					<v-icon>remove</v-icon>
					<v-icon>check_box_outline_blank</v-icon>
					<v-btn icon @click="isVisible = false" class="ma-0 pa-0 pl-2"><v-icon>close</v-icon></v-btn>
				</v-system-bar>
			</v-flex>
			<v-flex xs9 class='circuitC'>
					<span class="black--text title">Intensité: {{ intensity }}A</span>
				<div class="circuit"></div>
				<div class="circuitContent">
					<div class='cable'>
						<div class="electronC">
							<template v-for="i in 5">
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
</template>

<script>
	export default {
		name: 'electicity',
		mounted () {
			this.$store.state.parts.introduction.subParts[1] = "Qu'est ce que l'éléctricité ?"
		},
		data: () => ({
			intensity: 2,
			isVisible: false
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
		border-radius: 0px 0px 0px 10px;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		overflow: hidden;
		border-color: rgb(31, 31, 31);
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
		background-color: rgb(31, 31, 31);
		border-radius: 0px 0px 10px 0px;
		z-index: 2;
	}
	.bar {
		border-radius: 10px 10px 0px 0px;
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