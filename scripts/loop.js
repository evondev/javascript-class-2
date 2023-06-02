const myJob = "FrontendDeveloper";
console.log(myJob[0]); // F
console.log(myJob[myJob.length - 1]); // r
{
  // 1. for
  /*
 for (let index = 0; index < array.length; index++) {
  const element = array[index];
 }
*/
  // left to right
  for (let index = 0; index < myJob.length; index++) {
    const element = myJob[index];
    // console.log("element:", element);
  }
  // right to left
  let results = "";
  for (let index = myJob.length - 1; index >= 0; index--) {
    const element = myJob[index];
    if (element === "D") continue;
    results += element;
  }
  console.log(results);
}
{
  // 2. while
  // let index = 0;
  // while (index < myJob.length) {
  //   console.log(myJob[index]);
  //   index++;
  // }
  // let j = myJob.length - 1;
  // while (j > -1) {
  //   console.log(myJob[j]);
  //   j--;
  // }
}
{
  // 3. do while
  // let index = 0;
  // do {
  //   console.log("working");
  // } while (index < 0);
}
