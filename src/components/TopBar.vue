<template>
  <div>
    <v-app-bar
      dense
      dark
    >

      <v-toolbar-title>Regex Breakfast</v-toolbar-title>

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
