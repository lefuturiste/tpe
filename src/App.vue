<template>
  <v-app>
    <v-fade-transition mode="out-in">
      <component v-bind:is="$route.meta.layout">
        <router-view/>
      </component>
    </v-fade-transition>
  </v-app>
</template>

<script>
import ScaleTransition from "vue2-transitions/src/Scale/ScaleTransition"
import CenterLayout from "./layouts/CenterLayout"
import HomeLayout from "./layouts/HomeLayout"
import NormalLayout from "./layouts/NormalLayout"

export default {
  components: {
    NormalLayout,
    HomeLayout,
    CenterLayout,
    ScaleTransition
  }
}
</script>
