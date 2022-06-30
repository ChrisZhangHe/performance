console.log('index-js');
function onDynamicLoadJs() {
  let srciptDom = document.createElement('script');
  srciptDom.src = './dynamic.js';
  document.body.appendChild(srciptDom);
}
function sleep(duration) {
  const current = new Date().getTime();
  console.log('sleep-start', current);
  while (current + duration > new Date().getTime()) {}
  console.log('sleep-end', new Date().getTime());
}

