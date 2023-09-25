<template>
    <div id="Gallery">
        <header class="bg-image"> 
            <div class="content text-center">
                <div class="max-sm:w-30">
                    <h1 class="text-7xl font-extrabold max-sm:text-5xl">See Our Gallery</h1>
                    <p class="text-3xl italic max-sm:text-2xl">Brought to you by <a href="freehtml5.co">freehtml5.co</a></p>
                </div>
            </div>
        </header>
        <Gallery_images/>
        <Testimonial/>
        <Booking/>
    </div>
</template>

<script>
    import Testimonial from "../components/testimonial.vue"
    import Booking from "../components/Booking.vue"
    import Footer from "../components/Footer.vue"
    import Gallery_images from "../components/Gallery_images.vue"
    export default {
        name : 'Gallery',
        components: {
            Testimonial,
            Booking,
            Footer,
            Gallery_images,
        }
    }
</script>

<style scoped>
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
    @media (max-width:600px){
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