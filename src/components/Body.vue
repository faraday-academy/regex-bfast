<template>
  <v-row>
    <v-col sm="10" md="8">
      <v-row cols="12">
        <v-col>
          <h2
            v-html="$options.filters.highlightFilter(
              $store.getters.currentChallenge.fullText, userRegex, $style)"
            class="mt-5 mb-4"
          >
          </h2>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="9">
          <v-text-field
            outlined
            :error="regexError"
            :error-messages="errorMessage"
            v-model="userRegex"
            placeholder="Enter Regex"
            @keypress.enter.stop="nextChallenge"
            @keyup="checkValidRegex"
          >
            <template v-slot:prepend>
              /
            </template>
            <template v-slot:append-outer>
              /
            </template>
          </v-text-field>
        </v-col>

        <v-col cols="3">
          <v-text-field
            :disabled="!$store.getters.currentChallenge.needsFlags"
            outlined
            v-model="userFlags"
            placeholder="Enter Flags"
            @keypress.enter="nextChallenge"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-card
            outlined
          >
            <v-card-text>
              <v-icon color="info">mdi-alert-circle-outline</v-icon>
              {{ $store.getters.currentChallenge.info }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      userRegex: '',
      userFlags: '',
      regexError: false,
      errorMessage: '',
      flagsError: false
    }
  },
  filters: {
    highlightFilter(value, userRegex, $style) {
      try {
        let regex = new RegExp(userRegex)
        let newValue = value.replace(
          regex, (text) => `<span class="${$style.highlight}">${text}</span>`
        )
        return newValue
      } catch {
        return value
      }
    }
  },
  methods: {
    checkValidRegex() {
      try {
        new RegExp(this.userRegex)
        this.regexError = false
        this.errorMessage = ''
      } catch (err) {
        this.regexError = true
        this.errorMessage = 'Invalid Regex'
      }
    },
    nextChallenge() {
      let currentIndex = this.$store.state.currentIndex
      let regex = new RegExp(this.userRegex)
      if (regex.test(this.$store.getters.currentChallenge.fullText)) {
        this.$store.commit('navigateToChallenge', currentIndex + 1)
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
