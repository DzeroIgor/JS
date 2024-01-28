const visit = (element) => {
    // HW1: explain "element.childNodes[0].textContent.trim()"
    console.log(
        `visiting ${element.childNodes[0].textContent.trim()}`  // trim() remove white spaces
    )

    // for (let index = 0; index < element.children.length; index++) {
    //     visit(element.children[index]);
    // }

    // HW2: refactor the code using Array.forEach()
    let children = [...element.children]
    children.forEach(element => { // ia elementele din DOM si le pune in array
        visit(element);
    })
}

/////////// using DFS //////////////////////////////////

visit(root)



/*


    call_0: visit(root)

            .forEach()

            .call_intermediate: arrow()

                    call_1: visit(child_0)
                    call_2: visit(child_1)
                    call_3: visit(child_2)

                    

*/
/*


    call_0: visit(root)

            .for()

                    call_1: visit(child_0)
                    call_2: visit(child_1)
                    call_3: visit(child_2)



*/