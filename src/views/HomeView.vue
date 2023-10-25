<script setup>
import ProductList from "../components/ProductList.vue";
import {useProduct} from "@/stores/product";
import {storeToRefs} from "pinia";
import {onMounted} from "vue";
const pro = useProduct();
const {products} = storeToRefs(pro);


onMounted(() => {
  pro.getData();
});


</script>

<template>
  <ProductList :products="products" />
</template>

<style scoped></style>
