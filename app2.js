
let mysection = document.querySelectorAll( 'section');


for (const section of mysection) {
    section.style.border = '2px solid gray';
    section.style.marginTop = '10px';
    section.style.borderRadius = '5px';
    section.style.padding = '10px 20px';
    section.style.backgroundColor = 'lightgray';
}

let lastSection = document.getElementById('lastSection');
lastSection.style.backgroundColor = '#fff'


let mylastfirst = document.getElementById('mylastfirst');
mylastfirst.classList.add('lastfirst');

let placesUl = document.getElementById( 'newLiadd');

let li = document.createElement('li');
li.innerText = 'my new brand li';
placesUl.appendChild(li)