<template>
  <v-app>
    <TopBar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import TopBar from '@/components/TopBar.vue'

export default {
  name: 'App',
  components: {
    TopBar
  }
}
</script>
