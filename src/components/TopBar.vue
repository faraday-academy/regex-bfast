<template>
  <div>
    <v-app-bar
      dark
    >

      <v-toolbar-title class="logo-text">
        Regex Breakfast
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-card outlined rounded>
        <v-card-text class="white--text pa-2">
          <v-progress-linear
            :value="$store.getters.percentDone"
            height="10"
            striped
            color="#ec1a25"
          ></v-progress-linear>
          Challenge #{{ $store.state.currentIndex + 1 }}
          out of {{ $store.state.challenges.length }}
        </v-card-text>
      </v-card>

      <v-spacer></v-spacer>

      <v-btn outlined tile @click="drawer = true">
        Challenges
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      overlay-opacity="0"
      absolute
      temporary
      right
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
            v-for="(challenge, i) in challenges"
            :key="i"
            @click="navigateToChallenge(i)"
          >
            <v-list-item-title>
              {{ `${i+1} - ${challenge.name}` }}
            </v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data: () => {
    return {
      drawer: true
    }
  },
  computed: {
    ...mapState(['challenges', 'currentIndex'])
  },
  methods: {
    ...mapActions(['navigateToChallenge'])
  }
}
</script>

<style lang="sass" scoped>
.logo-text
  font-family: 'Monoton', cursive
  color: #ff0080
// .theme--dark.v-app-bar.v-toolbar.v-sheet
//   background-color: #0a3154
.v-toolbar__title
  font-size: 2rem
.theme--dark.v-card.v-card--outlined
  border: 2px solid white
</style>
