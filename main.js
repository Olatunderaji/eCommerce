// //DOM MANIPULATION
// //GetElementById()
// const title = document.getElementById('main-heading');
// console.log(title);
// //GetElementByClassName()
// const listItem = document.getElementsByClassName('list-items')
// console.log(listItem)
// //GetElementByTagName()
// const listItems = document.getElementsByTagName('li')
// console.log(listItems)
// //querySelector()
// const container = docement.queryselector('div')
// //It's used to select the one or first item that matches the selector is given

//Styling Elements
// //querySelectorAll()

// const title = document.querySelector('#main-heading');
//Inline Styling
// title.style.color = 'red';
// console.log(title);

// const listItems = document.querySelectorAll('.list-items')

// for (i = 0; i < listItems.length; i++) {
//     listItems[i].style.fontSize = '12px'
// }
// console.log(listItems);

//Creating Elements

const ul = document.querySelector('ul');
const li = document.createElement('li');
//To add an Element into our Document is using the Append

ul.append(li)

//Modifying the text


const firstListItem = document.querySelector('.list-items');

li.innerText = 'X-Men';

//Modifying Attributes & Classes
li.setAttribute('id', 'main-heading')
li.removeAttribute(id)


const title = document.querySelector('#main-heading')



