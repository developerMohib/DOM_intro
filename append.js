
// how to add a section in HTML document

let mainContainer = document.getElementById('mainContainer') ;



let newSection = document.createElement('section');

let newUl = document.createElement('ul');

let newLi = document.createElement('li');
newLi.innerText = 'My new breand is Upcoming ';

let newLi2 = document.createElement('li');
newLi2.innerText = 'My new breand is Upcoming 2';

let newLi3 = document.createElement('li');
newLi3.innerText = 'My new breand is Upcoming 3';

newUl.appendChild(newLi);
newUl.appendChild(newLi2);
newUl.appendChild(newLi3);
newSection.appendChild(newUl);
mainContainer.appendChild(newSection);
