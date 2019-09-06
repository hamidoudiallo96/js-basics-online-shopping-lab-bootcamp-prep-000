var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

const addToCart = (item) =>{
  let price = Math.floor(Math.random()*100)
  cart.push(Object.assign({},{itemName:item,itemPrice:price}))
  return `${item} has been added to your cart.`
}


const viewCart = ()=>{
  let sentenceStart = "In your cart, you have "
  let sentenceEnd = `and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
  if(cart.length === 0){
    return "Your shopping cart is empty"
  }
  if(cart.length === 1){
    sentenceStart+= `${cart[0].itemName} at $${cart[0].itemPrice}.`
    return sentenceStart
  }else if(cart.length === 2){
    sentenceStart+=`${cart[0].itemName} at $${cart[0].itemPrice}, and $${cart[1].itemName} at $${cart[1].itemPrice}.`
      return sentenceStart
  }else{
    for(let i= 0; i<cart.length-1; i++){
      sentenceStart+= `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    return sentenceStart + sentenceEnd
  }
}


const total = () =>{
  
  let subTotal= cart.reduce((accumulator,currentValue) =>{
    return accumulator+currentValue.itemPrice
  },0)
  return subTotal
}

const removeFromCart =item=>{
  if(item !== cart[item]){
      return "That item is not in your cart."
  }else{
    for(let i = 0; i<cart.length; i++){
      if(item === cart[i].itemName){
        cart.splice(i,1)
       
      }
    }
  }
   return cart
}

const placeOrder = cardNum =>{
  let newTotal = ""
  if(typeof(cardNum) === "undefined"){
    newTotal += "Sorry, we don't have a credit card on file for you."
  }else{
    newTotal+=`Your total cost is $${total()}, which will be charged to the card ${cardNum}.`
    cart = []
  }
  return newTotal;
}

