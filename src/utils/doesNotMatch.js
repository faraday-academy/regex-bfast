export default ({ fullText, solutionRegex, userRegex }) => {
  const notToMatch = [...fullText]

  // removes characters that are supposed to be matched
  fullText.forEach((value, i) => {
    notToMatch[i] = value.replace(solutionRegex, '')
  })

  const isValid = !userRegex.test(notToMatch)
  return isValid
}
