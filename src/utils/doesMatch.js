export default ({ fullText, solutionRegex, userRegex }) => {
  const defaultMatches = []
  const userMatches = []
  let unmatched = []

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

  return !unmatched.length
}
