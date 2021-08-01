/*Variable que almacenara en forma objetos las propiedades de las card en arreglos*/
const items = [
    { // => 0
        "id": "PROD0001",
        "title": "Women's costume",
        "price": 1140,
        "image": "card-1.png",
        "description": "Fashion is something we deal"
    },
    { // => 1
        "id": "PROD0002",
        "title": "Men's black hat Gucci",
        "price": 540,
        "image": "card-2.png",
        "description": "The fedora hat is reimagined"
    },
    { // => 2
        "id": "PROD0003",
        "title": "Dress Karl",
        "price": 640,
        "image": "card-3.png",
        "description": "Another masterpiece"
    },
    { // => 3
        "id": "PROD0004",
        "title": "Dress Karl",
        "price": 225,
        "image": "card-4.png",
        "description": "Another masterpiece"
    },
    { // => 4
        "id": "PROD0005",
        "title": "Dress Karl",
        "price": 215,
        "image": "card-5.png",
        "description": "Another masterpiece"
    },
    { // => 2
        "id": "PROD0006",
        "title": "Dress Karl",
        "price": 180,
        "image": "card-6.png",
        "description": "Another masterpiece"
    }
];

const cartElements = [];


const addToCart = (event, id) => {
    event.preventDefault();
    
    updateCartItems(id);
    updateCartQuantity();
    updateCartSummary();
};

/**
 * Updates items at the card, deciding to add a new item
 * or modify an existing one
 * 
 * @param {string} id
 */
const updateCartItems = (id) => {
    const alreadyExist = cartElements.find((item) => item.id === id);

    // Ternary condition
    alreadyExist ? updateCartItem(id, 'addition') : addNewItemToCart(id);
};

/**
 * Updating the quantity of an item in my cart
 * 
 * @param {string} id 
 * @param {string} type 
 */
const updateCartItem = (id, type) => {
    cartElements.map((item) => {
        if (item.id === id) {
            type === 'addition' ? item.quantity += 1 : item.quantity -= 1;
        }
        return item;
    });

    /*console.log(cartElements);*/
};

/**
 * Add a new item in my cart
 * 
 * @param {string} id 
 */
const addNewItemToCart = (id) => {
    // Adding to cart
    cartElements.push({
        id: id,
        quantity: 1
    });

    /*console.log(cartElements);*/
};

/**
 * Updates the number of the items within my cart
 * by reducing the array and making a count of items.
 */
const updateCartQuantity = () => {
    const count = cartElements.reduce((acumulador, valorActual) => acumulador + valorActual.quantity, 0);

    document.getElementById('cart-items').innerHTML = count;

    
};

/**
 * Updating summary of the cart items
 */
 const updateCartSummary = () => {
    let cartSummaryHTML = '';

    cartElements.forEach((product) => {
        const productData = items.find((item) => item.id === product.id);
        const productInformation = { ...product, ...productData };

        cartSummaryHTML += 
        `
        <div class="card-summary" >
            <div class="card-body">
                <h5 class="card-title">${productInformation.title}</h5>
                <div class="">
                <p class="sub-card-text">$${productInformation.price}</p>
                <p class="sub-card-text">Cantidad: ${productInformation.quantity}</p>
             </div>
            </div>
        </div> 
        `;
    });

    document.getElementById('cart-summary').innerHTML = cartSummaryHTML;

    
}


/*variable que almacenara la cards y su informacion */
let BuildCards = '';
/*For each que recorre los objetos y sus propiedades, para despues imprimirlas en tarejatas*/
for(let item of items) {
    BuildCards += 
    `   
        <div class="card" >
            <img src="RECURSOS/${item.image}" class="card-img-top" alt="${item.title}">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.description}</p>
              <div class="sub-content">
              <p class="sub-card-text">$${item.price}</p>
              <a href="#" class="btn btn-primary btn-shop" onClick="addToCart(event, '${item.id}')">Shop now</a>
              </div>
            </div>
        </div>
    `;
};

/*Acceso al DOM para inseart las tarjetas una vez recorridas */
document.getElementById('cards-js').innerHTML = BuildCards;





