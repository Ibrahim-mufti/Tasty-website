<template>
    <header class="bg-image"> 
            <div class="content text-center">
                <div class="max-sm:!max-w-30">   
                    <h1 class="text-7xl font-bold max-sm:text-5xl">The Best Coffee<em> & </em>Restaurant<em> in </em>Brooklyn</h1>
                    <p class="text-3xl italic max-sm:text-2xl">Brought to you by <a href="freehtml5.co">freehtml5.co</a></p>
                </div>
            </div>
    </header>
</template>

<script>
    export default {
        name : 'header',
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
        background: url('./Images/hero_1.jpeg');
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
    @media (max-width:640px){
        .bg-image{
            background: url('./Images/hero_1.jpeg');
            background-size: cover;
            width: 100%;
            height: 100vw;
            background-repeat: no-repeat; 
            position: relative;
        }
    }
    @media (max-width:768px) {
        .bg-image{
            background: url('./Images/hero_1.jpeg');
            background-size: cover;
            width: 100%;
            height: 100vw;
            background-repeat: no-repeat; 
            position: relative;
        }
    }
</style>