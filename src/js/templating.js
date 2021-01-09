import postTemplate from '../templates/post-items.hbs';
import menu from '../menu.json'

const markup = postTemplate(menu);

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);