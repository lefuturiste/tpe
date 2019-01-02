<template>
	<v-img :gradient="gradient" height="100vh" src="https://i.imgur.com/19ctUK5.jpg">
		<v-container fill-height>
			<v-layout align-space-beetween column>
				<v-layout align-end justify-end>
					<v-card text-xs-center class="opacity-50">
						<v-card-text>Créé par:</v-card-text>
						<v-list class="pa-0">
							<v-list-tile avatar v-for='p in persons'>
								<v-list-tile-avatar>
									<img :src="p.img">
								</v-list-tile-avatar>
								<v-list-tile-content>
									<v-list-tile-title>{{ p.name }}</v-list-tile-title>
								</v-list-tile-content>
							</v-list-tile>
						</v-list>
					</v-card>
				</v-layout>
				<v-layout align-start fill-height class="pa-5 mt-5">
					<v-flex text-xs-center class="home">
						<v-fade-transition mode="out-in">
							<div class='white--text'>
								<div class="display-3 mb-4">Transition énergétique</div>
								<div class="headline mb-4">Vers un mix énergétique 100% renouvelable ?</div>
							</div>
						</v-fade-transition>
					</v-flex>
				</v-layout>
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
				{ name: "Matthieu Bessat", img: "https://randomuser.me/api/portraits/men/85.jpg" },
				{ name: "Mohamed-El-Hassan Krifa", img: "https://randomuser.me/api/portraits/men/85.jpg" },
			]
		})
	}
</script>
