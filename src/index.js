import md from './README.md';
import greenHeart from './images/green-heart.png';

const renderTarget = document.getElementById('readme');
const renderMarkdown = md.replace(
  ':green_heart:',
  `<img src="${greenHeart}" style="height: 12px" />`
);
renderTarget.innerHTML = renderMarkdown;
