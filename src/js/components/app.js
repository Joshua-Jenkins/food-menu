import { div, addId } from '../builders';
import navbar from './navbar';

export default function app() {
  const navbarEle = navbar();
  const appEle = addId(div(navbarEle), 'app-container');

  return appEle;
}
