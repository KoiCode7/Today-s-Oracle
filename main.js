"use strict";

{
  const btn = document.getElementById("btn");
  const result = document.getElementById("result");

  btn.addEventListener("click", () => {
    const n = Math.random();
    if (n < 0.15) {
      result.textContent = "Great blessing!!!"; // 15%
    } else if (n < 0.35) {
      result.textContent = "Middle blessing!!"; // 20%
    } else if (n < 0.65) {
      result.textContent = "Small blessing!"; // 30%
    } else if (n < 0.95) {
      result.textContent = "Blessing"; // 30%
    } else {
      result.textContent = "Curse"; // 5%
    }

    console.log(n);

    // btn.addEventListener("click", () => {
    //   const results = [
    //     "great blessing!!!",
    //     "middle blessing!!",
    //     "small blessing!",
    //     "blessing",
    //     "Uncertain luck",
    //     "curse",
    //   ];
    //   const n = Math.floor(Math.random() * results.length);

    //   result.textContent = results[n];

    // switch (n) {
    //   case 0:
    //   result.textContent = 'Super Lucky!';
    //   break;
    //   case 1:
    //   result.textContent = 'Lucky!';
    //   break;
    //   case 2:
    //   result.textContent = 'Ok! lol';
    //   break;
    // };
  });
}
