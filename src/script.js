function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let searchElement = document.querySelector("#search-input");

  let apiKey = "b739b64actfb7710ab2aa8f6044o4c38";
  let prompt = `user instructions: generate poem about ${searchElement.value}`;
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separating each line with a <br> element. DO NOT SHOW ANY TAGS. Make sure to follow user instructions. Sign the poem as 'SheCodes AI' inside <strong></strong> elements, at the end of the poem.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a poem about ${searchElement.value}</div>`;
  axios.get(apiUrl).then(displayPoem);
}

let poemForm = document.querySelector("#poem-generator");
poemForm.addEventListener("submit", generatePoem);
