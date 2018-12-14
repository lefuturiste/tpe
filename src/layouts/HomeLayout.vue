<template>
  <v-content>
    <v-container fluid fill-height px-0 py-0>
      <v-jumbotron
        :gradient="gradient"
        height="100vh"
        dark
        src="https://i.imgur.com/19ctUK5.jpg"
      >
        <v-container fill-height>
          <v-layout align-space-beetween column>
            <v-layout align-center>
              <v-flex text-xs-center class="opacity-50">
                Créé par Matthieu Bessat, Krifa Mohamed-El-Hassan, Buhot Kylian
              </v-flex>
            </v-layout>
            <v-layout align-center fill-height>
              <v-flex text-xs-center class="home">
                <v-fade-transition mode="out-in">
                  <slot></slot>
                </v-fade-transition>
              </v-flex>
            </v-layout>
          </v-layout>
        </v-container>
      </v-jumbotron>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: 'HomeLayout',
    data: () => ({
      gradient: "to top right, rgba(22, 160, 133, .7), rgba(26, 188, 156, .7)"
    })
  }
</script>


<style>
</style>
