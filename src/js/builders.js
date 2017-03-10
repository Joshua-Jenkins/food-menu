export function text(words) {
  return document.createTextNode(words);
}

export function createElement(type, ...children) {
  const newElement = document.createElement(type);
  children.forEach(child => newElement.appendChild(child));
  return newElement;
}

export function div(...children) {
  return createElement('div', ...children);
}
export function i(...children) {
  return createElement('i', ...children);
}
export function span(...children) {
  return createElement('span', ...children);
}
export function nav(...children) {
  return createElement('nav', ...children);
}
export function addClass(element, ...klasses) {
  const newElement = element.cloneNode(true);
  klasses.forEach(klass => newElement.classList.add(klass));
  return newElement;
}
export function addId(element, id) {
  const newElement = element.cloneNode(true);
  return Object.assign(newElement, { id });
}
