/* eslint-disable no-unused-vars */
import './style.css';
import main from './main_load';
import catalog from './menu_load';

const content = document.getElementById('content');

main(content);

const home = document.getElementById('home');
home.addEventListener('click', () => { main(content); });

const menu = document.getElementById('menu');
menu.addEventListener('click', () => { catalog(content); });

const contact = document.getElementById('contact');
contact.addEventListener('click', () => { contact(content); });
