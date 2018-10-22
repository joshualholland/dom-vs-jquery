// DOM

let sumbit = document.getElementById('submit');


sumbit.addEventListener('click', function () {
    let text = document.getElementById('box').value;
    alert(text);
});

let div = document.getElementById('div');
div.addEventListener('mouseover', function () {
    div.style.backgroundColor = 'red';
});
div.addEventListener('mouseout', function () {
    div.style.backgroundColor = ''
});

let btn = document.createElement('button');
let btnText = document.createTextNode('click me!');
btn.append(btnText);
document.body.appendChild(btn);
btn.addEventListener('click', function () {
    alert('clicked mannnn')
});

let para = document.getElementById('para');
para.addEventListener('click', function () {
    para.style.color = 'rgb(' + Math.floor((Math.random() * 256)) + ',' + Math.floor((Math.random() * 256)) + ',' + Math.floor((Math.random() * 256)) + ')'
});

let btnName = document.getElementById('myName');
let divName = document.getElementById('name');
btnName.addEventListener('click', function () {
    let span = document.createElement('span');
    let spanText = document.createTextNode('Josh');
    span.append(spanText);
    divName.appendChild(span);
});

let ul = document.getElementById('ul1');
let friends = ['Kelsy', 'Joel', 'Kenny', 'Daniel', 'Jenna', 'Nitish', 'James', 'Maria', 'Jeff', 'Jordan'];
let btnFriends = document.getElementById('peeps');

btnFriends.addEventListener('click', function () {
    for (i = 0; i < friends.length; i++) {
        let li = document.createElement('li');
        let liText = document.createTextNode(friends[i])
        li.append(liText);
        ul.appendChild(li);
    }

});