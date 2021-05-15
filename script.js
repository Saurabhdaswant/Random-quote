const btn = document.getElementById("btn");
const quote = document.getElementById("quote");
const body = document.body;

//created the array bhaiii
const inspirationalQuotes = [
  "Every Developer Sucks --chrish sean.",
  "Take full responsibilty of your work.",
  "Going slow is fast",
  "Document your journey. ",
  "Programming is one of the only fields where the person messing up your work is YOU.. ",
  "Follower count !=== expertise ",
  "Clean code always looks like it was weitten by someone who cares. ",
  "A design that doesn't take change into account risks major redesign in the future. ",
  "It is not enought for code to work. ",
  "Truth can only be found in one place: the code. ",
];

//generated the random no. from inspirationalQuotes bhaiii  and acces the index value till now
// const numberPlzz = Math.floor(Math.random() * inspirationalQuotes.length);

//display the random quote from the inspirationalQuotes on the DOM
btn.addEventListener("click", function () {
  //acces the string from the genrated random number
  const numberPlzz =
    inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)];
  console.log(numberPlzz);

  for (let i = 0; i < inspirationalQuotes.length; i++) {
    document.querySelector(".quote").textContent = numberPlzz;
  }
});

//!And.... yes you did it bhaiii congratulations!!   solved it on your own you are  good at promblem solving  👀
