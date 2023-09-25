<template>
    <section id="Intro-section" class="py-32">
        <div class="container mx-auto text-left max-md:!max-w-75 max-md:text-center max-sm:!max-w-30 max-lg:!max-w-90 max-lg:text-center">
            <div class="flex flex-row max-md:flex-col max-md:justify-center max-lg:flex-col ">
                <div class="trans max-md:flex justify-center max-md:mb-4 max-lg:mb-4">
                    <img class=" text-center w-full h-auto max-md:w-full max-lg:w-full" src="./Images/hero_1.jpeg">
                </div>
                <div class="relative w-1/2 right-20 max-md:right-0 max-md:w-full max-md:text-left max-lg:right-0 max-lg:w-full max-lg:text-left ">
                    <h2 class="text-3xl mb-7">The Restaurant</h2>
                    <p class=" mb-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae neque quisquam at deserunt ab praesentium architecto tempore saepe animi voluptatem molestias, eveniet aut laudantium alias, laboriosam excepturi, et numquam? Atque tempore iure tenetur perspiciatis, aliquam, asperiores aut odio accusamus, unde libero dignissimos quod aliquid neque et illo vero nesciunt. Sunt!</p>
                    <p class=" mb-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam iure reprehenderit nihil nobis laboriosam beatae assumenda tempore, magni ducimus abentey.</p>
                    <a href="#" class="py-3 px-7 bg-transparent border-2 border-red-600 hover:bg-red-600 transition-all duration-300 ease-in  " >Our History</a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        name : 'intro_section'

    }
</script>
<style scoped>
    .trans{
        transform: translateX(-400px);
    }
    h2{
        font-family: "Satisfy", cursive;
    }
    p{
        color: rgba(255, 255, 255, 0.3);
    } 
    @media (max-width:768px) {
        .trans{
            transform: translateX(0px);
            text-align: center;
        }
    }
    @media (max-width:1024px) {
        .trans{
            transform: translateX(0px);
            text-align: center;
        }
    }

</style>