<template>
  <div>
    <div class="display-3 mb-4">Transition énergétique</div>
    <div class="headline mb-4">Vers un mix énergétique 100% renouvelable ?</div>
    <v-btn outline dark large ripple class="mt-4" @click="$router.push('/history')">Démarrer l'expérience</v-btn>
  </div>
</template>

<script>

import CenterLayout from "../layouts/CenterLayout"
export default {
  name: 'home',
  components: {CenterLayout}
}
</script>
