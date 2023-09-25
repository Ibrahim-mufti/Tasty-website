<template>
    <div id="Home">     
        <Header/>
        <I_S/>
        <M_S/>
        <Testimonial/>
        <Slider/>
        <Event/>
        <Booking/>
    </div>
</template>

<script>
    import Header from "../components/header.vue"
    import I_S from '../components/intro_section.vue'
    import M_S from '../components/menu_section.vue'
    import Testimonial from '../components/testimonial.vue'
    import Slider from '../components/Slider.vue'
    import Event from '../components/CardSection.vue'
    import Booking from '../components/Booking.vue'

    export default {
        name:"Home",
        components:{
            Header,
            I_S,
            M_S,
            Testimonial,
            Slider,
            Event,
            Booking,
        }
    }
</script>

<style>

</style>