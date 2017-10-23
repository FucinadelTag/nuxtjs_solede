<template>
    <div id="example-1">
            <ul class="products">
                <li class="row" v-for="(product, index) in products">
                    <button type="button" v-on:click="greet (product)">{{product.nome}}</button>
                </li>
            </ul>
        <p>The button above has been clicked times.</p>
    </div>
</template>



<script>
export default {
    name     : 'Bottone',
    computed : {
        user() {
            return this.$store.state.cart.user;
        },
        products() {
            return this.$store.state.products.list;
        }
    },
    data() {
        return {
            msg : 'Hello world!'
        };
    },
    methods : {
        greet : function(product) {
            this.$store.commit('cart/add', product);
        }
    }
};
</script>
