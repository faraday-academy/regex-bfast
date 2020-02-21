export default [
  {
    name: 'Match Text',
    fullText: 'oatmeal',
    toMatch: 'oatmeal',
    needsFlags: false,
    info: 'Regex will match characters from right to left. Type exact characters to match.'
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
    name: 'Match Numbers',
    fullText: '12345',
    toMatch: '12345',
    needsFlags: false,
    info: 'Use a capture group for numbers: [0-9].'
  },
  {
    name: 'Phrases',
    fullText: 'Avocado toast is awesome',
    toMatch: 'Avocado toast is awesome',
    needsFlags: false,
    info: 'You can match the spaces in a string as well by just adding the space character in your regex. Match with spaces: [A-Z a-z].'
  },
  {
    name: 'Match Word in Text',
    fullText: 'Vermont Maple Syrup',
    toMatch: 'Maple',
    needsFlags: false,
    info: 'You can use regex to match one part of a string. In this case, use the techniques you have learned in previous lessons to match the word, "Maple".'
  },
  {
    name: 'Match First Word in Text',
    fullText: 'Vermont Maple Syrup',
    toMatch: 'Maple',
    needsFlags: false,
    info: 'You can use regex to match one part of a string. In this case, use the techniques you have learned in previous lessons to match the word, "Maple".'
  },
  {
    name: 'Match Last Word in Text',
    fullText: 'Vermont Maple Syrup',
    toMatch: 'Maple',
    needsFlags: false,
    info: 'You can use regex to match one part of a string. In this case, use the techniques you have learned in previous lessons to match the word, "Maple".'
  },
  {
    name: 'Use Global Flag',
    fullText: 'This plate is larger than that plate.',
    toMatch: 'plate',
    needsFlags: true,
    info: 'You can use regex to match a string multiple times...'
  }
]
