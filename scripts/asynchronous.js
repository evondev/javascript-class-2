// 1. callback hell
// setTimeout(() => {
//   const value = 1;
//   setTimeout(() => {
//     console.log("2");
//     setTimeout(() => {
//       console.log("3");
//       setTimeout(() => {
//         console.log("4");
//         setTimeout(() => {
//           console.log("5");
//           setTimeout(() => {}, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
// 2. promise
// const myMotherPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // handle code here
//     reject("Oh no! I have not new Iphone");
//   }, 1000);
// });
// async function myMotherAsync() {
//   try {
//     const results = await myMotherPromise;
//     console.log("myMotherAsync ~ results:", results);
//   } catch (error) {
//     console.log("myMotherAsync ~ error:", error);
//   } finally {
//     console.log("myMotherAsync ~ finally");
//   }
// }
// myMotherAsync();
// myMotherPromise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log("error");
//     console.log(error);
//   });
const buyCookie = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Buy cookie failed");
  }, 1000);
});
const buyCoca = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Buy coca failed");
  }, 2000);
});
const buyApple = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Buy Apple failed");
  }, 3000);
});
// 3. Promise.all
// Promise.all([buyCookie, buyCoca, buyApple])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// 4. Promise.allSettled
// Promise.allSettled([buyCookie, buyCoca, buyApple])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// 5. Promise.race
Promise.any([buyCookie, buyCoca, buyApple])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(error);
  });
