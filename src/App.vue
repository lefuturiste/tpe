<template>
  <v-app id="app">
    <v-fade-transition mode="out-in">
      <component v-bind:is="$route.meta.layout">
        <router-view/>
      </component>
    </v-fade-transition>
  </v-app>
</template>b

<script>
import ScaleTransition from "vue2-transitions/src/Scale/ScaleTransition"
import CenterLayout from "./layouts/CenterLayout"

export default {
  components: {
    CenterLayout,
    ScaleTransition
  }
}
</script>
