const form = document.querySelector('#form-name');

const input =  form.children[2].firstElementChild
const output =  form.children[3]
let error = document.getElementById('error');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    // prevent form submitting
    console.log("The form has been submitted")
    console.log(e)

    let name = input.value

    if (name.includes(' ')) 
        name = name.replace(/ /g, '');
        
    // AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('get', `https://api.nationalize.io/?name=${name}`)
    xhr.send()

    xhr.onloadend = ()=>{
        let response = xhr.responseText;
        let data = JSON.parse(response);

        if (data.country && data.country.length > 0) {
            let nationality = data.country[0].country_id;

            output.innerHTML = `You are most probably from <strong>${nationality}</strong>`;
            input.value = ``;
        } else {
            output.innerHTML = `<p id="error" style="color: red;">Unable to determine nationality. Please try another name.</p>`;
        }     
    }
        
    if (name === '') {
        output.innerHTML = `<p id="error" style="color: red;">Input your name please!</p>`
    } else {
        error.style.display = 'none';
    }

    // 1. send request(name)          -> API
    // 2. wait for response (JSON)    <- API
    // 3. extract data
    // 4.display info
})




//                             ?name ={putNameHere} -> URL query parameters
// req --> GET https://api.nationalize.io?name={puNameHere}
// res <-- JSON response

// document.body.addEventListener('keydown', (e)=>{    
//     e.preventDefault();    
// })

// window.addEventListener('contextmenu', (e)=> {
//     e.preventDefault(); 
// });


// 1. user -> hits Enter (input) 
// 2. Browser listener to this, capture the event 
// 3. searches for the form the input is in
// 4. emites  a 'submit' event on this form