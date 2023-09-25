<template>
  <div class="page">
    <navbar/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>
<script>
    import navbar from "./components/navbar.vue"
    import Footer from "./components/Footer.vue"

  export default {
    name:'App',

    components : {
      navbar,
      Footer,
    },
    data() {
    return {
      showcontent: false
    }
  },git
}
</script>

<style>
    html{
      scroll-behavior: smooth;
    }
    body{
      background-color: #171717;
      color:white;
      font-family:"Cormorant Garamond", Georgia, serif;
    }
    .headings {
      font-family: "Satisfy", cursive;
    }
    .page{
      position: relative;
      overflow-x: hidden;
      width: 100%;
      height: 100%;
      transition: 0.5s;
    }
    .container{
        width: 100%;
        max-width: 1140px;
    }
    .color {
        color: rgb(123, 121, 121);
    }
    .fnt{
        font-family: 'Satisfy', cursive;
    }
</style>

