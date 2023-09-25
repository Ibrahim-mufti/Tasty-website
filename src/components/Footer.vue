<template>
    <footer class="py-32">
        <div class="container mx-auto max-md:!max-w-75 max-sm:!max-w-30 max-lg:!max-w-90">
            <div class="flex flex-row justify-evenly mb-32 max-md:flex-col max-lg:flex-col">
                <div class="w-1/4 max-md:w-full max-md: mb-4">
                    <h2 class="text-lg font mb-4">Tasty</h2>
                    <p class="color">Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
                </div>
                <div>
                    <h2>Links</h2>
                    <ul class="my-4">
                        <li class="color"><a class="hover:text-red-600 transition-all duration-300 ease-linear" href="#">Home</a></li>
                        <li class="color"><a class="hover:text-red-600 transition-all duration-300 ease-linear" href="#">About</a></li>
                        <li class="color"><a class="hover:text-red-600 transition-all duration-300 ease-linear" href="#">Menu</a></li>
                        <li class="color"><a class="hover:text-red-600 transition-all duration-300 ease-linear" href="#">Gallery</a></li>
                    </ul>
                </div>
                <div>
                    <h2>Categories</h2>
                    <ul class="my-4">
                        <li class="color" ><a class="hover:text-red-600 transition-all duration-300 ease-linear" href="#">Landing page</a></li>
                        <li class="color" ><a class="hover:text-red-600 transition-all duration-300 ease-linear" href="#">Real Estate</a></li>
                        <li class="color" ><a class="hover:text-red-600 transition-all duration-300 ease-linear" href="#">Personal</a></li>
                        <li class="color" ><a class="hover:text-red-600 transition-all duration-300 ease-linear" href="#">Business</a></li>
                        <li class="color" ><a class="hover:text-red-600 transition-all duration-300 ease-linear" href="#">E-commerce</a></li>
                    </ul>
                </div>
                <div>
                    <h2>Contact information</h2>
                    <ul class="my-4 color">
                        <li><p>198 West 21th Street,<br>Suite 721 New York NY 10016</p></li>
                        <li><a class="hover:text-red-600 transition-all duration-300 ease-linear"  href="#">+ 1235 2355 98</a></li>
                        <li><a class="hover:text-red-600 transition-all duration-300 ease-linear"  href="#">info@yoursite.com</a></li>
                        <li><a class="hover:text-red-600 transition-all duration-300 ease-linear"  href="freehtml5.co">freehtml5.co</a></li>
                    </ul>
                </div>
            </div>
            <div class="text-center mb-6">
                <p class="color">&copy; 2016 Free HTML5. All Rights Reserved.<br> Designed by <a class="text-red-600" href="freehtml5.co">FreeHTML5.co </a>Demo Images: <a class="text-red-600" >Unsplash</a></p>
            </div>
            <div class="flex text-2xl text-red-600 flex-row justify-center text-center">
                <p class="mr-3"><fa :icon="['fab',`twitter`]"></fa></p>
                <p class="mr-3"><fa :icon="['fab',`facebook`]"></fa></p>
                <p class="mr-3"><fa :icon="['fab',`linkedin`]"></fa></p>
                <p class="mr-3"><fa :icon="['fab',`dribbble`]"></fa></p>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name : 'footer',
    }
</script>

<style>

</style>
