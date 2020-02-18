<template>
  <v-row>
    <v-col sm="10" md="8">
      <h2
        v-html="$options.filters.highlightFilter(
          currentChallenge.fullText, userRegex, $style)"
        class="mt-5 mb-4"
      >
      </h2>

      <v-text-field
        outlined
        v-model="userRegex"
        placeholder="Enter Regex"
        @keypress.enter="nextChallenge"
      >
        <template v-slot:prepend>
          /
        </template>
        <template v-slot:append-outer>
          /
        </template>
      </v-text-field>

      <v-card
        outlined
      >
        <v-card-text>
          <v-icon color="info">mdi-alert-circle-outline</v-icon>
          {{ currentChallenge.info }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      userRegex: ''
    }
  },
  filters: {
    highlightFilter(value, userRegex, $style) {
      let regex = new RegExp(userRegex)
      let newValue = value.replace(
        regex, (text) => `<span class="${$style.highlight}">${text}</span>`
      )
      return newValue
    }
  },
  computed: {
    ...mapGetters(['currentChallenge'])
  },
  methods: {
    ...mapMutations(['nextChallenge']),
    nextChallenge() {
      let regex = new RegExp(this.userRegex)
      if (regex.test(this.currentChallenge.fullText)) {
        this.nextChallenge()
      } else {
        console.log('no!')
      }
    }
  }
}
</script>

<style lang="sass" module>
.highlight
  background-color: yellow
</style>
