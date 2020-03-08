export default ({ fullText, solutionRegex, userRegex }) => {
  let notToMatch = [...fullText]

  // removes characters that are supposed to be matched
  fullText.forEach((value, i) => {
    notToMatch[i] = value.replace(solutionRegex, '')
  })

  const isValid = !userRegex.test(notToMatch)
  return isValid
}
