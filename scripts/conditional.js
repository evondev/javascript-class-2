/*if(conditional) {
  // do something 1
} else {
  // do something 2
}*/
/*if(conditional) {}
else if(somethingElseTrue) {}
else {}*/
// {
//   const myScore = 7;
//   if (myScore < 5) {
//     console.log("Oh no!");
//   } else if (myScore >= 5 && myScore <= 7) {
//     console.log("Oh yeah");
//   } else if (myScore >= 8 && myScore <= 9) {
//     console.log("I will have special present from my mother");
//   } else {
//     console.log(
//       "I will have special present from both my mother and my father also my brother"
//     );
//   }
// }
{
  const myScore = 7;
  switch (myScore) {
    case 5:
      console.log("Oh no!");
      break;
    case 6:
    case 7:
      console.log("Oh yeah!");
      break;
    case 8:
    case 9:
      console.log("I will have special present from my mother");
      break;

    default:
      console.log(
        "I will have special present from both my mother and my father also my brother"
      );
      break;
  }
}
{
  let rating;
  const hero = "captain america";
  switch (hero) {
    case "captain america":
      console.log("My favorite character is Captain");
      rating = 10;
      break;
    case "black panther":
      console.log("My favorite character is black panther");
      rating = 9;
      break;
    case "doctor strange":
      console.log("My favorite character is doctor strange");
      rating = 8;
      break;

    default:
      break;
  }
  console.log("rating:", rating);
}
{
  const score = 5;
  const gift =
    score === 10
      ? "bycle"
      : score <= 9 && score >= 7
      ? "mouse"
      : score >= 5
      ? "keyboard"
      : "nothing";
  console.log("gift:", gift);
}
