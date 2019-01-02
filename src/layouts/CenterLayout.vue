<template>
    <v-fade-transition mode="out-in">
      <slot></slot>
    </v-fade-transition>
</template>

<script>
  export default {
    name: 'CenterLayout'
  }
</script>