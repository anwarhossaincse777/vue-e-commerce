import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";
import ProductDetails from "../components/ProductDetails.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import StoreView from "../views/StoreView.vue";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";
import CheckOut from "@/components/CheckOut.vue";
import {useAuth} from "@/stores/auth";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/store",
      name: "store",
      component: StoreView,
    },
    {
      path: "/single/product/:id",
      name: "productDetails",
      component: ProductDetails,
    },

    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {title: "Register",guest:true},
    },

    {
      path: '/cart',
      name: 'cart',
      component: ShoppingCart,
      meta: {title: "ShoppingCart",guest:true},
    },

    {
      path: '/user/checkout',
      name: 'checkout',
      component: CheckOut,
      meta: {title: "checkout",requiresAuth: true},
    },
  ]
});



const DEFAULT_TITLE="Ecommerce";


router.beforeEach((to,from,next)=>{

  document.title=to.meta.title || DEFAULT_TITLE;

  const auth = useAuth();

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!auth.getAuthStatus) {
      next({ name: "login"});
    } else {
      next();
    }
  }

  else if (to.matched.some((record) => record.meta.guest)) {
    if (auth.getAuthStatus) {
      next({ name: "checkout" });
    }else {
      next();
    }
  } else {
    next();
  }
});




export default router
