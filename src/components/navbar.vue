<template>
    <nav id="navbar" @scroll="handleScroll" class="py-3 m-auto w-full fixed !z-50">
        <div class="container mx-auto">
            <div class="flex flex-col justify-center text-center text-4xl w-3/4 mx-auto">
                <div >
                    <h2>Tasty<sub class="text-red-600 text-4xl" >.</sub></h2>
                    <div class="text-right">
                        <span id="nav-btn" @click="navmenu"><fa class="zindex cursor-pointer min-md:hidden relative text-3xl bottom-9 left-9" :icon="isNavMenuOpen ? 'close' : 'bars'"></fa></span>
                    </div>
                </div>
                <ul id="nav-items" class="uppercase py-4 flex justify-evenly flex-row text-sm nav-color max-md:hidden max-md:text-lg max-md:flex-col max-md:py-20 max-md:px-12 max-md:text-left max-md:justify-start">
                    <li class="max-md:mb-2" :class="{'active': activeView == 'home'}" @click="activeView='home' ; closing()"><router-link to ="/">Home</router-link></li>
                    <li class="max-md:mb-2" :class="{'active': activeView == 'menu'}" @click="activeView='menu' ; closing()"><router-link to ="/Menu">Menu</router-link></li>
                    <li class="max-md:mb-2" :class="{'active': activeView == 'Gallery'}" @click="activeView='Gallery' ; closing()"><router-link to ="/Gallery">Gallery</router-link></li>
                    <li class="max-md:mb-2" :class="{'active': activeView == 'Reservation'}" @click="activeView='Reservation' ; closing()"><router-link to ="/Reservation">Reservation</router-link></li>
                    <li class="max-md:mb-2" :class="{'active': activeView == 'About'}" @click="activeView='About' ; closing()"><router-link to ="/About">About</router-link></li>
                    <li class="max-md:mb-2" :class="{'active': activeView == 'Contact'}" @click="activeView='Contact' ; closing()" ><router-link to ="/Contact">contact</router-link></li>
                </ul>
                <div :class="isNavMenuOpen ? 'overlay' : ''"></div>
            </div>
        </div>
    </nav>
</template>
<script>
    export default {
        name : 'navbar',
        data() {
            return {
                activeView: "home",
                // setting navmenu open 
                    isNavMenuOpen: false,
                // setting screen width 
                    screenWidth: window.innerWidth
                }
            },
        created() {

                // adding event listeners for removing classes (left-navmenu, hide-leftmenu)
                window.addEventListener('resize', this.resizing)
            },
        mounted() {

            // adding event listener for scrolling 
            window.addEventListener('scroll', this.handleScroll)
    
            },
        destroyed() {
            // removing event listener for scrolling when scrolling value is zero
            window.removeEventListener('scroll', this.handleScroll);

                // removing event listeners for removing classes (left-navmenu, hide-leftmenu)
            window.removeEventListener('resize', this.resizing)

            },
        methods: {
            handleScroll() {
                let Navbar = document.getElementById('navbar')

                // checking current window scroll
                if (window.scrollY > 0) {

                    // adding class scroll if moved verticall
                    Navbar.classList.add('scrolled');
                    Navbar.classList.remove('unscrolled')
                }
                else {

                    // removing class scroll if moved verticall
                    Navbar.classList.add('unscrolled')
                    Navbar.classList.remove('scrolled');
                }
            },

            handleClick(event){

                // adding underline under the nav items
                let active = document.querySelector('.active')
                active.classList.remove("active")
                event.currentTarget.classList.add("active")
            },
            
            navmenu(){
                
                // checking the value of isNavMenuOpen
                if(this.isNavMenuOpen) {

                    // setting overflow to empty"
                    document.body.style.overflow = ""

                    let NT = document.getElementById('nav-items')
                    NT.classList.remove('left-navmenu')
                    NT.classList.add('hide-leftmenu')

                    // changing value of isNavMenuOpen = true
                    this.isNavMenuOpen = !this.isNavMenuOpen

                }
                else if (!this.isNavMenuOpen){
                    // setting overflow to hidden it will disable scroll
                    document.body.style.overflow = "hidden"
                    let NT = document.getElementById('nav-items')
                    NT.classList.remove('hide-leftmenu')
                    NT.classList.add('left-navmenu')
                     // changing value of isNavMenuOpen = false
                    this.isNavMenuOpen = !this.isNavMenuOpen
                }

            },
            resizing(){

                // setting width to current width of the screen
                this.screenWidth = window.innerWidth

                // removing class as soon as width reaches 768 or more
                if(this.screenWidth > 768) {

                    let NT = document.getElementById('nav-items')
                    NT.classList.remove('hide-leftmenu','left-navmenu')
                    document.body.style.overflow = ""
                    this.isNavMenuOpen = null
                }
            },
            closing(){
                
                    let NT = document.getElementById("nav-items")
                    NT.classList.remove('left-navmenu')
                    NT.classList.add('hide-leftmenu')
                    this.isNavMenuOpen = !this.isNavMenuOpen
                    document.body.style.overflow = ''
                }
            }
        }
