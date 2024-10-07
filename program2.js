function decodeTheRing(message, pattern) {
  function isMatch(message, pattern) {
      // Base case: If the pattern is empty, the message must also be empty
      if (pattern.length === 0) {
          return message.length === 0;
      }

      // Handle the wildcard '*', which can match any sequence of characters (including an empty string)
      if (pattern[0] === '*') {
          return isMatch(message, pattern.slice(1)) || 
                 (message.length > 0 && isMatch(message.slice(1), pattern));
      }

      // Handle the single letter wildcard '?', which can match exactly one character
      if (pattern[0] === '?' || (message.length > 0 && pattern[0] === message[0])) {
          return isMatch(message.slice(1), pattern.slice(1));
      }

      // If the current characters don't match and the pattern isn't '*' or '?', return false
      return false;
  }

  return isMatch(message, pattern);
}

// Export the function for testing
module.exports = decodeTheRing;
