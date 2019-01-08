<template>
	<v-container fluid>
		<v-layout justify-space-between align-content-space-between>
			<v-flex xs6 v-for="item in items" :key="item.name">
			<v-card light class="pa-3">
					<v-img :src="item.icon" contain width="150px" style="margin: auto"></v-img>
				<v-layout align-center justify-center > 
					<v-card-title>{{ item.name }}</v-card-title>
				</v-layout>
			</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
/* fossile nucléaire renouvelable */
	export default {
		mounted () {
			this.$store.state.parts.partie1.subParts[0] = "Les moyens de production actuels"
		},
		data: () => ({
			items: [{name: "Nucléaire", icon:"/icons/nuclear.png"},
					{name: "Fossile", icon:"/icons/no-refresh.png"},
					{name: "Renouvelable", icon:"/icons/refresh.png"}
			]
		})
	}
</script>
