Vue.component('cart', {
    props: ['cartItems', 'visibility'],
    template: ` <div class="cart__dropdown" v-show="visibility">
                <h3>Cart</h3>
                <p class="cart__dropdown_empty" v-if="!cartItems.length">Cart is empty</p>
                <div class="cart__dropdown_container">
                <div class="cart__dropdown_item" v-for="item of cartItems"> </div>
                <cart-item class="cart__dropdown_item" v-for="item of cartItems" :cart-item = "item"> </cart-item>
                </div>
                </div>`
});
Vue.component('cart-item', {
    props: ['cartItem'],
    template:  `<div>
                <div class="cart__dropdown_product-container">
                <img :src=cartItem.img_product alt="Some img">
                <div class="cart__dropdown_product-desc">
                <div class="product-title">{{ cartItem.name }}</div>
                <div class="product-quantity">Quantity: {{ cartItem.quantity }}</div>
                <div class="product-single-price">$ {{ cartItem.price }}</div>
                 </div>
                </div>
                 <div class="cart__dropdown_right-block">
                 <div class="product-price">Total:\$\{{cartItem.quantity*cartItem.price}}</div>
                 <button class="cart__dropdown_del-btn" @click="$root.remove(cartItem)">&times;</button>
                </div>
                </div>
                `
})





