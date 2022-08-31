const element = document.getElementById('main');
const main = document.querySelector('#main')
console.log(element);

main.remove()

const newHeader = document.createElement('h1');
newHeader.id = "victory"
newHeader.textContent = 'Chris is the champion';
console.log(newHeader);

