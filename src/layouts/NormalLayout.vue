<template>
  <v-content>
    <v-toolbar>
      <!--<v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>-->
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-container>
      <slot />
    </v-container>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      dark
      temporary
    >
      <v-list class="pt-0" dense>
        <v-divider light></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click=""
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-content>
</template>

<script>
  export default {
    name: 'NormalLayout',
    data: () => ({
      drawer: null,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ]
    })
  }
</script>


<style>
</style>
