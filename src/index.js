/* eslint-disable no-unused-vars */
import './style.css';
import main from './main_load';
import catalog from './menu_load';
import { cakeFactory } from './cake_factory';

const content = document.getElementById('content');
const cakeList = [];

main(content);

const home = document.getElementById('home');
home.addEventListener('click', () => { main(content); });

const menu = document.getElementById('menu');
menu.addEventListener('click', () => { catalog(content, cakeList); });

const contact = document.getElementById('contact');
contact.addEventListener('click', () => { contact(content); });

const dripCake = cakeFactory('../src/drip.png', 'Drip Cake', 25);
const redVelvet = cakeFactory('../src/red-velvet.png', 'Red Velvet', 18);
const cupcakes = cakeFactory('../src/cupcakes.png', 'Cupcakes', 10);
cakeList.push(dripCake, redVelvet, cupcakes);
