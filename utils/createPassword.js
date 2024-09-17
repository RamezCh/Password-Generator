const alpha = 'aAsSdDfFgGhHjJkKlLzZxXcCvVbBnNmMqQwWeErRtTyYuUiIoOpP';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+=-';

const createPassword = (length = 8, hasNumbers = true, hasSymbols = true) => {
  let chars = alpha;
  if (hasNumbers) chars += numbers;
  if (hasSymbols) chars += symbols;
  return generatePassword(length, chars, hasSymbols);
};

const generatePassword = (length, chars, hasSymbols) => {
  // Start with an array of empty characters
  let password = Array(length).fill('');

  // Randomly determine where to place symbols
  let indexSymbol1 = -1,
    indexSymbol2 = -2;
  if (hasSymbols) {
    indexSymbol1 = Math.floor(Math.random() * length);
    do {
      indexSymbol2 = Math.floor(Math.random() * length);
    } while (indexSymbol1 === indexSymbol2); // Ensure two distinct locations for symbols

    // Insert random symbols at these indices
    password[indexSymbol1] = symbols.charAt(
      Math.floor(Math.random() * symbols.length)
    );
    password[indexSymbol2] = symbols.charAt(
      Math.floor(Math.random() * symbols.length)
    );
  }

  // Fill the rest of the password with random characters from the allowed set
  for (let i = 0; i < length; i++) {
    if (i === indexSymbol1 || i === indexSymbol2) continue;
    password[i] = chars.charAt(Math.floor(Math.random() * chars.length));
  }
  // Convert array back to a string
  return password.join('');
};

export default createPassword;
