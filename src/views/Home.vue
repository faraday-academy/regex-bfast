<template>
  <div>
    <TopBar />
    <v-container>
      <Body />
    </v-container>
  </div>
</template>

<script>
import Body from '@/components/Body.vue'
import TopBar from '@/components/TopBar.vue'

export default {
  components: {
    Body,
    TopBar
  }
}
</script>
