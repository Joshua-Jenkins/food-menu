(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.text = text;
exports.createElement = createElement;
exports.div = div;
exports.i = i;
exports.span = span;
exports.nav = nav;
exports.addClass = addClass;
exports.addId = addId;
function text(words) {
  return document.createTextNode(words);
}

function createElement(type) {
  var newElement = document.createElement(type);

  for (var _len = arguments.length, children = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    children[_key - 1] = arguments[_key];
  }

  children.forEach(function (child) {
    return newElement.appendChild(child);
  });
  return newElement;
}

function div() {
  for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    children[_key2] = arguments[_key2];
  }

  return createElement.apply(undefined, ['div'].concat(children));
}
function i() {
  for (var _len3 = arguments.length, children = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    children[_key3] = arguments[_key3];
  }

  return createElement.apply(undefined, ['i'].concat(children));
}
function span() {
  for (var _len4 = arguments.length, children = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    children[_key4] = arguments[_key4];
  }

  return createElement.apply(undefined, ['span'].concat(children));
}
function nav() {
  for (var _len5 = arguments.length, children = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    children[_key5] = arguments[_key5];
  }

  return createElement.apply(undefined, ['nav'].concat(children));
}
function addClass(element) {
  var newElement = element.cloneNode(true);

  for (var _len6 = arguments.length, klasses = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
    klasses[_key6 - 1] = arguments[_key6];
  }

  klasses.forEach(function (klass) {
    return newElement.classList.add(klass);
  });
  return newElement;
}
function addId(element, id) {
  var newElement = element.cloneNode(true);
  return Object.assign(newElement, { id: id });
}

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = app;

var _builders = require('../builders');

var _navbar = require('./navbar');

