function showAnswer(response) {
  //console.log(response);

  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    delay: 75,
  });
}

function handleClick(event) {
  event.preventDefault();
  let apiKey = "8955aec3fa84eee934db0tdod70f6d28";
  let context =
    "You are a great AI assistant that gives various funny, appropriate jokes. Please answer concise and clear. No inapropriate jokes. Generate a new nerd joke every time the button is clicked. Generate a new nerd joke with a API fetch response.";
  let prompt = "Generate a new short and funny nerd joke.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  joke.innerHTML = "Generating a joke for you...please wait";

  axios.get(apiUrl).then(showAnswer);
}

let buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", handleClick);
let joke = document.querySelector("#joke");
