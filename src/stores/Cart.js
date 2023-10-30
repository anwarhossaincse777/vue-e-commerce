import { defineStore } from "pinia";
import {useNotification} from "@/stores/notification";


export const useCart = defineStore('cart', {
    state:()=>({

        cartItems: [],
    }),

    persist: {
        paths: ['cartItems'],
    },


    getters: {

        totalPrice:(state)=>{
            let total=0;
            state.cartItems.map((el)=>{

                total+=el["price"] * el["quantity"];

            });

            return total;
        },

        cartItemsCount:(state)=>{
            let total=0;
            state.cartItems.map((el)=>{

                total+=el["quantity"];

            });

            return total;
        },
    },

    actions: {

        //get slider

        addToCart(product) {

            let item = product;
            item = { ...item, quantity: 1 };
            if (this.cartItems.length > 0) {
                let boolean = this.cartItems.some((i) => i.id === item.id);
                if (boolean) {
                    let index = this.cartItems.findIndex((i) => i.id === item.id);
                    this.cartItems[index]["quantity"] += 1;
                } else {
                    this.cartItems.push(item);
                }
            } else {
                this.cartItems.push(item);
            }

        },

        async destroy(product){
            if (this.cartItems.length>0){
                let boolean=this.cartItems.some((i)=>i.id===product.id);
                if (boolean){
                    let index=this.cartItems.findIndex((i)=>i.id===product.id);
                    this.cartItems.splice(index,1);
                }
            }
        },

        // cart decrement

        async decrement(product){
            if (this.cartItems.length>0){
                let index=this.cartItems.findIndex((i)=>i.id===product.id);

                if ( this.cartItems[index]["quantity"] !== 1){
                    let boolean=this.cartItems.some((i)=>i.id===product.id);
                    if (boolean){
                        let index=this.cartItems.findIndex((i)=>i.id===product.id);
                        this.cartItems[index]["quantity"] -= 1;
                    }
                }else {
                    let notify=useNotification();
                    notify.Error("Product quantity can not be zero")
                }
            }
        },

        // cart increment
        async increment(product){
            if (this.cartItems.length>0){
                let index=this.cartItems.findIndex((i)=>i.id===product.id);

                if ( this.cartItems[index]["quantity"] !== 0){
                    let boolean=this.cartItems.some((i)=>i.id===product.id);
                    if (boolean){
                        let index=this.cartItems.findIndex((i)=>i.id===product.id);
                        this.cartItems[index]["quantity"] += 1;

                    }
                    let notify=useNotification();
                    notify.Success("Product quantity increment Successfully")
                }
            }
        },
    }
})