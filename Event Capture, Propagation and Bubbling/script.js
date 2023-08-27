const divs = document.querySelectorAll('div');

function logText(e) {
    console.log(this.classList.value);
    e.stopPropagation(); // stop bubbling, it will only log the element we clicked.
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false, // it will run the function down rather than going up. (by default it is false)
    once: true // it will run the function only once.
    
    // Now CL:

    // one
    // two
    // three
}));

// Console Log:

// three
// two
// one

// Event Bubbling: means when we click on a element, JS will start bubbling events from the clicked element followed by its parent element all the way to the source.
// Event Capturing: means when we click on a element, JS will start capturing events from the source or top element all the way to the clicked element.  

// To demonstrate {once: true}
const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('Clicked!!!')
}, {once: true});