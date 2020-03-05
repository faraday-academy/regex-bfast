<template>
  <v-row>
    <v-col sm="10" md="8">
      <v-row cols="12">
        <v-col>
          <h1>{{ $store.getters.currentChallenge.name }}</h1>
        </v-col>
      </v-row>
      <v-row cols="12">
        <v-col class="my-5">
          <h2
            v-for="(text, i) in $store.getters.currentChallenge.fullText"
            :key="text + i"
            v-html="$options.filters.highlightFilter(
              text,
              userRegex,
              userFlags,
              $style
            )"
            style="white-space: pre;"
            class="elevation-3 pa-4 mb-2"
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
            :disabled="!$store.getters.currentChallenge.flags"
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
            tile
          >
            <v-card-text>
              <v-icon color="info">mdi-alert-circle-outline</v-icon>
              {{ $store.getters.currentChallenge.info }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-snackbar
      v-model="snackbar"
      :color="snackColor"
      top
      right
    >
      {{ snackMessage }}
    </v-snackbar>
  </v-row>
</template>

<script>
import _ from 'lodash'

export default {
  data() {
    return {
      userRegex: '',
      userFlags: '',
      regexError: false,
      errorMessage: '',
      flagsError: false,
      snackbar: false,
      snackColor: 'error',
      snackMessage: 'Incorrect answer. Try again.'
    }
  },
  filters: {
    highlightFilter(value, userRegex, userFlags, $style) {
      try {
        let regex = new RegExp(userRegex, userFlags)
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
        new RegExp(this.userRegex, this.userFlags)
        this.regexError = false
        this.errorMessage = ''
      } catch (err) {
        this.regexError = true
        this.errorMessage = 'Invalid Regex'
      }
    },
    nextChallenge() {
      const { fullText, pattern, flags, forbiddenPatterns } = this.$store.getters.currentChallenge

      let forbidden = forbiddenPatterns.some((value) => {
        return this.userRegex.includes(value)
      })
      if (forbidden) {
        this.snackColor = 'warning'
        this.snackMessage = 'You are using a Regex Pattern that is outside of the scope of this challenge. Please refactor.'
        this.snackbar = true
        return false
      }

      let currentIndex = this.$store.state.currentIndex
      let solutionRegex = new RegExp(pattern, flags)
      let userRegex = new RegExp(this.userRegex, this.userFlags)
      let unmatched = []
      let valid = false

      if (!flags || (this.userFlags && this.userFlags.includes(flags))) {
        let defaultMatches = []
        let userMatches = []

        // this loops through full text to populate an
        // array of things that were supposed to be matched,
        // defaultMatches, as well as an array of what the user
        // actually matched with their regex, userMatches
        fullText.forEach((value) => {
          defaultMatches.push(value.match(solutionRegex))
          userMatches.push(value.match(userRegex))
        })
        // the array of items that were supposed to be matched,
        // defaultMatches is looped through here to determine
        // if the user failed to match any item that they were
        // supposed to match
        unmatched = defaultMatches.filter((value, i) => {
          if (value === null) {
            return !(userMatches[i] === null)
          }
          const doesMatch = _.isMatch(userMatches[i], value)
          return !doesMatch
        })

        let notToMatch = [...fullText]
        // removes characters that are supposed to be matched
        fullText.forEach((value, i) => {
          notToMatch[i] = value.replace(solutionRegex, '')
        })

        valid = !userRegex.test(notToMatch)
      }

      if (valid && !unmatched.length) {
        this.userRegex = ''
        this.userFlags = ''
        this.snackColor = 'success'
        this.snackMessage = 'Great job! Challenge completed.'
        this.snackbar = true

        this.$store.dispatch('navigateToChallenge', currentIndex + 1)
      } else {
        this.snackColor = 'error'
        this.snackMessage = 'Incorrect answer. Try again.'
        this.snackbar = true
      }
    }
  }
}
</script>

<style lang="sass" module>
.highlight
  background-color: yellow
</style>

<style lang="sass">
.v-text-field fieldset, .v-text-field .v-input__control, .v-text-field div.v-input__slot
  border-radius: 0
</style>
