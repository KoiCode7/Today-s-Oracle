"use strict";

{
  const btn = document.getElementById("btn");
  const result = document.getElementById("result");

  btn.addEventListener("click", () => {
    const results = [
      "great blessing!!!",
      "middle blessing!!",
      "small blessing!",
      "blessing",
      "Uncertain luck",
      "curse",
    ];
    const n = Math.floor(Math.random() * results.length);

    result.textContent = results[n];

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
