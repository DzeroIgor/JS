// module that has the logic 

// CRUD

// - add
// - show
// - update
// - remove

// DOM helper functions
const newElement = ( type, classList = [], children = [] ) => {
    let element = document.createElement(type);
    classList.forEach( 
        className => element.classList.add( className ) 
    );
    
    children.forEach( child => element.appendChild( child ) );

    return element
}
const newTextNode = (text) => {
    return document.createTextNode(text);
}


// CRUD functions

    // HW1: 
    //+  * in the last td add a button to the input
    //+ * with the text - save
    //+ * add event listeners 
    //+ * with will show an alert when the button is clicked
    //+ * collect 3 values each from an input .value
    //+ * show them in console

const addUser = (data, selector) => {
    let root = document.querySelector(selector);
    root.appendChild(
        newElement('tr', [], 
            Object.keys(data[0]).map(key => { 
                let input = newElement('input');
                input.setAttribute('placeholder', key);
                
                // add the button to the last td element
                if (key === Object.keys(data[0])[Object.keys(data[0]).length - 1]) {
                    let button = newElement('button', [], [newTextNode('Save')]);
                        button.addEventListener('click', () => saveUser('section'));

                    return newElement('td', [], [input, button]);
                } else {
                    return newElement('td', [], [input]);
                }
            }) 
        )
    );
}

const saveUser = ( selector ) => {

    let inputs = document.querySelectorAll('input[placeholder]');
    let userData = {}; 

    inputs.forEach(input => {        
        userData[input.getAttribute('placeholder')] = input.value;
    });
    data.push(userData);

    let root = document.querySelector( selector )
    root.innerHTML = ``
    showAsTable( data, selector ) 

    console.log('User data:', userData);
    alert('SAVED!');
}



const showAsTable = (data, selector) => {    
    let root = document.querySelector( selector )

    root.appendChild(
 
        newElement('table', ["data-table"], 
            data.map( 
                user => newElement('tr', [], 
                    Object.values(user).map(value => newElement('td' ,[], [newTextNode(value)] ) )
                )
            )    
        )
    )
}

showAsTable( data, 'section' )        