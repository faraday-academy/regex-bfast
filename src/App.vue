<template>
  <v-app>
    <TopBar />
    <v-content>
      <transition name="slide" mode="out-in">
        <router-view :key="currentIndex" />
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import TopBar from '@/components/TopBar.vue'

export default {
  name: 'App',
  components: {
    TopBar
  },
  computed: {
    ...mapState(['currentIndex'])
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Baloo+Thambi+2:400,700|Monoton|Nanum+Pen+Script&display=swap');
// font-family: 'Baloo Thambi 2', sans-serif;
// font-family: 'Nanum Pen Script', cursive;
// font-family: 'Monoton', cursive;

.slide-enter-active {
  transition: all .5s ease;
}
.slide-leave-active {
  transition: all .3s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
