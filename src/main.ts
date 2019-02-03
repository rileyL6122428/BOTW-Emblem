const canvas = document.querySelector('canvas');

canvas.width = 15 * 45;
canvas.height = 10 * 45;

const context = canvas.getContext('2d');
context.fillText('HELLO WORLD', 100, 100);
