export default [
  {
    name: 'Match Text',
    fullText: 'oatmeal',
    toMatch: ['oatmeal'],
    flags: '',
    info: 'Regex will match characters from right to left. Type exact characters to match.'
  },
  {
    name: 'Match Lowercase',
    fullText: 'toast',
    toMatch: ['toast'],
    flags: '',
    info: 'Use a capture group for lowercase letters: [a-z].'
  },
  {
    name: 'Match Uppercase',
    fullText: 'TOAST',
    toMatch: ['TOAST'],
    flags: '',
    info: 'Use a capture group for uppercase letters: [A-Z].'
  },
  {
    name: 'Match Mixed-cases',
    fullText: 'Avocado',
    toMatch: ['Avocado'],
    flags: '',
    info: 'Use a capture group for uppercase letters: [A-Za-z].'
  },
  {
    name: 'Match Numbers',
    fullText: '12345',
    toMatch: ['12345'],
    flags: '',
    info: 'Use a capture group for numbers: [0-9].'
  },
  {
    name: 'Phrases',
    fullText: 'Avocado toast is awesome',
    toMatch: ['Avocado toast is awesome'],
    flags: '',
    info: 'You can match the spaces in a string as well by just adding the space character in your regex. Match with spaces: [A-Z a-z].'
  },
  {
    name: 'Match Word in Text',
    fullText: 'Vermont Maple Syrup',
    toMatch: ['Maple'],
    flags: '',
    info: 'You can use regex to match one part of a string. In this case, use the techniques you have learned in previous lessons to match the word, "Maple".'
  },
  {
    name: 'Match First Word in Text',
    fullText: 'Vermont Maple Syrup',
    toMatch: ['Vermont'],
    flags: '',
    info: 'You can use regex to match only what\'s at the beginning of a string. Use the \'^\' at the start of your regex to match the word, "Vermont".'
  },
  {
    name: 'Match Last Word in Text',
    fullText: 'Vermont Maple Syrup',
    toMatch: ['Syrup'],
    flags: '',
    info: 'You can use regex to match one part of a string. In this case, use the techniques you have learned in previous lessons to match the word, "Maple".'
  },
  {
    name: 'Match Subdomains',
    fullText: 'http://example.com\nhttps://mysite.example.com\nhttps://www.example.com\nhttp://blog.example.com',
    toMatch: ['https://mysite.example.com', 'http://blog.example.com'],
    flags: 'g',
    info: 'Match only the subdomains and not the domains without a subdomain. \'www\' counts as part of the domain and not a subdomain. Your regex should match both http and https.'
  },
  {
    name: 'Use Global Flag',
    fullText: 'This plate is larger than that plate.',
    toMatch: ['plate'],
    flags: 'g',
    info: 'You can use regex to match a string multiple times...'
  },
  {
    name: 'Password Regquirements',
    fullText: 'Abc$123\n123Abc_zyx\nDunkin_donuts\nBreakfast_is_gre@t',
    toMatch: ['123Abc_zyx', 'Breakfast_is_gre@t'],
    flags: 'g',
    info: 'What\'s an important part of any healthy breakfast? Good password requirements! Use regex to select only the passwords that match the following criteria: 1 Uppercase, 1 Lowercase, 1 Number, 1 Special Character, At Least 10 Characters Long.'
  }
]
