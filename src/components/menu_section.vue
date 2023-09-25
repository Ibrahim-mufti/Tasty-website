<template>
    <section id="Menu-section" class="pt-32 pb-64">
        <div class='container mx-auto max-md:!max-w-75 max-sm:!max-w-30 max-lg:!max-w-90'>
            <div class="flex flex-col justify-center">
                <div class="w-1/2 max-md:w-full mx-4 max-lg:w-full">
                    <h2 class="text-3xl mb-4 fnt">Today's Menu</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ab debitis sit itaque totam, a maiores nihil, nulla magnam porro minima officiis! Doloribus aliquam voluptates corporis et tempora consequuntur ipsam, itaque, nesciunt similique commodi omnis. Ad magni perspiciatis, voluptatum repellat.</p>
                </div>
                <div class="flex flex-row text-left justify-between flex-wrap max-md:justify-evenly max-lg:justify-evenly ">
                    <div class="mt-32">
                        <img class="w-64 max-lg:w-80 mb-3 h-auto" src="./Images/gallery_9.jpeg">
                        <h2 class="text-2xl mb-3">Bake Potato Pizza</h2>
                        <span class=" mb-3 text-2xl not-italic text-yellow-200">$20 <sup>.50</sup></span>
                        <p class="w-64 my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil cupiditate ut vero alias quaerat inventore molestias vel suscipit explicabo.</p>
                    </div>
                    <div class="mt-32  relative top-32 max-sm:top-0">
                        <img class="w-64 max-lg:w-80 mb-3 h-auto" src="./Images/gallery_8.jpeg">
                        <h2 class="text-2xl mb-3">Salted Fried Chicken</h2>
                        <span class=" mb-3 text-2xl not-italic text-yellow-200">$19 <sup>.00</sup></span>
                        <p class="w-64 my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil cupiditate ut vero alias quaerat inventore molestias vel suscipit explicabo.</p>
                    </div>
                    <div class="mt-32 ">
                        <img class="w-64 max-lg:w-80 mb-3 h-auto" src="./Images/gallery_7.jpeg">
                        <h2 class="text-2xl mb-3">Italian Sauce Mushroom</h2>
                        <span class=" mb-3 text-2xl not-italic text-yellow-200">$17 <sup>.99</sup></span>
                        <p class="w-64 my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil cupiditate ut vero alias quaerat inventore molestias vel suscipit explicabo.</p>
                    </div>
                    <div class="mt-32 mb-3 relative top-32 max-sm:top-0">
                        <img class="w-64 max-lg:w-80 mb-3 h-auto" src="./Images/gallery_6.jpeg">
                        <h2 class="text-2xl mb-3">Fried potato w/ Garlic</h2>
                        <span class=" mb-3 text-2xl not-italic text-yellow-200">$22 <sup>.50</sup></span>
                        <p class="w-64 my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil cupiditate ut vero alias quaerat inventore molestias vel suscipit explicabo.</p>
                    </div>
                </div>
            </div> 
        </div>
    </section>
</template>
<script>
    export default {
        name : 'M_S;'
    }
</script>
<style scoped>
    p{
        color: rgba(255, 255, 255, 0.3);
    }
</style>