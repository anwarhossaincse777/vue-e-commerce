<script setup>
import { RouterLink, RouterView } from "vue-router";

import Hero from "./Hero.vue";
import WhyShopWithUs from "./WhyShopWithUs.vue";
import NewArrivals from "./NewArrivals.vue";
import AddToCart from "@/components/AddToCart.vue";


import axios from "axios";
import { ref} from "vue";
import {useCart} from "@/stores/Cart";
import {useNotification} from "@/stores/notification";

const props=defineProps({
  products:{
    type: Object,
    required: true
  }
})

const detailsBtn = "text-center font-semibold transition duration-200 rounded py-1 px-3 text-white bg-gray-600 hover:scale-105";


// add to cart


const cart=useCart();

const notify=useNotification();


const price=ref();

function addToCart(product){
  if (product.discount){
    let originalPrice=product.price;
    let discount=product.discount;
    let totalPrice=originalPrice-(originalPrice*discount)/100;
    price.value=totalPrice.toFixed();

  }else {
    price.value=product.price;

  }


  cart.addToCart({
    id:product.id,
    name:product.title,
    price:price.value,
    thumbnail:product.thumbnail,
  })

  notify.Success(`${product.title}` +  " Added Your Cart Successfully");

}













</script>
<template>

  <section class="container mx-auto py-20 px-10">
    <h1 class="text-2xl md:text-5xl font-serif font-semibold pb-2 text-center">
     Products
    </h1>
    <p class="text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>

    <div class="h-1 bg-gray-600 w-52 mx-auto my-3"></div>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-7 mt-5 md:mt-10">
      <div
        class="shadow hover:shadow-lg cursor-pointer"
        v-for="product in products"
        :key="product.id"
      >
        <img :src="product.thumbnail" class="h-56 w-auto mx-auto" alt="" />
        <div class="p-5">
          <span class="text-gray-800 text-lg font-bold">{{
            product.title
          }}</span>

          <div class="flex justify-between items-center my-2">
            <p>$ {{ product.price }}</p>
          <AddToCart :product="product"/>
          </div>

          <div class="flex justify-between items-center mt-4">
            <router-link
              :to="{ name: 'productDetails', params: { id: product.id } }"
              :class="detailsBtn"
              type="submit"
              >View Details
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
