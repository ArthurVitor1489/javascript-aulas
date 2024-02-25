const shoppingCart = [];

function addItemtoCart(item){
    shoppingCart.push(item)
}

function removeItemFromCart(item){
    const index = shoppingCart.indexOf(item);
    if (index !== -1){
        shoppingCart.splice(index,1)
    }
}


function viewCart(){
    if(shoppingCart.length == 0){
        console.log(" You shopping cart is empty")
    }else{
        console.log("Itens in yout shopping cart: ")
        for(let i = 0; i < shoppingCart.length;i++){
            console.log(`${shoppingCart[i]}`)
        }
    }
}

function clearCart(){
    shoppingCart.length= 0
    console.log("Your shopping cart has been cleared")
}


addItemtoCart("Tenis")
addItemtoCart("bola")
addItemtoCart("short")


viewCart()

removeItemFromCart("bola")

viewCart()

clearCart()

viewCart()