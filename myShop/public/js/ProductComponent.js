Vue.component('products', {
    props: ['products'],
    template: `<ul class = "products cards">
               <product v-for = "item of products"
               :product = "item">
               </product>
               </ul>`
});
Vue.component('product', {
    props: ['product'],
    template:  `<li class="card">
                <a href="product.html">
                <img class="image-main" :src=product.img_product alt="card">
                 <h3 class="card__heading">{{product.product_name}}</h3>
                 <p class="card__text">Known for her sculptural takes on&nbsp;traditional tailoring, Australian arbiter of&nbsp;cool Kym Ellery teams up&nbsp;with Moda Operandi.</p>
                <p class="card__price">\$\{{product.price}}</p>
                 </a>
                 <button class="card__addtocart" @click="$parent.$emit('add-product',product)">
                  <img class="card__cartwhite" src="img/cartwhite.svg" alt="to cart"> Add to&nbsp;cart
                </button> 
                </li>`
})
