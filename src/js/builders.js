export function text(words) {
  return document.createTextNode(words);
}

export function createElement(type, ...children) {
  const newElement = document.createElement(type);
  children.forEach(child => newElement.appendChild(child));
  return newElement;
}
// added navbar
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
// end of navbar
// added hero element
export function section(...children) {
  return createElement('section', ...children);
}

export function p(...children) {
  return createElement('p', ...children);
}

export function img(source) {
  const image = createElement('img');
  image.src = source;
  return image;
}
//end of hero element

export function addId(element, id) {
  const newElement = element.cloneNode(true);
  return Object.assign(newElement, { id });
}
