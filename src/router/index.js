import {createRouter, createWebHistory} from 'vue-router'
import Home from "../views/Home.vue"
import Menu from "../views/Menu.vue"
import Gallery from "../views/Gallery.vue"
import Reservation from "../views/Reservation.vue"
import About from '../views/about.vue'
import Contact from "../views/Contact.vue"


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: '/Menu',
        name: 'Menu',
        component: Menu,
    },
    {
        path: "/Gallery",
        name: "Gallery",
        component: Gallery,
    },
    {
        path:'/Reservation',
        name: 'Reservation',
        component: Reservation
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/Contact',
        name: "Contact",
        component: Contact,
    }

]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes 
})

export default router