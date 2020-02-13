export default [
  {
    name: 'Plain Text',
    sectionNum: 1,
    fullText: 'oatmeal',
    textToMatch: 'oatmeal',
    info: 'Type exact characters to match.'
  },
  {
    name: 'Phrases',
    sectionNum: 1,
    fullText: 'Avocado toast is awesome!',
    textToMatch: 'Avocado toast is awesome!',
    info: `Try us a magic character like \`.\` (period).
      That matches any character.
      To match every character add a plus sign: \`.+\`
    `
  }
]
