export default [
  {
    name: 'Match Text',
    fullText: 'oatmeal',
    toMatch: 'oatmeal',
    needsFlags: false,
    info: 'Type exact characters to match.'
  },
  {
    name: 'Match Lowercase',
    fullText: 'toast',
    toMatch: 'toast',
    needsFlags: false,
    info: 'Use a capture group for lowercase letters: [a-z].'
  },
  {
    name: 'Match Uppercase',
    fullText: 'TOAST',
    toMatch: 'TOAST',
    needsFlags: false,
    info: 'Use a capture group for uppercase letters: [A-Z].'
  },
  {
    name: 'Match Mixed-cases',
    fullText: 'Avocado',
    toMatch: 'Avocado',
    needsFlags: false,
    info: 'Use a capture group for uppercase letters: [A-Za-z].'
  },
  {
    name: 'Phrases',
    fullText: 'Avocado toast is awesome',
    toMatch: 'Avocado toast is awesome',
    needsFlags: true,
    info: 'Match with spaces: [A-Z a-z].'
  }
]
