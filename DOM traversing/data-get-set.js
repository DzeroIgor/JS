const setData = (element, key, value) => {
    element.dataset[key] = value;
} 

const getData = (element, key) => {
    return element.dataset[key]
}

//HW1: removeData(element, key)
const removeData = (element, key) => {
    delete element.dataset[key];
}



/*   move a child with dataset

let d12= root.children[1]

let d13= root.children[2]

d13.appendChild( d12.removeChild( d12.lastElementChild ) )


*/

