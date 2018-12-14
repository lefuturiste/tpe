<template>
  <v-content>
    <v-container fluid fill-height px-0 py-0 primary>
      <v-layout fill-height column>
        <v-layout align-center justify-center>
          <v-fade-transition mode="out-in">
            <div>
              <v-fade-transition mode="out-in">
                <slot></slot>
              </v-fade-transition>
            </div>
          </v-fade-transition>
        </v-layout>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: 'CenterLayout'
  }
</script>
