const find = (element, what) => {

    let content = element.childNodes[0].textContent.trim()
    console.log(
        `visiting '${content}'`
    )

    if (what == content ) {
        return element;
    }
    // for (let index = 0; index < element.children.length; index++ ) {
    //     let found = find( element.children[index], what);
    //     if (found != undefined) {
    //         return found;
    //     }
    // } 

    // HW3: refactor the code using Array.forEach()

    // let found = null;
    // [...element.children].forEach(element => {
    //     let foundLocal = find( element, what );
    //     found = foundLocal ?? found;
    // });
    // return found;
    //        V
    //        V
    let found = null;
    [...element.children].forEach(element => {        
        found = find( element, what ) ?? found;
    });
    return found;


    // [...element.children].forEach(child => {
    //     let found = find(child, what);
    //     if (found !== undefined) {
    //         return found;
    //     }
    // });
     
}


////////////// using DFS ///////////////////////////
let found = find(root, "1.2.1")
console.log(`FOUND it in element:`, found)