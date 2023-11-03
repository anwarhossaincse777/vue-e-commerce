<script setup>
import {onMounted, ref} from "vue";
import {RouterLink} from "vue-router";

const mobileMenuOpen = ref(false);
const navLink = "ease-in duration-200 text-[17px] hover:text-gray-400";


import {useCart} from "@/stores/Cart.js"

import {storeToRefs} from "pinia";
import ShoppingCart from "@/components/ShoppingCart.vue";

const cart = useCart();
const {cartItems, cartItemsCount, totalPrice} = storeToRefs(cart)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};


import router from "@/router";

import {useAuth} from "@/stores/auth.js";

import {ElMessage, ElNotification} from "element-plus";
import {useProduct} from "../stores/product";
import {useCategory} from "../stores/category";


const auth = useAuth();


function logOut() {

  // const empty=cart.deleteLogout();
  const success = auth.logout();
  if (success) {
    router.push({name: 'home'})
    ElNotification({
      title: 'Success',
      message: 'You have Successfully Logged Out',
      type: 'success',
      position: 'top-right',
      duration: 2000,
    })
  } else {
    ElMessage({
      type: 'error',
      message: "Something went wrong",
    })
  }
}


const inputName = ref('');

const pro = useProduct();
const {products} = storeToRefs(pro);


function productFind() {
  pro.getData(inputName.value);
}


const cat = useCategory();
const {categories} = storeToRefs(cat);

onMounted(() => {
  cat.getData();
});


const showCart = ref(false);

function toggleCart() {
  showCart.value = !showCart.value
}


function CategoryProductFind(event) {
  pro.getCatData(event.target.value);
}


</script>
<template>
  <header class="bg-white py-4 sticky top-0 shadow-sm z-10">
    <div class="container mx-auto px-4 lg:px-10">
      <nav
          class="relative flex flex-col md:flex-row items-center justify-between"
      >
        <a href="/" class="flex items-center md:mr-0 mr-auto">
          <img src="../assets/logo.png" alt="Logo" class="mr-2 h-12"/>
          <span class="font-bold text-xl">E-Shop</span>
        </a>
        <button
            @click="toggleMobileMenu"
            class="absolute top-0 right-0 ml-auto text-gray-500 focus:outline-none md:hidden"
        >
          <svg
              v-show="!mobileMenuOpen"
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
          >
            <path d="M3 12h18M3 6h18M3 18h18"></path>
          </svg>

          <svg
              v-show="mobileMenuOpen"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div
            :class="mobileMenuOpen ? 'flex' : 'hidden'"
            class="flex-col md:flex md:flex-row md:space-x-3 lg:space-x-6 lg:text-xl font-bold md:items-center"
        >
          <!-- <RouterLink to="/" :class="navLink">Home</RouterLink>
          <RouterLink to="/store" :class="navLink">Store</RouterLink>
          <RouterLink to="/about" :class="navLink">About Us</RouterLink>
          <RouterLink to="/contact" :class="navLink">Contact Us</RouterLink> -->
          <div class="">

            <form class="flex flex-col md:flex-row text-sm text-gray-400 font-normal">
              <select @change="CategoryProductFind($event)" id="pricingType"
                      class="w-full border border-gray-300 border-r-0 focus:outline-none pl-3 pr-5 py-2 tracking-wider cursor-pointer">
                <option value="" selected disabled>All category</option>
                <option v-for="category in categories" :key="category.id" :value="category">{{ category }}</option>

              </select>


              <div class="flex border border-gray-300">
                <input v-on:input="productFind" v-model="inputName"
                       type="text"
                       placeholder="Search for the tool you like"
                       class="w-full md:w-80 px-3 focus:outline-none italic"
                />
                <button type="submit" class="px-3 py-2">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div
            :class="mobileMenuOpen ? 'block' : 'hidden'"
            class="md:flex md:items-center md:mt-0 mt-3"
        >
          <div class="flex space-x-1 lg:space-x-4">
            <div class="flex items-center space-x-3">
              <span>{{ $filters.currencySymbol(totalPrice) }}</span>
              <div class="relative" @click.prevent="toggleCart">
                <img
                    src="../assets/shopping.svg"
                    class="h-6 cursor-pointer"
                    alt=""
                />

                <div
                    class="absolute text-sm -top-2 -right-3 p-1 flex justify-center items-center h-5 w-5 rounded-full text-white bg-gray-700"
                >
                  {{ cartItemsCount }}
                </div>
              </div>

              <ShoppingCart :isVisible="showCart" @toggle-cart="toggleCart"/>
            </div>
            <RouterLink v-show="!auth.isLoggedIn" :to="{ name: 'login' }">
              <img src="../assets/profile.svg" class="h-6" alt=""/>
            </RouterLink>

            <span v-show="auth.isLoggedIn">
              <div class="flex items-center">
                <button
                    @click.prevent="logOut()"
                    class="text-lg font-bold hover:text-black text-red-500"
                >
                  Log Out
                </button>
              </div>
            </span>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