</script>
<style scoped> 
    .zindex{
        z-index: 101!important;
    }

    .container{
        width: 100%;
        max-width: 800px;
    }
    .scrolled{
        margin-top: -10px;
        padding-bottom: 0;
        background-color: black;
        transition: all .5s ease;
    }
    .scrolled h2{
        margin-top: -220px;
        transition: all 1s ease;
    }
    .unscrolled h2{
        margin-top:0;
        transition:all 1s ease;
    }
    .active {
        margin-bottom: 4px;
        border-bottom: 2px solid red;
    }
    .nav-color{
        color: rgb(180, 181, 181);
    }
    #nav-btn{
        display: none;
    }
    @media (max-width: 768px) {
        #nav-btn {
            display: block;
        }
        @keyframes Slideright {
            0% {
                transform: translateX(250px);
            }        
            100%{
                transform: translateX(0px);
            }
        }
        @keyframes slideleft {
            0% {
                transform: translateX(0);
            }
            100%{
                transform: translateX(800px);
            }
        }
        .left-navmenu {
            display: flex;
            position: fixed;
            top: 0;
            right:0;
            width: 50%;
            height: 100%;
            background-color: black;
            z-index:100;
            animation: Slideright 1s forwards;
        }
        .hide-leftmenu{
            display: flex;
            position:fixed;
            top: 0;
            right:0;
            width: 50%;
            height: 100%;
            background-color: black;
            z-index:100;
            animation: slideleft 2s forwards
        }
        #navbar::before {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            z-index: -1;
            display: none;
        }

        .isNavMenuOpen #navbar::before {
            display: block;
        }
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            z-index: 99;
        }
        .active {
            border: none;
            color: white;
            transition: all .6s ease;
        }
    }
    @media (max-width:600px) {
        @keyframes Slideright {
            0% {
                transform: translateX(250px);
            }        
            100%{
                transform: translateX(0px);
            }
        }
        @keyframes slideleft {
            0% {
                transform: translateX(0);
            }
            100%{
                transform: translateX(800px);
            }
        }
        .left-navmenu {
            display: flex;
            position: fixed;
            top: 0;
            right:0;
            width: 75%;
            height: 100%;
            background-color: black;
            z-index:100;
            animation: Slideright 1s forwards;
        }
        .hide-leftmenu{
            display: flex;
            position: fixed;
            top: 0;
            right:0;
            width: 75%;
            height: 100%;
            background-color: black;
            z-index:100;
            animation: slideleft 2s forwards
        }
        #navbar::before {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            z-index: -1;
            display: none;
        }

        .isNavMenuOpen #navbar::before {
            display: block;
        }
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            z-index: 99; 
        }
    }
</style>

<!-- if (this.activeView in ['home', 'menu', 'Gallery', 'Reservation', 'About', 'Contact']){
                        
} -->