<template>
  <v-row>
    <v-col sm="10" md="8">
      <v-row cols="12">
        <v-col>
          <h1>
            {{ $store.getters.currentChallenge.name }}
          </h1>
        </v-col>
      </v-row>

      <v-row>
        <div class="challenge-tray">
          <div class="challenge-tray-inner">
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
                >
                </h2>
              </v-col>
            </v-row>
          </div>
        </div>
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
      v-model="snackbar.show"
      :color="snackbar.color"
      top
      right
    >
      {{ snackbar.message }}
    </v-snackbar>
  </v-row>
</template>

<script>
import _ from 'lodash'
import doesMatch from '@/utils/doesMatch'
import doesNotMatch from '@/utils/doesNotMatch'

export default {
  data () {
    return {
      userRegex: '',
      userFlags: '',
      regexError: false,
      errorMessage: '',
      flagsError: false,
      snackbar: {
        show: false,
        color: 'error',
        message: 'Incorrect answer. Try again.'
      }
    }
  },
  filters: {
    highlightFilter (value, userRegex, userFlags, $style) {
      try {
        const regex = new RegExp(userRegex, userFlags)
        const newValue = value.replace(
          regex, (text) => `<span class="${$style.highlight}">${text}</span>`
        )
        return newValue
      } catch {
        return value
      }
    }
  },
  methods: {
    checkValidRegex () {
      try {
        new RegExp(this.userRegex, this.userFlags)
        this.regexError = false
        this.errorMessage = ''
      } catch (err) {
        this.regexError = true
        this.errorMessage = 'Invalid Regex'
      }
    },
    nextChallenge () {
      const { fullText, pattern, flags, forbiddenPatterns } = this.$store.getters.currentChallenge

      const forbidden = forbiddenPatterns.some((value) => {
        return this.userRegex.includes(value)
      })
      if (forbidden) {
        this.showSnackbar('warning')
        return false
      }

      const currentIndex = this.$store.state.currentIndex
      const solutionRegex = new RegExp(pattern, flags)
      const userRegex = new RegExp(this.userRegex, this.userFlags)

      let validFlags = false
      let isFullTextMatched = false
      let isExtraTextMatched = false

      if (!flags || (this.userFlags && this.userFlags.includes(flags))) {
        validFlags = true
        const args = {
          fullText,
          solutionRegex,
          userRegex
        }
        isFullTextMatched = doesMatch(args)
        isExtraTextMatched = doesNotMatch(args)
      }

      if (validFlags && isFullTextMatched && isExtraTextMatched) {
        this.userRegex = ''
        this.userFlags = ''
        this.showSnackbar('success')

        this.$store.dispatch('navigateToChallenge', currentIndex + 1)
      } else {
        this.showSnackbar('error')
      }
    },
    showSnackbar (type) {
      this.snackbar.color = type
      this.snackbar.show = true

      switch (type) {
        case 'error':
          this.snackbar.message = 'Incorrect answer. Try again.'
          break
        case 'warning':
          this.snackbar.message = 'You are using a Regex Pattern that is outside of the scope of this challenge. Please refactor.'
          break
        case 'success':
          this.snackbar.message = 'Great job! Challenge completed.'
          break
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
h1
  font-family: 'Baloo Thambi 2', sans-serif
.challenge-tray
  background: center center url('../assets/orange-tray2.png') no-repeat
  background-size: 100% 80%
.challenge-tray-inner
  margin: 70px 50px
</style>
