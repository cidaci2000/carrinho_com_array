const product = [
    {
        id: 0,
        image: 'image/images1.jpeg',
        title: 'Z Flip Foldable Mobile',
        price: 12,
    },
    {
        id: 1,
        image: 'image/images2.jpeg',
        title: 'Air Pods Pro',
        price: 6,
    },
    {
        id: 2,
        image: 'image/images3.jpeg',
        title: '250D DSLR Camera',
        price: 23,
    },
    {
        id: 3,
        image: 'image/images.jpeg',
        title: 'Head Phones',
        price: 10,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>R${title}</p>
        <h2>R$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>COMPRAR</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Seu carrinho está vazio";
        document.getElementById("total").innerHTML = "R$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "R$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>R$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}