var _navbar2 = _interopRequireDefault(_navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function app() {
  var navbarEle = (0, _navbar2.default)();
  var appEle = (0, _builders.addId)((0, _builders.div)(navbarEle), 'app-container');

  return appEle;
}

},{"../builders":1,"./navbar":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = navbar;

var _builders = require('../builders');

function navbar() {
  var navLeft = (0, _builders.addClass)((0, _builders.div)(), 'navbar-left');

  var cartIcon = (0, _builders.addId)((0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-shopping-cart'), 'cart-icon');
  var cartItems = (0, _builders.addClass)((0, _builders.span)(), 'cart-items');
  var navbarItem = (0, _builders.addClass)((0, _builders.div)(cartIcon, cartItems), 'navbar-item');
  var navRight = (0, _builders.addClass)((0, _builders.div)(navbarItem), 'navbar-right', 'cart');

  return (0, _builders.addClass)((0, _builders.nav)(navLeft, navRight), 'navbar');
}

},{"../builders":1}],4:[function(require,module,exports){
'use strict';

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var body = document.querySelector('body');
body.insertBefore((0, _app2.default)(), body.childNodes[0]);

},{"./components/app":2}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYnVpbGRlcnMuanMiLCJzcmMvanMvY29tcG9uZW50cy9hcHAuanMiLCJzcmMvanMvY29tcG9uZW50cy9uYXZiYXIuanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztRQ0FnQixJLEdBQUEsSTtRQUlBLGEsR0FBQSxhO1FBTUEsRyxHQUFBLEc7UUFHQSxDLEdBQUEsQztRQUdBLEksR0FBQSxJO1FBR0EsRyxHQUFBLEc7UUFHQSxRLEdBQUEsUTtRQUtBLEssR0FBQSxLO0FBM0JULFNBQVMsSUFBVCxDQUFjLEtBQWQsRUFBcUI7QUFDMUIsU0FBTyxTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBUDtBQUNEOztBQUVNLFNBQVMsYUFBVCxDQUF1QixJQUF2QixFQUEwQztBQUMvQyxNQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLElBQXZCLENBQW5COztBQUQrQyxvQ0FBVixRQUFVO0FBQVYsWUFBVTtBQUFBOztBQUUvQyxXQUFTLE9BQVQsQ0FBaUI7QUFBQSxXQUFTLFdBQVcsV0FBWCxDQUF1QixLQUF2QixDQUFUO0FBQUEsR0FBakI7QUFDQSxTQUFPLFVBQVA7QUFDRDs7QUFFTSxTQUFTLEdBQVQsR0FBMEI7QUFBQSxxQ0FBVixRQUFVO0FBQVYsWUFBVTtBQUFBOztBQUMvQixTQUFPLGdDQUFjLEtBQWQsU0FBd0IsUUFBeEIsRUFBUDtBQUNEO0FBQ00sU0FBUyxDQUFULEdBQXdCO0FBQUEscUNBQVYsUUFBVTtBQUFWLFlBQVU7QUFBQTs7QUFDN0IsU0FBTyxnQ0FBYyxHQUFkLFNBQXNCLFFBQXRCLEVBQVA7QUFDRDtBQUNNLFNBQVMsSUFBVCxHQUEyQjtBQUFBLHFDQUFWLFFBQVU7QUFBVixZQUFVO0FBQUE7O0FBQ2hDLFNBQU8sZ0NBQWMsTUFBZCxTQUF5QixRQUF6QixFQUFQO0FBQ0Q7QUFDTSxTQUFTLEdBQVQsR0FBMEI7QUFBQSxxQ0FBVixRQUFVO0FBQVYsWUFBVTtBQUFBOztBQUMvQixTQUFPLGdDQUFjLEtBQWQsU0FBd0IsUUFBeEIsRUFBUDtBQUNEO0FBQ00sU0FBUyxRQUFULENBQWtCLE9BQWxCLEVBQXVDO0FBQzVDLE1BQU0sYUFBYSxRQUFRLFNBQVIsQ0FBa0IsSUFBbEIsQ0FBbkI7O0FBRDRDLHFDQUFULE9BQVM7QUFBVCxXQUFTO0FBQUE7O0FBRTVDLFVBQVEsT0FBUixDQUFnQjtBQUFBLFdBQVMsV0FBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLEtBQXpCLENBQVQ7QUFBQSxHQUFoQjtBQUNBLFNBQU8sVUFBUDtBQUNEO0FBQ00sU0FBUyxLQUFULENBQWUsT0FBZixFQUF3QixFQUF4QixFQUE0QjtBQUNqQyxNQUFNLGFBQWEsUUFBUSxTQUFSLENBQWtCLElBQWxCLENBQW5CO0FBQ0EsU0FBTyxPQUFPLE1BQVAsQ0FBYyxVQUFkLEVBQTBCLEVBQUUsTUFBRixFQUExQixDQUFQO0FBQ0Q7Ozs7Ozs7O2tCQzNCdUIsRzs7QUFIeEI7O0FBQ0E7Ozs7OztBQUVlLFNBQVMsR0FBVCxHQUFlO0FBQzVCLE1BQU0sWUFBWSx1QkFBbEI7QUFDQSxNQUFNLFNBQVMscUJBQU0sbUJBQUksU0FBSixDQUFOLEVBQXNCLGVBQXRCLENBQWY7O0FBRUEsU0FBTyxNQUFQO0FBQ0Q7Ozs7Ozs7O2tCQ051QixNOztBQUZ4Qjs7QUFFZSxTQUFTLE1BQVQsR0FBa0I7QUFDL0IsTUFBTSxVQUFVLHdCQUFTLG9CQUFULEVBQWdCLGFBQWhCLENBQWhCOztBQUVBLE1BQU0sV0FBVyxxQkFBTSx3QkFBUyxrQkFBVCxFQUFjLElBQWQsRUFBb0Isa0JBQXBCLENBQU4sRUFBK0MsV0FBL0MsQ0FBakI7QUFDQSxNQUFNLFlBQVksd0JBQVMscUJBQVQsRUFBaUIsWUFBakIsQ0FBbEI7QUFDQSxNQUFNLGFBQWEsd0JBQVMsbUJBQUksUUFBSixFQUFjLFNBQWQsQ0FBVCxFQUFtQyxhQUFuQyxDQUFuQjtBQUNBLE1BQU0sV0FBVyx3QkFBUyxtQkFBSSxVQUFKLENBQVQsRUFBMEIsY0FBMUIsRUFBMEMsTUFBMUMsQ0FBakI7O0FBRUEsU0FBTyx3QkFBUyxtQkFBSSxPQUFKLEVBQWEsUUFBYixDQUFULEVBQWlDLFFBQWpDLENBQVA7QUFDRDs7Ozs7QUNYRDs7Ozs7O0FBRUEsSUFBTSxPQUFPLFNBQVMsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsS0FBSyxZQUFMLENBQWtCLG9CQUFsQixFQUF5QixLQUFLLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBekIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGZ1bmN0aW9uIHRleHQod29yZHMpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHdvcmRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgLi4uY2hpbGRyZW4pIHtcbiAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gbmV3RWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCkpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpdiguLi5jaGlsZHJlbikge1xuICByZXR1cm4gY3JlYXRlRWxlbWVudCgnZGl2JywgLi4uY2hpbGRyZW4pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGkoLi4uY2hpbGRyZW4pIHtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2knLCAuLi5jaGlsZHJlbik7XG59XG5leHBvcnQgZnVuY3Rpb24gc3BhbiguLi5jaGlsZHJlbikge1xuICByZXR1cm4gY3JlYXRlRWxlbWVudCgnc3BhbicsIC4uLmNoaWxkcmVuKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBuYXYoLi4uY2hpbGRyZW4pIHtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ25hdicsIC4uLmNoaWxkcmVuKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCAuLi5rbGFzc2VzKSB7XG4gIGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAga2xhc3Nlcy5mb3JFYWNoKGtsYXNzID0+IG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChrbGFzcykpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRJZChlbGVtZW50LCBpZCkge1xuICBjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ld0VsZW1lbnQsIHsgaWQgfSk7XG59XG4iLCJpbXBvcnQgeyBkaXYsIGFkZElkIH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuaW1wb3J0IG5hdmJhciBmcm9tICcuL25hdmJhcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcCgpIHtcbiAgY29uc3QgbmF2YmFyRWxlID0gbmF2YmFyKCk7XG4gIGNvbnN0IGFwcEVsZSA9IGFkZElkKGRpdihuYXZiYXJFbGUpLCAnYXBwLWNvbnRhaW5lcicpO1xuXG4gIHJldHVybiBhcHBFbGU7XG59XG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgYWRkSWQsIGRpdiwgaSwgbmF2LCBzcGFuIH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZiYXIoKSB7XG4gIGNvbnN0IG5hdkxlZnQgPSBhZGRDbGFzcyhkaXYoKSwgJ25hdmJhci1sZWZ0Jyk7XG5cbiAgY29uc3QgY2FydEljb24gPSBhZGRJZChhZGRDbGFzcyhpKCksICdmYScsICdmYS1zaG9wcGluZy1jYXJ0JyksICdjYXJ0LWljb24nKTtcbiAgY29uc3QgY2FydEl0ZW1zID0gYWRkQ2xhc3Moc3BhbigpLCAnY2FydC1pdGVtcycpO1xuICBjb25zdCBuYXZiYXJJdGVtID0gYWRkQ2xhc3MoZGl2KGNhcnRJY29uLCBjYXJ0SXRlbXMpLCAnbmF2YmFyLWl0ZW0nKTtcbiAgY29uc3QgbmF2UmlnaHQgPSBhZGRDbGFzcyhkaXYobmF2YmFySXRlbSksICduYXZiYXItcmlnaHQnLCAnY2FydCcpO1xuXG4gIHJldHVybiBhZGRDbGFzcyhuYXYobmF2TGVmdCwgbmF2UmlnaHQpLCAnbmF2YmFyJyk7XG59XG4iLCJpbXBvcnQgYXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuYm9keS5pbnNlcnRCZWZvcmUoYXBwKCksIGJvZHkuY2hpbGROb2Rlc1swXSk7XG4iXX0=
