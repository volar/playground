function isPalindrome(s: string): boolean {
  const phrase = s;
  const cleanedPhrase = phrase.toLowerCase().replace(/[^a-z0-9]/g, '');

  const reversePhrase = cleanedPhrase.split('').reverse().join('');

  return cleanedPhrase === reversePhrase;
}

export default isPalindrome;
