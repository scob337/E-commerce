
// Nav Styles 
let barBtn = document.querySelector('#bar'),
NavLinks = document.querySelector('nav.links-nav'),
DropLinkBtn= document.querySelector('nav.links-nav .container li.drop-links'),
DropLinkBtnI= document.querySelector('nav.links-nav .container li.drop-links i'),
DropList= document.querySelector('ul.drop-list');
barBtn.onclick = ()=>{
    NavLinks.classList.toggle('nav-flex');
}
    DropLinkBtn.onclick = ()=>{

        DropList.classList.toggle('active');

    } 
// Nav Styles 

// Cart Shop 

let cartShop = document.querySelector('.cart-list'),
ShopCar = document.querySelectorAll('.fa-basket-shopping'),
CloseList = document.querySelector('.cart-list .close');

ShopCar.forEach(el =>{
    el.onclick= ()=>{
        cartShop.classList.add('active')
    }
})
CloseList.onclick = ()=>{
    cartShop.classList.remove('active')

}

// Cart Shop 