const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const output = document.querySelector("#output");
const umschrift = require("umschrift");
const Text = umschrift.Text;

btn.addEventListener("click", () => {
  try {
    const heb = input.value;
    const text = new Text(heb);
    const transliteration = text.transliterate();
    output.value = transliteration;
  } catch (e) {
    alert("There was an error: " + e.message);
  }
});
