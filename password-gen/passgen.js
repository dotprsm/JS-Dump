function generatePassword(length = 16) {
  const chars =
    "abcdefghijklmnopqrstuvwxyz" +
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "0123456789" +
    "!@#$%^&*()_+-=";

  const randomValues = new Uint32Array(length);
  crypto.getRandomValues(randomValues);

  let password = "";

  for (let i = 0; i < length; i++) {
    password += chars[randomValues[i] % chars.length];
  }

  return password;
}

const password = generatePassword(16);

console.log(password);
