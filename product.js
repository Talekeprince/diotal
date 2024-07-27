alert(404)
//=============================================================== CART PRODUCT 
var cartAmount = document.getElementById('cart-amount');
var categories  = document.getElementById('categories');
let cart_items = document.getElementById('item');
let cart_itemsBox = document.getElementById('cart-items');



let itemListData = [{
   id: 'dbhbghfdbhf',
   price: '45000',
   initPrice: '54000',
   name: 'Electronic Wufer Set',
   img: 'image/wufer.jpg'
},
{
   id: 'gkjnbkkjbfk',
   price: '4999',
   initPrice: '7000',
   name: 'White Lady hills',
   img: 'image/whitehill.jpg'
},
{
   id: 'fdhtjhytjtrj',
   price: '1499',
   initPrice: '2200',
   name: 'Male Pant',
   img: 'image/pant.webp'
},
{
   id: 'rgwgwrgrehrh',
   price: '13999',
   initPrice: '17000',
   name: 'Electronic Speaker',
   img: 'image/speaker.jpg'
},
{
   id: 'wegwrgreth',
   price: '140000',
   initPrice: '175000',
   name: 'Del Laptop',
   img: 'image/laptop.jpg'
},
{
   id: 'dgdfhyjtyjjy',
   price: '10999',
   initPrice: '14900',
   name: 'Sport Air Jodan',
   img: 'image/shoe.jpg'
},
{
   id: 'retgbdfdds',
   price: '150000',
   initPrice: '184000',
   name: 'Electronic Mixer',
   img: './image/mixer.jpg'
},
{
   id: 'fdsghudfhgudh',
   price: '80000',
   initPrice: '130000',
   name: 'Smart TV 52 inch',
   img: 'image/tv.webp'
}
,
{
   id: 'dvfdhgfzsdg',
   price: '1900',
   initPrice: '3000',
   name: 'Chiken Burger',
   img: 'image/chikenburger.jpg'
}
,
{
   id: 'rereshtrser',
   price: '11500',
   initPrice: '17000',
   name: 'Air Jordan',
   img: 'image/shoeweared.jpg'
}
,
{
   id: 'sdfgdfhsfdh',
   price: '6000',
   initPrice: '9000',
   name: 'Female hill',
   img: 'image/hills.webp'
}
,
{
   id: 'sdfgdfshhhhh',
   price: '16000',
   initPrice: '19000',
   name: 'Men Suit',
   img: 'image/suit.jpg'
}
,
{
   id: 'gdesgheharw',
   price: '780000',
   initPrice: '910000',
   name: 'Iphone 15 Pro Max',
   img: 'image/phone.webp'
}
,
{
   id: 'rhgrthaew4t',
   price: '250000',
   initPrice: '290000',
   name: 'Smart TV Set 55 inch',
   img: 'image/tvandstand.webp'
}
,
{
   id: 'dfjhgdfjdjyd',
   price: '144000',
   initPrice: '165000',
   name: 'Pressing Machine',
   img: 'image/washingmachine.webp'
}
,
{
   id: 'fgsshjrtshjsr',
   price: '11000',
   initPrice: '16000',
   name: 'Electric Iron',
   img: 'image/electriciron.webp'
}]

let generateProduct = () => {
   return (categories.innerHTML = itemListData.map((x) => {
      let { id, price, initPrice, name, img} = x;
      return `
      <div id="product-id
      -${id}" class="electronic-wufer">
         <img src= ${img} alt="wufer set">
         <div id="product-type">
            <div id="product-detail">
               <p id="prodcut-name">${name}</p>
               <span id="price-init">${initPrice}<span id="curency">FCFA</span></span>
               <span id="price-current">${price}<span id="curency">FCFA</span></span>
            </div>
            <button onclick="increment(${id})" class="addcart-btn">ADD TO CART</button>
         </div>
      </div>
    ` 
      
   })) 
}
generateProduct() 

// let cartBasketItem = []

let increment = (id) => {
   console.log(id)
}






cart_itemsBox.innerHTML = ''
cart_itemsBox.style = `
 text-align: center;
    position: fixed;
    right: 0px;
    width: 500px;
    background-color: #1f242d;
    top: 70px;
    padding: 0px;
    height: 0vh;
    overflow-y: scroll;
`

document.getElementById('cart').addEventListener('click', () => {
   if(cart_itemsBox.innerHTML == ''){
      cart_itemsBox.style = `
 text-align: center;
    position: fixed;
    right: 0px;
    width: 500px;
    background-color: #1f242d;
    top: 70px;
    padding: 20px;
    height: 30vh;
    overflow-y: scroll;
`
      cart_itemsBox.innerHTML = 
      `           <div id="item">
                     <p>You cart is empty</p>
                    </div>
                    <hr>
                    <div id="purchase-amount">
                        <h3>Total</h3>
                        <span>
                            <span>FCFA</span>
                            <span>0</span>
                        </span>
                    </div>
                    <br>
         <button class="purchase-button">Purchase Order</button>
      `
   //  cart_itemsBox.style.display ='contents'
   }else{
      cart_itemsBox.innerHTML = ''
      cart_itemsBox.style = `
 text-align: center;
    position: fixed;
    right: 0px;
    width: 500px;
    background-color: #1f242d;
    top: 70px;
    padding: 0px;
    height: 0vh;
    overflow-y: scroll;
`
   }
})



