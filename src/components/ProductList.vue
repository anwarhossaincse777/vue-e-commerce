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
  <section class="bg-gray-50">
    <div class="container mx-auto py-20 px-10">
      <h1
          class="text-2xl md:text-5xl font-serif font-semibold pb-2 text-center"
      >
        Products
      </h1>
      <p class="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div class="h-1 bg-gray-600 w-52 mx-auto my-3"></div>

      <div class="grid grid-cols-1 md:grid-cols-5 gap-7 mt-5 rounded md:mt-10">
        <div
            class="relative bg-white shadow-lg hover:shadow-xl hover:text-red-500 cursor-pointer"
            v-for="product in products"
            :key="product.id"
        >
          <img :src="product.thumbnail" class="h-44 w-auto mx-auto" alt="" />
          <div class="p-5">
            <span class="text-gray-800 text-lg font-bold">{{
                product.title
              }}</span>

            <div class="flex justify-between items-center my-2">
              <p>$ {{ product.price }}</p>

              <div class="flex justify-between">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="rgb(234 179 8)"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="rgb(234 179 8)"
                    class="w-4 h-4"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="rgb(234 179 8)"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="rgb(234 179 8)"
                    class="w-4 h-4"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="rgb(234 179 8)"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="rgb(234 179 8)"
                    class="w-4 h-4"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="rgb(234 179 8)"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="rgb(234 179 8)"
                    class="w-4 h-4"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="rgb(234 179 8)"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="rgb(234 179 8)"
                    class="w-4 h-4"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </div>
            </div>
            <button
                @click.prevent="addToCart(product)"
                class="absolute top-2 right-2 bg-red-600 hover:bg-red-400 p-1 text-white rounded"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>

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
    </div>
  </section>
</template>
