<template>
  <v-content>
    <v-toolbar color="primary" flat dark>
    <v-toolbar-side-icon @click.stop="drawer = true"></v-toolbar-side-icon>
      <v-toolbar-title>TPE 1S1</v-toolbar-title>
    </v-toolbar>
    <slot/>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      pa-2
    >
      <v-list>
        <v-list-tile avatar v-for="person in persons">
          <v-list-tile-avatar>
            <img :src="person.avatar">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ person.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
        <v-list>
        
          <template v-for="part in bigParts">
          <v-list-group prepend-icon="account_circle">
            <v-list-tile slot="activator">
              <v-list-tile-title>{{part.title}}</v-list-tile-title>
            </v-list-tile>
        
              <v-list-tile no-action v-for="subPart in part.subParts" :to="subPart.location">
                <v-list-tile-title>{{subPart.title}}</v-list-tile-title>
              </v-list-tile>
          </v-list-group>
          <v-divider></v-divider>
          </template>


        </v-list>

    </v-navigation-drawer>
  </v-content>
</template>

<script>
  export default {
    name: 'NormalLayout',
    data: () => ({
      drawer: false,
      bigParts: [],
      persons:[
        {name: "Kylian", avatar: "https://randomuser.me/api/portraits/men/85.jpg"},
        {name: "Matthieu", avatar: "https://randomuser.me/api/portraits/men/85.jpg"},
        {name: "Mohamed-El-Hassan", avatar: "https://randomuser.me/api/portraits/men/85.jpg"}
      ],
    }),
    mounted () {
      this.bigParts = this.$store.state.bigParts
    }
  }
</script>


<style>
</style>