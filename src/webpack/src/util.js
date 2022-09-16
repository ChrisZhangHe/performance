export const creatElement = function (type = "div") {
  let el = document.createElement(type);
  el.innerHTML = type;
  document.body.appendChild(el);
};
