(function () {
  document.querySelector('h1').innerHTML = '1';
  document.querySelector('h1').style.lineHeight = '24px';
  function appendChild(count) {
    // const dom = document.createElement('p');
    // dom.innerHTML = '飞机欧文附件而我附件为偶分而我积分为偶分Joe无法较为积分';
    // const img = document.createElement('img');
    // img.src = '../img/picture.png';
    // while (count--) {
    //   document.body.appendChild(img);
    // }
  }
  setTimeout(() => {
    document.querySelector('h1').innerHTML = '2';
    document.querySelector('h1').style.lineHeight = '48px';
    appendChild(100);
    setTimeout(() => {
      document.querySelector('h1').innerHTML = '3';
      document.querySelector('h1').style.lineHeight = '96px';
      appendChild(100);
      setTimeout(() => {
        document.querySelector('h1').innerHTML = '4';
        document.querySelector('h1').style.lineHeight = '192px';
        appendChild(100);
        setTimeout(() => {
          document.querySelector('h1').innerHTML = '5';
          document.querySelector('h1').style.lineHeight = '384px';
          appendChild(100);
        }, 200);
      }, 200);
    }, 200);
  }, 200);
})();
