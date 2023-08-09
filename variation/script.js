function checkVowels() {
  let userString = document.getElementById("userStringInput").value;
  let vowelsList = "";
  for (character of userString) {
    if (
      character === "a" ||
      character === "e" ||
      character === "i" ||
      character === "o" ||
      character === "u" ||
      character === "A" ||
      character === "E" ||
      character === "I" ||
      character === "O" ||
      character === "U"
    ) {
      vowelsList += character;
    }
  }

  if (vowelsList === "") {
    vowelsList = "Vowels not found";
  }

  let vowelsFound = document.createElement("h2");
  vowelsFound.innerHTML = `Vowels found: ${vowelsList}`;
  document.getElementById("displayVowels").innerHTML = "";
  document.getElementById("displayVowels").appendChild(vowelsFound);
}
