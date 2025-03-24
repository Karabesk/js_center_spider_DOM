'use strict';

// write code here
const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

spider.style.top = `${wall.style.offsetHeight - spider.style.height / 2}px`;
spider.style.right = `${wall.style.offsetWidth - spider.style.width / 2}px`;
