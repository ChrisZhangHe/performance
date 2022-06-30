function handleClick() {
  //   setTimeout(() => {
  //     console.log(1);
  //   }, 3000);
  //   setTimeout(() => {
  //     console.log(2);
  //   }, 3000);
  setTimeout(() => {
    console.log(1);
  });
  setTimeout(() => {
    console.log(2);
  });

  new Promise((res) => {
    console.log(3);
    res();
  })
    .then(() => console.log(4))
    .then(() => console.log(5));
  new Promise((res) => {
    console.log(6);
    res();
  }).then(() => console.log(7));

  console.log(8);

  request(() => console.log(9), false);

  console.log(10);

  request(() => console.log(11), true);

  console.log(12);
}
function request(reqListener, isAsync) {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', reqListener);
  oReq.open('GET', 'http://10.1.207.42:8080/event-loop/index.js', isAsync);
  oReq.send();
}

function sleep(duration) {
  const current = new Date().getTime();
  console.log('sleep-start', current);
  while (current + duration > new Date().getTime()) {}
  console.log('sleep-end', new Date().getTime());
}
