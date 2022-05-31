const app = new Vue({
    el: '#app',
    data: {
        products:[],
        filtered:[],
        cartItems:[],
        userSearch: '',
        show:false,
        counter:0,
        error:false
    },
    methods:{
        filter(value){
            const regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(product =>
                 regexp.test(product.product_name));
        },
        getJson(url){
            return fetch(url)
             .then(result => result.json())
             .catch(error => {
                 console.log(error);
                 this.error = true;
             })
        },



        postJson(url, data){
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.text = error;
                })
        },
        putJson(url, data){
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.text = error;
                })
        },
            addProduct(item){
                let find = this.cartItems.find(el => el.id_product === item.id_product);
                this.counter++;
                if(find){
                    this.putJson(`/api/cart/${find.id_product}`, {quantity: 1})
                        .then(data => {
                            if(data.result === 1){
                                find.quantity++
                            }
                        })
                } else {
                    const prod = Object.assign({quantity: 1}, item);
                    this.postJson(`/api/cart`, prod)
                        .then(data => {
                            if(data.result === 1){
                                this.cartItems.push(prod)
                            }
                        })
                }   
            },
            remove(item){
                this.counter--;
                this.getJson(`${API}/addToBasket.json`)
                    .then(data => {
                        if (data.result === 1) {
                            if(item.quantity>1){
                                item.quantity--;
                            } else {
                                this.cartItems.splice(this.cartItems.indexOf(item), 1);
                            }
                        }
                    })
            }
        },
        
    mounted(){
        this.getJson('/api/products')
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
        
            this.getJson('/api/cart')
            .then(data => {
                for(let el of data){
                    this.cartItems.push(el);
                }
            });
        
    }
})