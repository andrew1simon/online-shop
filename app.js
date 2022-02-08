let cart = []

fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(res=> objectToArrayConvert(res) )

function objectToArrayConvert(object) {
   const array = Object.entries(object)
    console.log(array)
    arrayToUi (array)

}
function arrayToUi (array) {
array.forEach(product => {
    console.log(product[1].title)
    title = product[1].title
    price = product[1].price
    img = product[1].image
    description = product[1].description
    if (title.length > 60) {
       
        titleChecked = title.split(" ").splice(0,7).join(" ")
        titleFinal = titleChecked + "...."
    }if (title.length <= 60) {
        titleFinal = title
    }
    
    const cont = document.querySelector(".cont-pro")
    cont.insertAdjacentHTML("afterbegin", `
    <div class="col-sm-4 col-eq single-pro-cont">
    <img class="pro-img" src="${img}"><p class="pro-title">${titleFinal}</p><p class="pro-price">Price:${price}</p>
    <div class="btn-split">
    <div class="info-button buy-btn-div">
    <button value="Buy Now" class="buy-now-btn info-btn" onclick="moreInfo(this)" data-productName="${title}" data-price="${price}" data-img="${img}" data-dis="${description}">More info</button>
    </div>
    <div class="info-button buy-btn-div">
    <button value="Buy Now" class="buy-now-btn" onclick="buyProduct(this)" data-productName="${title}" data-price="${price}" data-img="${img}">Buy Now</button>
</div></div>`
    )
    
});
}
function buyProduct (product) {
buyProductImg = product.dataset.img 
buyProductTitle = product.dataset.productname 
buyProductPrice = product.dataset.price 
//buyProductdis = product.dataset. 
cart.push({"title":buyProductTitle , "img":buyProductImg , "price":buyProductPrice})
console.log(cart)
document.querySelector(".single-cart-pro").innerHTML=""
cart.forEach(product=>{
    console.log
    const cartCont = document.querySelector(".single-cart-pro")
    cartCont.insertAdjacentHTML("afterbegin", `
    <div class="colm-cart"><img src="${product.img}" class="img-cart"></div>
    <div class="colm-cart"><p class="title-cart">${product.title}</p>
     <p class="price-cart">price: ${product.price}</p></div> `)
     openCart()
})
}

function moreInfo (product) {
buyProductImg = product.dataset.img 
buyProductTitle = product.dataset.productname
buyProductPrice = product.dataset.price 
description = product.dataset.dis  
const contForMoreInfo = document.querySelector(".for-pop")
contForMoreInfo.insertAdjacentHTML("afterbegin",`
<div class="more-info-cont">
<div class="menu-cont">
   <center> <button class="close-button" id="close-btn" onclick="closePop(this)">x</button></center>
   <div class="btn-split">
   <div class="colm"><img class="pro-img-pop" src="${buyProductImg}"></div> <div class="colm"><p class="pro-title-pop">${buyProductTitle}</p><p class="description-pop">${description}</p><p class="pro-price-pop">Price:${buyProductPrice}</p></div>
  </div>
</div>


`)

}

function closePop () {
    document.querySelector(".for-pop").innerHTML=""
}
function closeCart () {
    document.getElementById("shopping-cart").style.width = "0";
   
}

function openCart() {
    document.getElementById("shopping-cart").style.width = "350px";
    
  }