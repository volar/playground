function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  // Create character frequency maps for both strings
  const charCountS: Record<string, number> = {};
  const charCountT: Record<string, number> = {};

  // Populate character frequency map for string s
  for (const char of s) {
    charCountS[char] = (charCountS[char] || 0) + 1;
  }

  // Populate character frequency map for string t
  for (const char of t) {
    charCountT[char] = (charCountT[char] || 0) + 1;
  }

  // Compare character frequency maps
  for (const char in charCountS) {
    if (charCountS[char] !== charCountT[char]) {
      return false;
    }
  }

  return true;
}

export default isAnagram;
