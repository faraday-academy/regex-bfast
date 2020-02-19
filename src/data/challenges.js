export default [
  {
    name: 'Match Text',
    fullText: 'oatmeal',
    info: 'Type exact characters to match.'
  },
  {
    name: 'Match Lowercase',
    fullText: 'toast',
    info: 'Use a capture group for lowercase letters: [a-z].'
  },
  {
    name: 'Match Uppercase',
    fullText: 'TOAST',
    info: 'Use a capture group for uppercase letters: [A-Z].'
  },
  {
    name: 'Match Mixed-cases',
    fullText: 'Avocado',
    info: 'Use a capture group for uppercase letters: [A-Za-z].'
  },
  {
    name: 'Phrases',
    fullText: 'Avocado toast is awesome',
    info: 'Match with spaces: [A-Z a-z].'
  }
]
