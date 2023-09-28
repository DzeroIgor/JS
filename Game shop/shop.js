
// let product = {
//     name: "Pacman III Ultra",
//     rate: 4.5,
//     price: 50.00
// }

// Array of products

let products = [
    {
        poster: "1.jpg",
        name: "Mortal Kombat X",
        rate: 3.5,
        price: {
            amount: 5.00,
            unit: "$"
        },
        quantity: 0,
        totalProductPrice: 0,
    },  
    {
        poster: "2.jpg",
        name: "The Witcher III: Wild Hunt",
        rate: 5.0,
        price: {
            amount: 35.00,
            unit: "$"
        },
        quantity: 0,
        totalProductPrice: 0,
    } , 
    {
        poster: "3.jpg",
        name: "Halo 5: Guardians",
        rate: 3.5,
        price: {
            amount: 5.00,
            unit: "$"
        },
        quantity: 0,
        totalProductPrice: 0,
    } ,
    {
        poster: "4.jpg",
        name: "Call of Duty: Modern Warfare II",
        rate: 4.5,
        price: {
            amount: 45.00,
            unit: "$"
        },
        quantity: 0,
        totalProductPrice: 0,
    } ,
    {
        poster: "5.jpg",
        name: "Diablo IV Cross Gen Bundle",
        rate: 4.5,
        price: {
            amount: 30.00,
            unit: "$"
        },
        quantity: 0,
        totalProductPrice: 0,
    } ,
    {
        poster: "6.jpg",
        name: "Marvel's Midnight Suns",
        rate: 5,
        price: {
            amount: 90.00,
            unit: "$"
        },
        quantity: 0,
        totalProductPrice: 0,
    } ,
    {
        poster: "7.jpg",
        name: "Assassin's Creed Valhalla - Xbox One",
        rate: 3.5,
        price: {
            amount: 15.00,
            unit: "$"
        },
        quantity: 0,
        totalProductPrice: 0,
    } ,
    {
        poster: "8.jpg",
        name: "Skull Island: Rise of Kong",
        rate: 4,
        price: {
            amount: 40.00,
            unit: "$"
        },
        quantity: 0,
        totalProductPrice: 0,
    } ,
]


// let cart = [];
// let totalItemPrice = 0;
// let totalQuantity = 0;
// let grandTotal = 0;

// function addToCart(index) {
//     const product = products[index];
//     const cartItem = document.createElement('li');

//     product.quantity = +prompt("How much?");

//     totalItemPrice = product.quantity * product.price.amount;
//     totalQuantity += product.quantity;
    
//     const totalProductPrice = product.quantity * product.price.amount;
    
//     grandTotal += totalProductPrice;

//     cartItem.innerHTML = `
//         <a class="dropdown-item" href="">
//             <div class="product d-flex justify-content-between align-items-center">
//                 <img src="${product.poster}" class="" style="width: 2rem">
//                 <h6 class="card-title">${product.name}</h6>
//                 <h6>${product.price.unit}${product.price.amount.toFixed(2)}</h6>
//                 <h6>${product.quantity}</h6>
//                 <h6>Total: ${product.price.unit}${totalProductPrice.toFixed(2)}</h6>
//             </div>
//         </a>
//     `;

//     totalQuantityAll.innerHTML = `${totalQuantity}`;
//     grandTotalElement.innerHTML = `Grand Total: ${product.price.unit}${grandTotal.toFixed(2)}`;
//     cartItems.appendChild(cartItem);
// }

let cart = []
let totalItemPrice = 0
let totalQuantity = 0

function addToCart( i ) {  
    addItem(i)
    cart.push(products[i])
}
function addItem(index) {   
    const product = products[index]
    const cartItem = document.createElement('li')

    product.quantity = +prompt("How much?")
    
    totalItemPrice = product.quantity * product.price.amount
    totalQuantity += product.quantity

    cartItem.innerHTML = `
        <a class="dropdown-item" href="">
            <div class="product d-flex justify-content-between align-items-center">
                <img src="${product.poster}" class="" style="width: 2rem">
                <h6 class="card-title">${product.name}</h6>
                <h6>${product.price.unit}${product.price.amount.toFixed(2)}</h6>                
                <h6>${product.quantity}</h6>                
                <h6>Total: ${product.price.unit}${totalItemPrice.toFixed(2)}</h6>                
            </div>
        </a>
    `
    totalQuantityAll.innerHTML = `${totalQuantity}`

    cartItems.appendChild(cartItem)    
}

function showProducts(list) {
    catalog.innerHTML = ``
    for (let i = 0; i < list.length; i++) {
        catalog.innerHTML += 
            `
                <div class="card d-flex mb-5 position-relative gameCard" style="width: 15rem; height: 30rem" id="item-${i}">
                    <div class="m-auto" style="height: 19rem"><img src="${list[i].poster}" class="card-img-top m-auto mt-2" style="width: 14rem"></div>
                    <div class="card-body">
                        <h5 class="card-title" style="height: 4rem; ">${list[i].name}</h5>
                        <p class="card-text" id="rate-${i}"></p> 
                        <div class="d-flex justify-content-between align-items-end  mb-3" style="position: absolute; bottom: 0; left: 0; right: 0;">
                            <h4 class="d-inline ms-3">${list[i].price.unit}${list[i].price.amount.toFixed(2)}</h4>
                            <button class="btn btn-success me-3" onclick="addToCart(${i})">ADD</button>
                        </div>
                    </div>
                </div>
            `        
        generateGrade(list[i].rate, i)
    }
}

function generateGrade(productRate, index) {
    let gradeParagraph = document.getElementById(`rate-${index}`)
    gradeParagraph.innerHTML = ''
    
    for (let i = 0; i < 5; i++) {
        if (i + 0.5 < productRate) {
            gradeParagraph.innerHTML += `<i class="bi bi-star-fill"></i>`
        } else if (i < productRate) {
            gradeParagraph.innerHTML += `<i class="bi bi-star-half"></i>`
        } else {
            gradeParagraph.innerHTML += `<i class="bi bi-star"></i>`
        }
    }
    // gradeParagraph.innerHTML += ` ${productRate}`
    productRate = Math.round(productRate * 2) / 2
}

showProducts(products);



