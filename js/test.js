function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage
const originalString = "lMXzxkMuwvLPieDzYbvkOokmOqbPViYdUh_fh";
const reversedString = reverseString(originalString);
console.log(`Original: ${originalString}`);
console.log(`Reversed: ${reversedString}`);
