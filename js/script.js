console.log('Wired up')

function changeImg(element) {
    console.log('activated mouse event')
    //cannot get element by img(src) - img returns the img path
    //console.log(element.src);
    if(element.alt =="Breezee"){
        element.src = "./images/yankeeBoy.png"
        element.alt = "yankee boy"
    }
    else{
        element.src = "./images/breezee.png"
        element.alt = "Breeze"
    }
}

// function changeBack(element) {
//     console.log('new event')
// }
let count = 0;
function addToCart(element) {
    console.log('button clicked')
    // let count = 0;
    if (count === 0) {
        count++
        // console.log('if triggered', count)
    } else {
        count++
        // console.log('else triggered', count)
    }
    document.getElementById('cart').innerText = count
}

// function salePrices(element) {
//     console.log('button click');
//     //make div disappear
//     //document.getElementById('sale').style.display = "none";

//     //reduce the prices
//     var price = document.getElementsByClassName("price").value;
//     var salePrice = price * .20;
//     console.log(salePrice);
//     document.getElementById("sale").value = salePrice;
// }

function salePrices(element){
    console.log('button click');
    //make div disappear
    document.getElementById('sale').style.display = "none";

    //reduce the prices
    var price = document.getElementsByClassName('price');
    console.log(price);
    console.log(price[0]);

    for(let i = 0; i < price.length; i++){
        
    }

}