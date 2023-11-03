<script setup>
// add to cart

import {useCart} from "@/stores/Cart";
import {useNotification} from "@/stores/notification";
import {ref} from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})


const cart = useCart();

const notify = useNotification();


const price = ref();

function addToCart(product) {
  if (product.discount) {
    let originalPrice = product.price;
    let discount = product.discount;
    let totalPrice = originalPrice - (originalPrice * discount) / 100;
    price.value = totalPrice.toFixed();

  } else {
    price.value = product.price;

  }


  cart.addToCart({
    id: product.id,
    name: product.title,
    price: price.value,
    thumbnail: product.thumbnail,
  })

  notify.Success(`${product.title}` + " Added Your Cart Successfully");

}
</script>

<template>
  <button
      @click.prevent="addToCart(product)"
      class="bg-gray-600 hover:bg-gray-400 py-2 px-4 rounded text-white font-semibold flex justify-between items-center"
  >
    Add to
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5 ml-2"
    >
      <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      />
    </svg>
  </button>
</template>

<style scoped>

</style>