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
    "You are a great AI assistant that gives many funny, appropriate jokes. Please answer concise and clear with no inapropriate jokes. Do not repeat the previous joke generated.";
  let prompt = "Generate short and funny computer-type jokes.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  joke.innerHTML = "Generating a joke for you...please wait";

  axios.get(apiUrl).then(showAnswer);
}

let buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", handleClick);
let joke = document.querySelector("#joke");
