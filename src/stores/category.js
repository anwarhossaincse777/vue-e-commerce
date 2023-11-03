import {defineStore} from "pinia";
import axios from "axios";


export const useCategory = defineStore('category', {
    state: () => ({
        categories: {},
        loading: false,
    }),

    getters: {},

    actions: {

        //get categories

        async getData(type = "") {
            try {
                const res = await axios.get("https://dummyjson.com/products/categories");

                console.log(res);

                if (res.status === 200) {
                    this.categories = res.data;
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