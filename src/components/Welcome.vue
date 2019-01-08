<template>
	<v-img :gradient="gradient" height="100vh" src="https://i.imgur.com/19ctUK5.jpg">
		<v-container fill-height>
			<v-layout align-space-beetween column>
				<v-layout align-center fill-height class="mb-2">
					<v-flex text-xs-center class="home">
						<v-fade-transition mode="out-in">
							<div class='white--text'>
								<div class="display-3 mb-4">Transition énergétique</div>
								<div class="headline mb-4">Vers un mix énergétique 100% renouvelable ?</div>
							</div>
						</v-fade-transition>
					</v-flex>
				</v-layout>
				<v-card>
					<!-- <v-card-title>
						Créé par:
					</v-card-title> -->
					<v-card-text>
						<v-layout justify-center row wrap>
					<v-flex xs12 md4 v-for="(person, index) in persons" :key="index">
						<v-layout justify-center align-center>
							<v-avatar class="">
								<img :src="person.img" />
							</v-avatar>
							<div class="ml-4">
								{{ person.name }}
							</div>
						</v-layout>
					</v-flex>
				</v-layout>
					</v-card-text>
				</v-card>
				
			</v-layout>
		</v-container>
	</v-img>
</template>

<script>
	export default {
		data: () => ({
			gradient: "to right, #009688, #00968763",
			persons: [
				{ name: "Kylian Buhot", img: "https://randomuser.me/api/portraits/men/85.jpg" },
				{ name: "Matthieu Bessat", img: "https://static.werobot.fr/profiles/matthieu.jpg" },
				{ name: "Mohamed-El-Hassan Krifa", img: "https://static.werobot.fr/profiles/mohamed.jpg" },
			]
		}),
		mounted () {

			let counter = this.persons.length;
			while (counter > 0) {
				let index = Math.floor(Math.random() * counter);
				counter--;
				let temp = this.persons[counter];
				this.persons[counter] = this.persons[index];
				this.persons[index] = temp;
			}
		}
	}
</script>
