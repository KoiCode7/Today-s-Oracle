'use strict';

{
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');

  btn.addEventListener('click', () => {
    const results = ['Super Lucky!', 'Lucky!', 'Ok lol'];
    const n = Math.floor(Math.random() * results
    .length);

    result.textContent = results
    [n];
    
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