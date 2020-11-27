/* eslint-disable no-unused-vars */
import './style.css';
import main from './main_load';
import catalog from './menu_load';
import info from './contact_load';
import { cakeFactory } from './cake_factory';
import dripCakeImg from './drip.png';
import redVelvetImg from './red-velvet.png';
import cupcakesImg from './cupcakes.png';

const content = document.getElementById('content');
const cakeList = [];

main(content);

const home = document.getElementById('home');
home.addEventListener('click', () => { main(content); });

const menu = document.getElementById('menu');
menu.addEventListener('click', () => { catalog(content, cakeList); });

const contact = document.getElementById('contact');
contact.addEventListener('click', () => { info(content); });

const dripCake = cakeFactory(dripCakeImg, 'Drip Cake', 25);
const redVelvet = cakeFactory(redVelvetImg, 'Red Velvet', 18);
const cupcakes = cakeFactory(cupcakesImg, 'Cupcakes', 10);
cakeList.push(dripCake, redVelvet, cupcakes);
