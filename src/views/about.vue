<template>
    <div id="About">
        <header class="bg-image"> 
            <div class="content text-center">
                <div class="max-sm:max-w-30">
                    <h1 class="text-7xl font-extrabold max-md:text-4xl">About Our Restaurant</h1>
                    <p class="text-3xl italic max-md:text-2xl">Brought to you by <a href="freehtml5.co">freehtml5.co</a></p>
                </div>
            </div>
        </header>
        <I_S/>
        <section class="py-32">
            <div class="container mx-auto max-md:!max-w-75 max-sm:!max-w-30 max-lg:!max-w-90">
                <div class="timeline">
                    <div class="text-center max-md:text-left">
                        <div class="bg-heading mb-8">
                            <h2>Our Experience</h2>
                        </div>
                    </div>
                    <div class="relative set-width left-0 mb-8">
                        <fa class="text-lg p-2 bg-red-500 rounded-full img-positioning-left" :icon="['fab',`react`]"></fa>
                        <div class="text-right max-md:text-left  max-md:ml-14">
                            <h2 class="text-2xl">The Founder Meet</h2>
                            <p class="color text-xl">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                    <div class="relative set-width left-1/2 max-md:text-left  mb-8 max-md:left-0">
                        <fa class="text-lg p-2 bg-red-500 rounded-full img-positioning-right" :icon="['fab',`react`]"></fa>
                        <div class="ml-14">
                            <h2 class="text-2xl">The Founder Meet</h2>
                            <p class="color text-xl">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                    <div class="relative set-width left-0 mb-8 max-md:left-0">
                        <fa class="text-lg p-2 bg-red-500 rounded-full img-positioning-left" :icon="['fab',`react`]"></fa>
                        <div class="text-right max-md:text-left  max-md:ml-14">
                            <h2 class="text-2xl">The Founder Meet</h2>
                            <p class="color text-xl">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                    <div class="text-center max-md:text-left">
                        <div class="bg-heading mt-8 mb-8">
                            <h2>More Restaurant Outlet</h2>
                        </div>
                    </div>
                    <div class="relative set-width left-1/2 mb-8 max-md:left-0">
                        <fa class="text-lg p-2 bg-red-500 rounded-full img-positioning-right" :icon="['fab',`react`]"></fa>
                        <div class="ml-14">
                            <h2 class="text-2xl">The Founder Meet</h2>
                            <p class="color text-xl">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                    <div class="relative set-width left-0 mb-8">
                        <fa class="text-lg p-2 bg-red-500 rounded-full img-positioning-left" :icon="['fab',`react`]"></fa>
                        <div class="text-right max-md:text-left max-md:ml-14">
                            <h2 class="text-2xl">The Founder Meet</h2>
                            <p class="color text-xl">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                    <div class="relative set-width left-1/2 mb-8 max-md:left-0">
                        <fa class="text-lg p-2 bg-red-500 rounded-full img-positioning-right" :icon="['fab',`react`]"></fa>
                        <div class="ml-14">
                            <h2 class="text-2xl">The Founder Meet</h2>
                            <p class="color text-xl">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                    <div class="relative set-width left-0 mb-8">
                        <fa class="text-lg p-2 bg-red-500 rounded-full img-positioning-left" :icon="['fab',`react`]"></fa>
                        <div class="text-right max-md:text-left  max-md: ml-14">
                            <h2 class="text-2xl">The Founder Meet</h2>
                            <p class="color text-xl">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <tesimonial/>
        <booking/>
    </div>
</template>

<script>
    import I_S from '../components/intro_section.vue'
    import tesimonial from '../components/testimonial.vue'
    import booking from "../components/Booking.vue"
    export default {
        name: 'About',
        components: {
            I_S,
            tesimonial,
            booking,
        }
    }

</script>

<style scoped>
    .set-width{
        width: 45%;
    }
    .img-positioning-left{
        position: absolute;
        right:-74px;
        top:32px;
        /* z-index: 10; */
    }
    .img-positioning-right{
        position: absolute;
        left:-16px;
        top:32px;
        /* z-index: 10; */
    }
    .timeline{
        position:relative;
    }
    .timeline::after{
        content:'';
        position: absolute;
        width:2px;
        height:100%;
        left:50%;
        /* margin-left:-33px; */
        top:0;
        background: #434343;
        z-index: -1;
    }
    .bg-heading{
        display: inline-block;
        padding: 7px 15px;
        font-size: 18px;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-weight: bold;
        color: #fff;
        z-index: 99;
        border-radius: 4px;  
        background-color: #434343;

    }
    .bg-image::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }
    .bg-image{
        background: url('../components/Images/hero_1.jpeg');
        background-size: cover;
        width: 100%;
        height: 100vh;
        background-repeat: no-repeat; 
        position: relative;
    }
    .content{
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2!important;
    }
    .content a{
        position: relative;
    }
    a::before {
        background: #ea272d;
        content: "";
        position: absolute;
        bottom: 0;
        height: 2px;
        width: 100%;
    }
    @media (max-width:768px){
        .timeline::after{
            content:'';
            position: absolute;
            width:2px;
            height:100%;
            left:20px;
            /* margin-left:-33px; */
            top:0;
            background: #434343;
            z-index: -1;
        }
        .img-positioning-left{
            position: absolute;
            left: 5px!important;
            top:32px;
            /* z-index: 10; */
        }
        .img-positioning-right{
            position: absolute;
            left: 5px !important;
            top:32px;
            /* z-index: 10; */
        }
        .set-width{
            width: 100%;
        }
    }
    @media (max-width: 1024px){
        .img-positioning-left{
                position: absolute;
                right:-63px;
                top:32px;
                /* z-index: 10; */
        }
        .img-positioning-right{
            position: absolute;
            left:-16px;
            top:32px;
            /* z-index: 10; */
        }
            
    }
    @media (max-width:640px){
        .bg-image{
            background: url('../components/Images/hero_1.jpeg');
            background-size: cover;
            width: 100%;
            height: 100vw;
            background-repeat: no-repeat; 
            position: relative;
        }
    }
    @media (max-width:768px){
        .bg-image{
            background: url('../components/Images/hero_1.jpeg');
            background-size: cover;
            width: 100%;
            height: 100vw;
            background-repeat: no-repeat; 
            position: relative;
        }
    }
</style>