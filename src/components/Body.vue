<template>
  <v-row>
    <v-col sm="10" md="8">
      <v-row cols="12">
        <v-col>
          <h1>{{ $store.getters.currentChallenge.name }}</h1>
        </v-col>
      </v-row>
      <v-row cols="12">
        <v-col>
          <h2
            v-html="$options.filters.highlightFilter(
              $store.getters.currentChallenge.fullText,
              userRegex,
              userFlags,
              $style
            )"
            class="mt-5 mb-4"
            style="white-space: pre;"
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
      let currentIndex = this.$store.state.currentIndex
      let regex = new RegExp(this.userRegex, this.userFlags)
      const { fullText, toMatch, flags } = this.$store.getters.currentChallenge
      let unmatched = []
      let valid = false

      let notToMatch = fullText
      toMatch.forEach((value) => {
        let re = new RegExp(value, 'g')
        notToMatch = notToMatch.replace(re, '')
      })

      if (!flags || (this.userFlags && this.userFlags.includes(flags))) {
        unmatched = toMatch.filter((str) => {
          let matched = str.match(regex)
          return !matched || matched[0] !== str
        })

        valid = !regex.test(notToMatch)
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
