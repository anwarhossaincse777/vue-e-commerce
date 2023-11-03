import {defineStore} from "pinia";
import axios from "axios";


export const useProduct = defineStore('product', {
    state: () => ({
        products: {},
        loading: false,
    }),

    getters: {},

    actions: {

        //get product

        async getData(type = "") {
            try {
                const res = await axios.get("https://dummyjson.com/products/search?q=" + type);

                if (res.status === 200) {
                    this.products = res.data.products;
                    return new Promise((resolve) => {
                        resolve(res.data);
                    });
                }
            } catch (error) {
                if (error.response.data) {
                    return new Promise((reject) => {
                        reject(error.response.data.message);
                    });
                }
            }
        },


        async getCatData(type = "") {
            try {
                const res = await axios.get("https://dummyjson.com/products/category/" + type);

                if (res.status === 200) {
                    this.products = res.data.products;
                    return new Promise((resolve) => {
                        resolve(res.data);
                    });
                }
            } catch (error) {
                if (error.response.data) {
                    return new Promise((reject) => {
                        reject(error.response.data.message);
                    });
                }
            }
        },


    }
})