(function () {
  function longTask(duration) {
    const current = new Date().getTime();
    console.log('longTask-start', current);
    while (current + duration > new Date().getTime()) {}
    console.log('longTask-end', new Date().getTime());
  }
  longTask(100);
  // ζΆι΄εη
  // longTask(20);
  // setTimeout(function () {
  //   longTask(20);
  //   setTimeout(function () {
  //     longTask(20);
  //     setTimeout(function () {
  //       longTask(20);
  //       setTimeout(function () {
  //         longTask(20);
  //       });
  //     });
  //   });
  // });
  // longTask(20);
  // setTimeout(function () {
  //   longTask(20);
  // });
  // setTimeout(function () {
  //   longTask(20);
  // });
  // setTimeout(function () {
  //   longTask(20);
  // });
  // setTimeout(function () {
  //   longTask(20);
  // });

  // longTask(20);
  // requestIdleCallback(function () {
  //   longTask(20);
  // });
  // requestIdleCallback(function () {
  //   longTask(20);
  // });
  // requestIdleCallback(function () {
  //   longTask(20);
  // });
  // requestIdleCallback(function () {
  //   longTask(20);
  // });
})();
