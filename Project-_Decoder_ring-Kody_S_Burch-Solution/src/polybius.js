// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    const seperate = input.toLowerCase().split("");

    const cypher = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "(i/j)", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z"],
    ];

    if (encode) {
  

      const message = seperate.map((element) => {
        const asciiIndex = element.charCodeAt(0);
        if ((asciiIndex < 97 || asciiIndex > 122) && asciiIndex != 32) return;
        for (let i = 0; i < cypher.length; i++) {
          for (let j = 0; j < cypher[i].length; j++) {
            if (cypher[i][j] === element) return `${j + 1}${i + 1}`;
            if (element === "i" || element === "j") return "42";
            if (element === " ") return " ";
          }
        }
      });
     
      return message.join("");
    }

    let message = "";
    for (let i = 0; i < seperate.length; i += 2) {
      if (seperate[i] === " ") {
        message += " ";
        i--;
        continue;
      }
      
      if (!seperate[i + 1]) return false;
      message += cypher[seperate[i + 1] - 1][seperate[i] - 1];
    }
    return message;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };