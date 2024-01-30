function randomTal(max) {
  return Math.floor(Math.random() * max);
}
/*Funtionen generer et tilfældigt tal med et max*/
const detEndeligeTal = randomTal(100);
console.log(detEndeligeTal);
/*Konstanten detEndeligeTal oprettes til brug i spillet,
med udgangspunkt i funktionen randomTal, og et max sættes på*/

function checkGuess() {
  const userGuessElement = document.querySelector("#userGuess");
  const feedbackElement = document.querySelector("#feedback");
  const celebrationElement = document.querySelector("#celebration");
  /*Funktionen indeholder konstanter der vælger det tilhørende HTML-element ud fra deres ID
 og opretter en konstant der hører til det valgte HTML-element*/
  const userGuess = parseInt(userGuessElement.value);
  /* (userGuessElement.value) henter værdien/brugerens gæt fra input-elementet
parseInt konverterer værdien til heltal, da det ellers havde været streng*/
  if (isNaN(userGuess)) {
    feedbackElement.textContent = "Skriv venligst et gældende tal.";
    return;
  }
  /*if statement der henvender sig til hvis brugeren ikke skriver et gældende tal/tegn/tekst
Returnerer derefter til if statement*/

  if (userGuess === detEndeligeTal) {
    feedbackElement.textContent = "Du gættede rigtigt, tillykke!";
    celebrationElement.style.display = "block";
    /*Viser grafik ved rigtigt gæt*/
  } else {
    const message =
      userGuess < detEndeligeTal
        ? "For lavt, prøv igen!"
        : "For højt, prøv igen!";
    feedbackElement.textContent = message;
    correctImage.style.display = "none";
  }
  /*If/else statement der fortæller hvordan for højt, for lavt og korrekt svar skal
  "belønnes"*/
}
