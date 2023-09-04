const element = document.getElementById('my-element');



let clicks = 0;


//Adding a click event listener to the element

element.addEventListener('click', function() {
clicks++;

//Update the element's text content with the number of clicks
element.textContent = `Clicked ${clicks} times`;

});
