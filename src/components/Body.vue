<template>
  <div>
    <h3 v-html="$options.filters.highlightFilter(text, userRegex, $style)"></h3>
    <v-text-field
      outlined
      v-model="userRegex"
      placeholder="Enter Regex"
    >
      <template v-slot:prepend>
        /
      </template>
      <template v-slot:append-outer>
        /
      </template>
    </v-text-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'Some text more text for everyone',
      userRegex: ''
    }
  },
  filters: {
    highlightFilter(value, userRegex, $style) {
      let regex = new RegExp(userRegex, 'g')
      let newValue = value.replace(
        regex, (text) => `<span class="${$style.highlight}">${text}</span>`
      )
      return newValue
    }
  }
}
</script>

<style lang="sass" module>
.highlight
  background-color: yellow
</style>
