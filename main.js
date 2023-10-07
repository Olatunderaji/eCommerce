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
// const container = document.queryselector('div')
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

// const ul = document.querySelector('ul');
// const li = document.createElement('li');
// //To add an Element into our Document is using the Append

// ul.append(li)

// //Modifying the text


// const firstListItem = document.querySelector('.list-items');

// li.innerText = 'X-Men';

// //Modifying Attributes & Classes
// li.setAttribute('id', 'main-heading')
// li.removeAttribute(id)


// const title = document.querySelector('#main-heading')

// Using the properties of Classlist and also add methods to it
//Grab the styling of the other List-Items using the .add
// li.classList.add('list-items') //or to remove using the .remove method

// // to find out if that element contains the properties of specific class
// console.log(li.classList.contains("list-items"));

// // Remove Elements
// li.remove();


// How to navigate the Dom
//Traverse the DOM
//Parent Node Traversal
// let ul = document.querySelector('ul')
// console.log (ul.parentNode.parentNode);
// console.log (ul.parentElement);

// const html = document.documentElement;
// console.log(html)


//Child Node Traversal
// let ul = document.querySelector('ul')
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[9].style.backgroundColor = 'yellow'

// console.log(ul.children)
// console.log(ul.firstElementChild)
// console.log(ul.lastElementChild)

//Sibling Node Traversal
// let ul = document.querySelector('ul');
// const div = document.querySelector('div')

// console.log(div.childNodes)
// console.log(ul);

// console.log(ul.previousSibling);
// console.log(ul.nextSibling);
let getText = document.getElementsByClassName ("text")
console.log(getText)
getText.innerText = "Allahu Akbar"





